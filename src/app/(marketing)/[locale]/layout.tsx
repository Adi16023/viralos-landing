import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import SiteDocument, { metadata } from "@/components/site-document";
import { isLocale, locales } from "@/i18n/config";

export { metadata };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MarketingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
