"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, type AnchorHTMLAttributes } from "react";
import PillNav from "@/components/PillNav";
import { StickerButton } from "@/components/sticker-button";

const items = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Product", href: "/#product", ariaLabel: "Product" },
  { label: "How it works", href: "/#how", ariaLabel: "How it works" },
  { label: "Pricing", href: "/pricing", ariaLabel: "Pricing" },
  { label: "Rules", href: "/#rules", ariaLabel: "Messaging rules" },
  { label: "FAQ", href: "/#faq", ariaLabel: "Questions" },
];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function NavigationLink({
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <Link href={href} {...props} />;
}

export function SiteHeader() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="shrink-0 justify-self-start" aria-label="Viralos home">
          <img
            src="/viralos-logo.png"
            alt="Viralos"
            className="h-8 w-auto max-w-[9.5rem] object-contain md:h-9"
          />
        </Link>
        <div className="flex min-w-0 flex-1 justify-center lg:w-[36rem]">
          <PillNav
            items={items}
            activeHref={`${pathname}${pathname === "/" ? hash : ""}`}
            linkComponent={NavigationLink}
            theme="dark"
            layout="split"
            size="md"
            surface="glass"
            itemStyle="plain"
            hoverEffect="glide"
            indicator="pill"
            barColor="#1585AC"
            textColor="#ffffff"
            highlightColor="#F6F648"
            highlightTextColor="#121016"
            bounce={0.3}
            stretch={0.5}
            intro
            collapse="auto"
            ariaLabel="Primary"
            className="[&[data-collapsed]]:justify-end [&>div[id]]:left-auto [&>div[id]]:right-0 [&>div[id]]:min-w-60"
            mobileFooter={
              <div className="p-3 sm:hidden">
                <StickerButton href="/#access" variant="yellow" className="w-full">
                  Request access
                </StickerButton>
              </div>
            }
          />
        </div>
        <StickerButton
          href="/#access"
          variant="yellow"
          className="hidden shrink-0 justify-self-end px-3 py-2.5 text-xs sm:inline-flex sm:px-4 sm:text-sm"
        >
          Request access
        </StickerButton>
      </div>
    </header>
  );
}
