import { describe, expect, it } from "vitest";
import { getProductBySlug, hasTuvCertificate, kwpPer, piecesPer, products, powerRange } from "./products";
import { percent, range } from "./format";

describe("products.json", () => {
  it("zawiera 7 modeli z MASTER_PROMPT", () => {
    expect(products.map((p) => p.model)).toEqual([
      "AS-7M108N-BHC",
      "AS-7M120N-HC",
      "AS-7M120N-BHC",
      "AS-7M144N-HC",
      "AS-8M132N-BHC",
      "AS-7M144NFL-HC Black",
      "AS-7M132FL-HC",
    ]);
  });

  it("ma unikalne slugi", () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("certyfikat TÜV Z2 093522 0030 ma tylko AS-7M144NFL-HC", () => {
    const withTuv = products.filter(hasTuvCertificate).map((p) => p.model);
    expect(withTuv).toEqual(["AS-7M144NFL-HC Black"]);
  });

  it("AS-7M120N-BHC nie ma NOCT do publikacji (niespójna karta)", () => {
    expect(getProductBySlug("as-7m120n-bhc")?.noct_pmax_w).toBeUndefined();
  });

  it("liczy kWp na kontener 40'HQ z danych karty", () => {
    const p = getProductBySlug("as-8m132n-bhc")!;
    expect(powerRange(p)).toEqual({ min: 690, max: 720 });
    expect(kwpPer(p, "40ft_hq", 720)).toEqual({ min: 401.76, max: 401.76 });
  });

  it("obsługuje zakres sztuk 720/740", () => {
    const p = getProductBySlug("as-7m144n-hc")!;
    expect(piecesPer(p, "40ft_hq")).toEqual({ min: 720, max: 740 });
    expect(kwpPer(p, "40ft_hq", 600)).toEqual({ min: 432, max: 444 });
  });

  it("odrzuca klasę mocy spoza karty", () => {
    const p = getProductBySlug("as-8m132n-bhc")!;
    expect(() => kwpPer(p, "pallet", 730)).toThrow();
  });
});

describe("format", () => {
  it("używa polskiego zapisu", () => {
    expect(percent(23.22)).toBe("23,22%");
    expect(range(690, 720, "W")).toBe("690–720 W");
  });
});
