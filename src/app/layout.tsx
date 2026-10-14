import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrument.variable} dark h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#0c0b10] text-[#f4efe8]">
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
