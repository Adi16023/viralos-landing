import type { ReactNode } from "react";
import SiteDocument, { metadata } from "@/components/site-document";

export { metadata };

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
