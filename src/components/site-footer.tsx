"use client";

import { useLocale, useMessages } from "next-intl";
import { LocaleLink } from "@/components/locale-link";
import { SITE } from "@/lib/site";

const product = [
  { href: "/#product", label: "Product" },
  { href: "/#how", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#rules", label: "Messaging rules" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#access", label: "Request access" },
];

const policies = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
];

export function SiteFooter() {
  const locale = useLocale();
  const copy = useMessages().common;
  const productLabels = [copy.nav[1], copy.nav[2], copy.nav[3], copy.nav[4], copy.nav[5], copy.requestAccess];
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="/viralos-logo.png" alt="Viralos" className="h-11 w-auto" />
          <p className="mt-4 max-w-sm text-[#3a3a3a]">
            {copy.footerDescription}
          </p>
          <a className="mt-5 inline-block font-medium text-[#1585AC]" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#000000]">{copy.product}</p>
          <ul className="mt-4 space-y-2.5">
            {product.map((link, index) => (
              <li key={link.href}>
                <LocaleLink className="text-[#1a1a1a] hover:text-[#1585AC]" href={link.href}>
                  {productLabels[index]}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#000000]">{copy.policies}</p>
          <ul className="mt-4 space-y-2.5">
            {policies.map((link, index) => (
              <li key={link.href}>
                <LocaleLink className="text-[#1a1a1a] hover:text-[#1585AC]" href={link.href}>
                  {copy.legalLinks[index]}{locale === "ta" ? ` (${copy.englishOnly})` : ""}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10">
        <p className="site-container py-5 text-sm text-[#3a3a3a]">
          © {SITE.updated.slice(-4)} {copy.copyright}
        </p>
      </div>
    </footer>
  );
}
