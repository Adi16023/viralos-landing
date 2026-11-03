import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteLoader } from "@/components/site-loader";
import { ThemeScrollbar } from "@/components/theme-scrollbar";
import { SITE } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { messages } from "@/i18n/messages";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  display: "swap",
  variable: "--font-tamil",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Viralos — Instagram DM automation",
    template: "%s · Viralos",
  },
  description: SITE.description,
  applicationName: "Viralos",
  openGraph: {
    title: "Viralos — Instagram DM automation",
    description: SITE.description,
    siteName: "Viralos",
    type: "website",
  },
};

export default function SiteDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${tamil.variable} h-full antialiased`}
    >
      <body className={`min-h-full overflow-x-hidden bg-white pr-2 font-sans text-black ${locale === "ta" ? "[--font-inter:var(--font-tamil)] [overflow-wrap:anywhere]" : ""}`}>
        <NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone="Asia/Kolkata">
          <SiteLoader />
          {children}
          <CookieNotice />
          <ThemeScrollbar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
