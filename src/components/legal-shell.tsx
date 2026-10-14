import type { ReactNode } from "react";
import ShinyText from "@/components/ShinyText";
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
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <ShinyText text={kicker} className="text-sm uppercase tracking-[0.18em]" />
        <h1 className="mt-4 font-sans text-5xl tracking-[-0.04em] text-[#f4efe8]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#b7b0a6]">Effective {SITE.updated}. Public page. No login.</p>
        <article className="legal">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
