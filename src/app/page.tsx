import { Suspense } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { resolveBrand } from "@/brands";
import { BrandHomepage } from "@/components/BrandHomepage";

interface HomePageProps {
  searchParams: Promise<{ brand?: string }>;
}

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  const headerList = await headers();
  const brand = resolveBrand({
    queryBrand: params.brand,
    host: headerList.get("host"),
  });

  return {
    title: brand.meta.title,
    description: brand.meta.description,
  };
}

async function ResolvedHome({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const params = await searchParams;
  const headerList = await headers();
  const brand = resolveBrand({
    queryBrand: params.brand,
    host: headerList.get("host"),
  });

  return <BrandHomepage brand={brand} />;
}

export default function HomePage({ searchParams }: HomePageProps) {
  const defaultBrand = resolveBrand({});

  return (
    <Suspense fallback={<BrandHomepage brand={defaultBrand} />}>
      <ResolvedHome searchParams={searchParams} />
    </Suspense>
  );
}
