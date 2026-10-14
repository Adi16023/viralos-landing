"use client";

import ShinyText from "@/components/ShinyText";
import { SITE } from "@/lib/site";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/data-deletion", label: "Data Deletion" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <img src="/viralos-logo.png" alt="Viralos" className="h-12 w-auto" />
          <p className="mt-4 max-w-md text-[#3a3a3a]">
            Viralos replies to Instagram conversations for professional accounts, through the
            official API, after a person reaches out.
          </p>
        </div>
        <div>
          <ShinyText text="Policies Meta can open" className="text-sm uppercase tracking-[0.18em]" />
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a className="text-[#000000] underline-offset-4 hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="mt-6 inline-block text-[#1585AC]" href={`mailto:${SITE.contactEmail}`}>
            {SITE.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
