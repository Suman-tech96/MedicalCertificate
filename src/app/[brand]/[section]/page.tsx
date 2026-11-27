import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, parseBrandId } from "@/brands";
import { BrandHomepage } from "@/components/BrandHomepage";

const VALID_SECTIONS: Record<string, string> = {
  services: "services",
  "how-it-works": "how-it-works",
  pricing: "pricing",
  doctors: "doctors",
  legal: "legal",
  coverage: "coverage",
  countries: "coverage",
  faq: "faq",
};

interface BrandSectionPageProps {
  params: Promise<{ brand: string; section: string }>;
}

export function generateStaticParams() {
  const brands = ["drcertificate", "getmedicalcertificate", "dr", "gmc"];
  const sections = Object.keys(VALID_SECTIONS);
  return brands.flatMap((brand) =>
    sections.map((section) => ({ brand, section }))
  );
}

export async function generateMetadata({
  params,
}: BrandSectionPageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brandId = parseBrandId(slug);
  if (!brandId || !BRANDS[brandId]) return {};

  const brand = BRANDS[brandId];
  return {
    title: brand.meta.title,
    description: brand.meta.description,
  };
}

export default async function BrandSectionRoutePage({
  params,
}: BrandSectionPageProps) {
  const { brand: slug, section } = await params;
  const brandId = parseBrandId(slug);
  const targetSection = VALID_SECTIONS[section.toLowerCase()];

  if (!brandId || !BRANDS[brandId] || !targetSection) {
    notFound();
  }

  return (
    <BrandHomepage
      brand={BRANDS[brandId]}
      initialSection={targetSection}
    />
  );
}
