-- =====================================================================
-- supabase/migrations/20261120000001_init_schema.sql
-- Amerisolar — sieć stron krajowych. Schemat bazowy (CLAUDE.md §3).
-- Zasady: RLS na każdej tabeli; publiczny SELECT tylko dla treści
-- status = 'published'; leads/lead_events/keywords/media_assets bez
-- dostępu publicznego (zapis wyłącznie przez Server Action z service_role).
-- =====================================================================

-- ---------- Typy ----------------------------------------------------
create type public.content_status as enum ('draft', 'review', 'published', 'archived');
create type public.page_type      as enum ('page', 'landing', 'category', 'tool', 'post', 'legal');
create type public.document_type  as enum ('datasheet', 'certificate', 'manual', 'warranty');
create type public.lead_type      as enum ('distributor', 'trader', 'installer', 'epc', 'business', 'homeowner');
create type public.lead_status    as enum ('new', 'qualified', 'contacted', 'quoted', 'won', 'lost', 'spam');
create type public.media_source   as enum ('photo', 'higgsfield', 'manufacturer');
create type public.search_intent  as enum ('transactional', 'commercial', 'informational', 'navigational');

-- ---------- updated_at ----------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ---------- sites (multi-tenant po domenie) --------------------------
create table public.sites (
  id              uuid primary key default gen_random_uuid(),
  country_code    char(2)  not null unique,              -- 'PL'
  default_locale  text     not null,                     -- 'pl-PL'
  domain          text     not null unique,              -- host produkcyjny
  preview_domains text[]   not null default '{}',        -- np. *.vercel.app (noindex)
  currency        char(3)  not null,                     -- 'PLN'
  company_name    text,                                  -- TODO(klient)
  phone           text,
  email           text,
  address         text,
  vat_id          text,
  is_live         boolean  not null default false,       -- false => noindex
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ---------- produkty (seed z data/products.json) ---------------------
create table public.products (
  id              uuid primary key default gen_random_uuid(),
  model           text not null unique,                  -- 'AS-8M132N-BHC'
  slug            text not null unique,                  -- 'as-8m132n-bhc'
  family          text not null,                         -- 'TOPCon N-type, double glass'
  is_flexible     boolean not null default false,
  bifacial        boolean not null default false,
  cells           integer not null,
  dimensions_mm   integer[] not null check (array_length(dimensions_mm, 1) = 3),
  weight_kg       numeric(6,2) not null,
  warranty_product_years      integer not null,
  warranty_linear_power_years integer not null,
  packaging       jsonb not null,                        -- pcs_per_pallet / 20ft / 40ft_hq (wartości 1:1 z JSON)
  specs           jsonb not null default '{}',           -- pozostałe pola karty: temp_coeff, glass, junction_box, ...
  to_verify       text[] not null default '{}',          -- blokuje publikację faktu (CLAUDE.md §6)
  status          public.content_status not null default 'draft',
  sort_order      integer not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table public.product_variants (
  id              uuid primary key default gen_random_uuid(),
  product_id      uuid not null references public.products(id) on delete cascade,
  power_w         integer not null,
  efficiency_pct  numeric(5,2) not null,
  voc_v           numeric(6,2) not null,
  isc_a           numeric(6,2) not null,
  vmp_v           numeric(6,2) not null,
  imp_a           numeric(6,2) not null,
  noct_pmax_w     integer,                               -- NULL gdy karta niespójna (np. AS-7M120N-BHC)
  unique (product_id, power_w)
);

create table public.product_i18n (
  product_id       uuid not null references public.products(id) on delete cascade,
  locale           text not null,
  name             text not null,
  short_desc       text,
  long_desc        text,
  use_cases        jsonb not null default '[]',
  faq              jsonb not null default '[]',
  meta_title       text check (char_length(meta_title) <= 60),
  meta_description text check (char_length(meta_description) <= 155),
  reviewed_by      uuid,                                 -- FK dodany niżej (authors)
  updated_at       timestamptz not null default now(),
  primary key (product_id, locale)
);

-- ---------- certyfikaty i dokumenty ----------------------------------
create table public.certificates (
  id             uuid primary key default gen_random_uuid(),
  number         text not null unique,                   -- 'Z2 093522 0030 Rev. 00'
  body           text not null,                          -- 'TÜV SÜD Product Service GmbH'
  standards      text[] not null default '{}',
  issued_on      date,
  valid_until    date,
  covered_models text[] not null default '{}',           -- tylko modele faktycznie objęte certyfikatem
  file_url       text,
  status         public.content_status not null default 'draft',
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create table public.documents (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid references public.products(id) on delete cascade,
  type        public.document_type not null,
  locale      text not null default 'en',
  title       text not null,
  file_url    text not null,
  version     text,                                      -- np. 'EN-V1.0-2025'
  status      public.content_status not null default 'draft',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ---------- autorzy (E-E-A-T, tylko prawdziwe osoby) -----------------
create table public.authors (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  role        text not null,
  bio         text,
  photo_url   text,
  status      public.content_status not null default 'draft',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.product_i18n
  add constraint product_i18n_reviewed_by_fkey
  foreign key (reviewed_by) references public.authors(id) on delete set null;

-- ---------- treść (strony + artykuły w jednej tabeli) ----------------
create table public.pages (
  id            uuid primary key default gen_random_uuid(),
  site_id       uuid not null references public.sites(id) on delete cascade,
  locale        text not null,
  slug          text not null,                           -- pełna ścieżka bez domeny, np. 'rozwiazania-specjalne/stadiony-i-hale-sportowe'
  type          public.page_type not null,
  title         text not null check (char_length(title) <= 60),
  h1            text not null,
  description   text check (char_length(description) <= 155),
  body_mdx      text,
  meta          jsonb not null default '{}',             -- og, keywords, prefill CTA itp.
  schema_type   text,                                    -- 'Article' | 'HowTo' | 'WebApplication' | ...
  translation_group uuid,                                -- łączy odpowiedniki między krajami (hreflang)
  status        public.content_status not null default 'draft',
  author_id     uuid references public.authors(id) on delete set null,
  reviewed_by   uuid references public.authors(id) on delete set null,
  published_at  timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (site_id, locale, slug),
  check (status <> 'published' or reviewed_by is not null) -- treść AI nie wychodzi bez redakcji
);

create table public.faqs (
  id         uuid primary key default gen_random_uuid(),
  site_id    uuid not null references public.sites(id) on delete cascade,
  locale     text not null,
  page_id    uuid references public.pages(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  question   text not null,
  answer     text not null,
  sort_order integer not null default 0,
  status     public.content_status not null default 'draft',
  updated_at timestamptz not null default now()
);

create table public.glossary_terms (
  id         uuid primary key default gen_random_uuid(),
  site_id    uuid not null references public.sites(id) on delete cascade,
  locale     text not null,
  slug       text not null,
  term       text not null,
  definition text not null,
  status     public.content_status not null default 'draft',
  updated_at timestamptz not null default now(),
  unique (site_id, locale, slug)
);

create table public.redirects (
  id         uuid primary key default gen_random_uuid(),
  site_id    uuid not null references public.sites(id) on delete cascade,
  from_path  text not null,
  to_path    text not null,
  code       smallint not null default 301 check (code in (301, 302, 307, 308)),
  created_at timestamptz not null default now(),
  unique (site_id, from_path)
);

create table public.keywords (
  id            uuid primary key default gen_random_uuid(),
  site_id       uuid not null references public.sites(id) on delete cascade,
  phrase        text not null,
  cluster       text not null,
  intent        public.search_intent not null,
  target_path   text,                                    -- jedna fraza główna = jeden URL
  is_primary    boolean not null default false,
  volume        integer,                                 -- z Senuto/Ahrefs/GSC, nie zgadujemy
  kd            integer,
  updated_at    timestamptz not null default now(),
  unique (site_id, phrase)
);
create unique index keywords_one_primary_per_url
  on public.keywords (site_id, target_path) where is_primary;

-- ---------- leady ----------------------------------------------------
create table public.leads (
  id                  uuid primary key default gen_random_uuid(),
  site_id             uuid not null references public.sites(id),
  type                public.lead_type not null,
  form                text not null default 'rfq',        -- 'rfq' | 'site_qualification' | 'datasheet'
  tags                text[] not null default '{}',       -- np. 'flex'
  company             text,
  nip                 text,
  name                text not null,
  email               text not null,
  phone               text,
  product_interest    text[] not null default '{}',
  quantity_kwp        numeric(12,2),
  quantity_containers numeric(8,2),
  delivery_location   text,
  timeline            text,
  message             text,
  site_details        jsonb not null default '{}',        -- pola formularza kwalifikacji obiektu (§4A)
  attachments         text[] not null default '{}',       -- ścieżki w Storage (bucket 'lead-uploads')
  utm_source          text,
  utm_medium          text,
  utm_campaign        text,
  utm_term            text,
  utm_content         text,
  landing_page        text,
  consent_contact     boolean not null,
  consent_marketing   boolean not null default false,
  consent_ts          timestamptz not null default now(),
  ip_hash             text,                               -- do rate limitu, bez surowego IP
  score               integer,
  status              public.lead_status not null default 'new',
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  check (consent_contact)
);
create index leads_site_created_idx on public.leads (site_id, created_at desc);
create index leads_ip_hash_created_idx on public.leads (ip_hash, created_at desc);

create table public.lead_events (
  id       bigint generated always as identity primary key,
  lead_id  uuid not null references public.leads(id) on delete cascade,
  event    text not null,                                  -- 'created' | 'notified' | 'scored' | ...
  payload  jsonb not null default '{}',
  ts       timestamptz not null default now()
);

-- ---------- media (w tym Higgsfield, CLAUDE.md §8) -------------------
create table public.media_assets (
  id           uuid primary key default gen_random_uuid(),
  url          text not null,
  source       public.media_source not null,
  prompt       text,
  model        text,
  seed         text,
  alt_pl       text not null,
  caption      text,                                     -- AI na liniach elastycznych: 'Wizualizacja poglądowa'
  license_note text,
  used_on      text[] not null default '{}',
  created_at   timestamptz not null default now(),
  check (source <> 'higgsfield' or (prompt is not null and model is not null))
);

-- ---------- triggery updated_at --------------------------------------
do $$
declare t text;
begin
  foreach t in array array[
    'sites','products','product_i18n','certificates','documents','authors',
    'pages','faqs','glossary_terms','keywords','leads'
  ] loop
    execute format(
      'create trigger %I_set_updated_at before update on public.%I
         for each row execute function public.set_updated_at()', t, t);
  end loop;
end $$;

-- ---------- RLS ------------------------------------------------------
alter table public.sites            enable row level security;
alter table public.products         enable row level security;
alter table public.product_variants enable row level security;
alter table public.product_i18n     enable row level security;
alter table public.certificates     enable row level security;
alter table public.documents        enable row level security;
alter table public.authors          enable row level security;
alter table public.pages            enable row level security;
alter table public.faqs             enable row level security;
alter table public.glossary_terms   enable row level security;
alter table public.redirects        enable row level security;
alter table public.keywords         enable row level security;
alter table public.leads            enable row level security;
alter table public.lead_events      enable row level security;
alter table public.media_assets     enable row level security;

-- Publiczny odczyt: konfiguracja serwisu i przekierowania (potrzebne w middleware).
create policy "sites_public_read"     on public.sites     for select to anon, authenticated using (true);
create policy "redirects_public_read" on public.redirects for select to anon, authenticated using (true);

-- Publiczny odczyt: wyłącznie opublikowane.
create policy "products_public_read" on public.products
  for select to anon, authenticated using (status = 'published');
create policy "product_variants_public_read" on public.product_variants
  for select to anon, authenticated
  using (exists (select 1 from public.products p where p.id = product_id and p.status = 'published'));
create policy "product_i18n_public_read" on public.product_i18n
  for select to anon, authenticated
  using (reviewed_by is not null
         and exists (select 1 from public.products p where p.id = product_id and p.status = 'published'));
create policy "certificates_public_read" on public.certificates
  for select to anon, authenticated using (status = 'published');
create policy "documents_public_read" on public.documents
  for select to anon, authenticated using (status = 'published');
create policy "authors_public_read" on public.authors
  for select to anon, authenticated using (status = 'published');
create policy "pages_public_read" on public.pages
  for select to anon, authenticated using (status = 'published');
create policy "faqs_public_read" on public.faqs
  for select to anon, authenticated using (status = 'published');
create policy "glossary_public_read" on public.glossary_terms
  for select to anon, authenticated using (status = 'published');

-- leads, lead_events, keywords, media_assets: brak polityk => brak dostępu
-- dla anon/authenticated. Zapis i odczyt wyłącznie service_role (serwer).

-- ---------- Storage --------------------------------------------------
insert into storage.buckets (id, name, public) values
  ('media',        'media',        true),   -- grafiki stron (next/image)
  ('documents',    'documents',    true),   -- karty katalogowe, certyfikaty PDF
  ('lead-uploads', 'lead-uploads', false)   -- zdjęcia/rzuty dachu z formularza kwalifikacji
on conflict (id) do nothing;
