import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = messages[locale].seo;
  return {
    title: { absolute: copy.homeTitle },
    description: copy.homeDescription,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", ta: "/ta", "x-default": "/en" } },
    openGraph: { title: copy.homeTitle, description: copy.homeDescription, locale: locale === "ta" ? "ta_IN" : "en_IN", alternateLocale: locale === "ta" ? "en_IN" : "ta_IN" },
  };
}

export default function Page() {
  return <HomePage />;
}
