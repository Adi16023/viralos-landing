import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export function LegalShell({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <p className="text-sm font-semibold text-[#1585AC]">{kicker}</p>
        <h1 className="mt-4 font-sans text-5xl tracking-[-0.04em] text-[#000000]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#3a3a3a]">Effective {SITE.updated}. Public page. No login.</p>
        <article className="legal">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
