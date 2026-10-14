import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteLoader } from "@/components/site-loader";
import { ThemeScrollbar } from "@/components/theme-scrollbar";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      className={`${inter.variable} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white pr-4 font-sans text-black">
        <SiteLoader />
        {children}
        <CookieNotice />
        <ThemeScrollbar />
      </body>
    </html>
  );
}
