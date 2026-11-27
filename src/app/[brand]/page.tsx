import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRANDS, parseBrandId } from "@/brands";
import { BrandHomepage } from "@/components/BrandHomepage";

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export function generateStaticParams() {
  return [
    { brand: "drcertificate" },
    { brand: "getmedicalcertificate" },
    { brand: "dr" },
    { brand: "gmc" },
  ];
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brandId = parseBrandId(slug);
  if (!brandId) return {};

  const brand = BRANDS[brandId];
  return {
    title: brand.meta.title,
    description: brand.meta.description,
  };
}

export default async function BrandRoutePage({ params }: BrandPageProps) {
  const { brand: slug } = await params;
  const brandId = parseBrandId(slug);
  if (!brandId) {
    notFound();
  }

  return <BrandHomepage brand={BRANDS[brandId]} />;
}
