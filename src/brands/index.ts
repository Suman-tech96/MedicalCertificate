import { drcertificateConfig } from "./drcertificate";
import { getmedicalcertificateConfig } from "./getmedicalcertificate";
import { BrandConfig, BrandId } from "./types";

export const BRANDS: Record<BrandId, BrandConfig> = {
  drcertificate: drcertificateConfig,
  getmedicalcertificate: getmedicalcertificateConfig,
};

export const BRAND_LIST: BrandConfig[] = Object.values(BRANDS);

const ALIASES: Record<string, BrandId> = {
  dr: "drcertificate",
  drcertificate: "drcertificate",
  "drcertificate.com": "drcertificate",
  gmc: "getmedicalcertificate",
  getmedicalcertificate: "getmedicalcertificate",
  "getmedicalcertificate.com": "getmedicalcertificate",
};

export function parseBrandId(input?: string | null): BrandId | null {
  if (!input) return null;
  const normalized = input.trim().toLowerCase();
  if (ALIASES[normalized]) return ALIASES[normalized];
  if (normalized.includes("getmedicalcertificate")) return "getmedicalcertificate";
  if (normalized.includes("drcertificate")) return "drcertificate";
  return null;
}

export function resolveBrand(options: {
  slug?: string | null;
  queryBrand?: string | null;
  host?: string | null;
}): BrandConfig {
  const fromSlug = parseBrandId(options.slug);
  if (fromSlug) return BRANDS[fromSlug];

  const fromQuery = parseBrandId(options.queryBrand);
  if (fromQuery) return BRANDS[fromQuery];

  const fromHost = parseBrandId(options.host);
  if (fromHost) return BRANDS[fromHost];

  const fromEnv = parseBrandId(process.env.NEXT_PUBLIC_BRAND);
  if (fromEnv) return BRANDS[fromEnv];

  return BRANDS.drcertificate;
}
