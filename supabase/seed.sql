-- supabase/seed.sql — WYGENEROWANE przez scripts/build-seed.mjs z data/products.json. Nie edytuj ręcznie.
begin;

insert into public.sites (country_code, default_locale, domain, currency, is_live)
values ('PL', 'pl-PL', 'amerisolar.pl', 'PLN', false)
on conflict (country_code) do update set default_locale = excluded.default_locale, domain = excluded.domain, currency = excluded.currency;

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M108N-BHC', 'as-7m108n-bhc', 'TOPCon N-type', false, true, 108, array[1722, 1134, 30], 24, 20, 30, '{"pcs_per_pallet":36,"pcs_per_20ft":216,"pcs_per_40ft_hq":936}'::jsonb, '{"segment_pl":["dachy domów","małe firmy","instalatorzy"],"frame_color":"black","cell":"Monocrystalline N-type TOPCon 182x91 mm, half-cell","bifacial_gain_example":{"base_w":440,"gain_pct_to_pmax_w":{"10":484,"15":506,"20":528,"25":550,"30":572}},"temp_coeff":{"pmax_pct_per_c":-0.3,"voc_pct_per_c":-0.25,"isc_pct_per_c":0.045,"noct_c":"43±2"},"glass":"3.2 mm hartowane z powłoką AR (wg karty: ''Front/Back Glass'')","junction_box":"IP68, 3 diody","connector":"MC4 lub kompatybilne","max_system_voltage_v":"1000/1500 DC","max_series_fuse_a":30,"fire_rating":"Class C","mechanical_load_pa":{"wind":2400,"snow":5400},"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","CE","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":1.953,"areal_mass_kg_m2":12.29,"max_power_density_w_m2":230,"areal_mass_note":"masa samego modułu — bez konstrukcji wsporczej/balastu"}'::jsonb, array['brak w przesłanym certyfikacie TÜV — poprosić o certyfikat IEC dla tego modelu', 'konstrukcja tyłu (szkło vs folia transparentna)']::text[], 'draft', 0)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M108N-BHC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (430, 22.02, 38.4, 14.06, 32.2, 13.36, 324),
  (435, 22.28, 38.6, 14.12, 32.4, 13.43, 328),
  (440, 22.53, 38.8, 14.18, 32.6, 13.5, 332),
  (445, 22.79, 39, 14.24, 32.8, 13.57, 336),
  (450, 23.04, 39.2, 14.3, 33, 13.64, 340)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M108N-BHC';

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M120N-HC', 'as-7m120n-hc', 'TOPCon N-type', false, false, 120, array[1908, 1134, 30], 23, 20, 30, '{"pcs_per_pallet":36,"pcs_per_20ft":216,"pcs_per_40ft_hq":864}'::jsonb, '{"segment_pl":["dachy domów","dachy firm","instalatorzy"],"cell":"Monocrystalline N-type 182x91 mm, half-cell","temp_coeff":{"pmax_pct_per_c":-0.3,"voc_pct_per_c":-0.25,"isc_pct_per_c":0.045,"noct_c":"43±2"},"glass":"3.2 mm hartowane z powłoką AR","junction_box":"IP68, 3 diody","connector":"MC4 lub kompatybilne","max_system_voltage_v":"1000/1500 DC","max_series_fuse_a":25,"fire_rating":"Class C","mechanical_load_pa":{"wind":2400,"snow":5400},"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","CE","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":2.164,"areal_mass_kg_m2":10.63,"max_power_density_w_m2":231,"areal_mass_note":"masa samego modułu — bez konstrukcji wsporczej/balastu"}'::jsonb, array['brak w przesłanym certyfikacie TÜV — poprosić o certyfikat IEC']::text[], 'draft', 1)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M120N-HC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (465, 21.49, 42, 13.96, 35.2, 13.22, 348),
  (470, 21.72, 42.2, 14.02, 35.4, 13.28, 352),
  (475, 21.95, 42.4, 14.08, 35.6, 13.35, 356),
  (480, 22.18, 42.6, 14.14, 35.8, 13.41, 360),
  (485, 22.41, 42.8, 14.2, 36, 13.48, 364),
  (490, 22.65, 43, 14.26, 36.2, 13.54, 368),
  (495, 22.88, 43.2, 14.32, 36.4, 13.6, 372),
  (500, 23.11, 43.4, 14.38, 36.6, 13.67, 376)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M120N-HC';

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M120N-BHC', 'as-7m120n-bhc', 'TOPCon N-type', false, true, 120, array[1908, 1134, 30], 23, 20, 30, '{"pcs_per_pallet":36,"pcs_per_20ft":216,"pcs_per_40ft_hq":864}'::jsonb, '{"segment_pl":["carporty","dachy płaskie","małe farmy","instalatorzy"],"cell":"Monocrystalline bifacial N-type, half-cell","noct_note":"Tabela NOCT w karcie ma tylko 5 kolumn dla 8 klas mocy — nie publikować NOCT do czasu wyjaśnienia","bifacial_gain_example":{"base_w":470,"gain_pct_to_pmax_w":{"10":517,"15":541,"20":564,"25":588,"30":611}},"temp_coeff":{"pmax_pct_per_c":-0.3,"voc_pct_per_c":-0.25,"isc_pct_per_c":0.045,"noct_c":"43±2"},"glass":"3.2 mm hartowane z powłoką AR; tył: transparentny backsheet","junction_box":"IP68, 3 diody","connector":"MC4 kompatybilne","max_system_voltage_v":"1500 DC","max_series_fuse_a":30,"fire_rating":"Class C","mechanical_load_pa":{"wind":2400,"snow":5400},"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","CE","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":2.164,"areal_mass_kg_m2":10.63,"max_power_density_w_m2":231,"areal_mass_note":"masa samego modułu — bez konstrukcji wsporczej/balastu"}'::jsonb, array['brak w przesłanym certyfikacie TÜV', 'NOCT dla wszystkich klas mocy']::text[], 'draft', 2)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M120N-BHC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (465, 21.49, 42, 13.96, 35.2, 13.22, null::integer),
  (470, 21.72, 42.2, 14.02, 35.4, 13.28, null::integer),
  (475, 21.95, 42.4, 14.08, 35.6, 13.35, null::integer),
  (480, 22.18, 42.6, 14.14, 35.8, 13.41, null::integer),
  (485, 22.41, 42.8, 14.2, 36, 13.48, null::integer),
  (490, 22.65, 43, 14.26, 36.2, 13.54, null::integer),
  (495, 22.88, 43.2, 14.32, 36.4, 13.6, null::integer),
  (500, 23.11, 43.4, 14.38, 36.6, 13.67, null::integer)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M120N-BHC';

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M144N-HC', 'as-7m144n-hc', 'TOPCon N-type', false, false, 144, array[2279, 1134, 30], 27.5, 20, 30, '{"pcs_per_pallet":36,"pcs_per_20ft":180,"pcs_per_40ft_hq":"720/740"}'::jsonb, '{"segment_pl":["dachy przemysłowe","farmy PV","EPC"],"cell":"Monocrystalline N-type 182x91 mm, half-cell","temp_coeff":{"pmax_pct_per_c":-0.3,"voc_pct_per_c":-0.25,"isc_pct_per_c":0.045,"noct_c":"43±2"},"glass":"3.2 mm hartowane z powłoką AR","junction_box":"IP68, 3 diody","connector":"MC4 lub kompatybilne","max_system_voltage_v":"1000/1500 DC","max_series_fuse_a":25,"fire_rating":"Class C","mechanical_load_pa":{"wind":2400,"snow":5400},"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","CE","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":2.584,"areal_mass_kg_m2":10.64,"max_power_density_w_m2":232,"areal_mass_note":"masa samego modułu — bez konstrukcji wsporczej/balastu"}'::jsonb, array['brak w przesłanym certyfikacie TÜV']::text[], 'draft', 3)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M144N-HC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (560, 21.67, 50.4, 14.04, 42.2, 13.28, 421),
  (565, 21.86, 50.6, 14.09, 42.4, 13.33, 425),
  (570, 22.06, 50.8, 14.14, 42.6, 13.39, 429),
  (575, 22.25, 51, 14.19, 42.8, 13.44, 433),
  (580, 22.44, 51.2, 14.24, 43, 13.49, 437),
  (585, 22.64, 51.4, 14.29, 43.2, 13.54, 441),
  (590, 22.83, 51.6, 14.34, 43.4, 13.59, 445),
  (595, 23.02, 51.8, 14.39, 43.6, 13.65, 449),
  (600, 23.22, 52, 14.44, 43.8, 13.7, 454)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M144N-HC';

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-8M132N-BHC', 'as-8m132n-bhc', 'TOPCon N-type, double glass', false, true, 132, array[2384, 1303, 35], 38.5, 20, 30, '{"pcs_per_pallet":31,"pcs_per_20ft":124,"pcs_per_40ft_hq":558}'::jsonb, '{"segment_pl":["farmy fotowoltaiczne","EPC","deweloperzy OZE","agro-PV"],"cell":"Monocrystalline N-type (format 210), half-cell","bifacial_gain_example":{"base_w":695,"gain_pct_to_pmax_w":{"10":765,"15":799,"20":834,"25":869,"30":904}},"temp_coeff":{"pmax_pct_per_c":-0.3,"voc_pct_per_c":-0.25,"isc_pct_per_c":0.045,"noct_c":"43±2"},"glass":"2 mm + 2 mm hartowane (przód z AR)","junction_box":"IP68, 3 diody","connector":"MC4 kompatybilne","max_system_voltage_v":"1500 DC","max_series_fuse_a":35,"fire_rating":"Class C","mechanical_load_pa":{"wind":2400,"snow":5400},"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","CE","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":3.106,"areal_mass_kg_m2":12.39,"max_power_density_w_m2":232,"areal_mass_note":"masa samego modułu — bez konstrukcji wsporczej/balastu"}'::jsonb, array['cennik podaje 730 W, karta kończy się na 720 W — potrzebna aktualna karta', 'brak w przesłanym certyfikacie TÜV']::text[], 'draft', 4)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-8M132N-BHC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (690, 22.21, 49.8, 17.35, 41.8, 16.51, 518),
  (695, 22.37, 50, 17.39, 42, 16.55, 522),
  (700, 22.53, 50.2, 17.43, 42.2, 16.59, 526),
  (705, 22.7, 50.4, 17.47, 42.4, 16.63, 530),
  (710, 22.86, 50.6, 17.51, 42.6, 16.67, 534),
  (715, 23.02, 50.8, 17.55, 42.8, 16.71, 538),
  (720, 23.18, 51, 17.59, 43, 16.75, 542)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-8M132N-BHC';

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M144NFL-HC Black', 'as-7m144nfl-hc-black', 'Elastyczny (flexible) TOPCon', true, false, 144, array[2246, 1185, 2], 8, 12, 25, '{"pcs_per_pallet":70,"pcs_per_20ft":280,"pcs_per_40ft_hq":1260}'::jsonb, '{"segment_pl":["dachy o niskiej nośności (hale, magazyny, obiekty rolnicze)","obiekty z drganiami i obciążeniem dynamicznym (stadiony, hale sportowe, areny, przemysł) — po ocenie konstruktora","dachy łukowe i zakrzywione","dachy membranowe — po potwierdzeniu kompatybilności kleju"],"cell":"Monocrystalline TOPCon 182x91 mm","temp_coeff":{"pmax_pct_per_c":-0.29,"voc_pct_per_c":-0.26,"isc_pct_per_c":0.045,"noct_c":"45±2"},"front_cover":"lekki, wysokoprzezroczysty polimer","bending_radius_m":0.3,"mounting":"klejenie, bez przewiertów i bez konstrukcji","claim_weight":"o 70% lżejszy przy tej samej mocy (deklaracja producenta)","junction_box":"IP68, 3 diody","connector":"MC4 kompatybilne","max_system_voltage_v":"1500 DC","safety_class":"Class II","max_series_fuse_a":25,"operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"tuv_certificate":{"number":"Z2 093522 0030 Rev. 00","body":"TÜV SÜD Product Service GmbH","standards":["IEC 61215-1:2021","IEC 61215-1-1:2021","IEC 61215-2:2021","IEC 61730-1:2023","IEC 61730-2:2023"],"issued":"2026-03-19","valid_until":"2031-01-15","covered_range":"AS-7M144NFL-HC-550..575"},"area_m2":2.662,"areal_mass_kg_m2":3.01,"max_power_density_w_m2":216}'::jsonb, array['dopuszczalne podłoża i klej, wymagania ppoż. dla dachów hal w PL', 'brak zakresu obciążeń mechanicznych w karcie', 'wyniki testów obciążeń dynamicznych/cyklicznych (np. IEC 62782 DML) i EL po cyklach gięcia', 'specyfikacja kleju: podłoża, siła odrywania, starzenie UV, zakres temperatur', 'klasyfikacja ogniowa w układzie z pokryciem dachowym (obiekty użyteczności publicznej)']::text[], 'draft', 5)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M144NFL-HC Black');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (550, 20.66, 53.79, 12.89, 45.19, 12.18, 414),
  (555, 20.85, 53.99, 12.92, 45.25, 12.27, 418),
  (560, 21.04, 54.19, 12.96, 45.29, 12.37, 422),
  (565, 21.23, 54.39, 13, 45.34, 12.47, 426),
  (570, 21.42, 54.59, 13.04, 45.39, 12.56, 430),
  (575, 21.6, 54.79, 13.09, 45.44, 12.66, 434)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M144NFL-HC Black';

insert into public.certificates (number, body, standards, issued_on, valid_until, covered_models, status)
values ('Z2 093522 0030 Rev. 00', 'TÜV SÜD Product Service GmbH', array['IEC 61215-1:2021', 'IEC 61215-1-1:2021', 'IEC 61215-2:2021', 'IEC 61730-1:2023', 'IEC 61730-2:2023']::text[], '2026-03-19', '2031-01-15', array['AS-7M144NFL-HC']::text[], 'draft')
on conflict (number) do update set body = excluded.body, standards = excluded.standards, issued_on = excluded.issued_on, valid_until = excluded.valid_until, covered_models = excluded.covered_models;

insert into public.products (model, slug, family, is_flexible, bifacial, cells, dimensions_mm, weight_kg, warranty_product_years, warranty_linear_power_years, packaging, specs, to_verify, status, sort_order)
values ('AS-7M132FL-HC', 'as-7m132fl-hc', 'Elastyczny (flexible) PERC', true, false, 132, array[2250, 1130, 2], 7.2, 12, 25, '{"pcs_per_pallet":66,"pcs_per_20ft":264,"pcs_per_40ft_hq":1122}'::jsonb, '{"segment_pl":["dachy o niskiej nośności (hale, magazyny, obiekty rolnicze)","obiekty z drganiami i obciążeniem dynamicznym (stadiony, hale sportowe, areny, przemysł) — po ocenie konstruktora","dachy łukowe i zakrzywione","dachy membranowe — po potwierdzeniu kompatybilności kleju"],"cell":"Monocrystalline PERC 182x91 mm","temp_coeff":{"pmax_pct_per_c":-0.39,"voc_pct_per_c":-0.3,"isc_pct_per_c":0.06,"noct_c":"42±2"},"bending_radius_m":0.3,"junction_box":"IP68, 3 diody","connector":"MC4 kompatybilne","max_system_voltage_v":"1000/1500 DC","max_series_fuse_a":20,"fire_rating":"Type 1 (UL1703) / Class C (IEC 61730)","operating_temp_c":"-40 do +85","certifications_on_datasheet":["IEC 61215","IEC 61730","ISO 9001:2015","ISO 14001:2015","ISO 45001:2018"],"area_m2":2.542,"areal_mass_kg_m2":2.83,"max_power_density_w_m2":189}'::jsonb, array['w cenniku występuje jako ''AS-FL7M132-HC'' — ujednolicić nazwę', 'brak w przesłanym certyfikacie TÜV', 'wyniki testów obciążeń dynamicznych/cyklicznych (np. IEC 62782 DML) i EL po cyklach gięcia', 'specyfikacja kleju: podłoża, siła odrywania, starzenie UV, zakres temperatur', 'klasyfikacja ogniowa w układzie z pokryciem dachowym (obiekty użyteczności publicznej)']::text[], 'draft', 6)
on conflict (model) do update set slug = excluded.slug, family = excluded.family, is_flexible = excluded.is_flexible, bifacial = excluded.bifacial, cells = excluded.cells, dimensions_mm = excluded.dimensions_mm, weight_kg = excluded.weight_kg, warranty_product_years = excluded.warranty_product_years, warranty_linear_power_years = excluded.warranty_linear_power_years, packaging = excluded.packaging, specs = excluded.specs, to_verify = excluded.to_verify, sort_order = excluded.sort_order;

delete from public.product_variants where product_id = (select id from public.products where model = 'AS-7M132FL-HC');
insert into public.product_variants (product_id, power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
select id, v.* from public.products, (values
  (460, 18.09, 45.4, 12.54, 38.27, 12.02, 355),
  (465, 18.29, 45.53, 12.62, 38.4, 12.11, 359),
  (470, 18.49, 45.66, 12.7, 38.53, 12.2, 363),
  (475, 18.68, 45.79, 12.78, 38.65, 12.29, 367),
  (480, 18.88, 45.92, 12.86, 38.78, 12.38, 371)
) as v(power_w, efficiency_pct, voc_v, isc_a, vmp_v, imp_a, noct_pmax_w)
where model = 'AS-7M132FL-HC';

commit;
