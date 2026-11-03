import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PricingPage from "@/components/pricing-page";
import { isLocale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = messages[locale].seo;
  return {
    title: copy.pricingTitle,
    description: copy.pricingDescription,
    alternates: { canonical: `/${locale}/pricing`, languages: { en: "/en/pricing", ta: "/ta/pricing", "x-default": "/en/pricing" } },
    openGraph: { title: copy.pricingTitle, description: copy.pricingDescription, locale: locale === "ta" ? "ta_IN" : "en_IN", alternateLocale: locale === "ta" ? "en_IN" : "ta_IN" },
  };
}

export default PricingPage;
