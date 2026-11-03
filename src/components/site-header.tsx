"use client";

import { usePathname } from "next/navigation";
import { useLocale, useMessages } from "next-intl";
import { useSyncExternalStore } from "react";
import PillNav from "@/components/PillNav";
import { StickerButton } from "@/components/sticker-button";
import { LocaleLink } from "@/components/locale-link";
import { LanguageSwitch } from "@/components/language-switch";
import { localizedHref } from "@/i18n/config";

const destinations = ["/", "/#product", "/#how", "/pricing", "/#rules", "/#faq"];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = useLocale();
  const copy = useMessages().common;
  const items = destinations.map((href, index) => ({
    label: copy.nav[index],
    href: localizedHref(href, locale),
  }));
  const home = `/${locale}`;
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className={`site-container flex items-center justify-between gap-4 py-4 ${locale === "ta" ? "2xl:grid 2xl:grid-cols-[1fr_auto_1fr]" : "xl:grid xl:grid-cols-[1fr_auto_1fr]"}`}>
        <LocaleLink href="/" className="shrink-0 justify-self-start" aria-label={copy.homeLabel}>
          <img
            src="/viralos-logo.png"
            alt="Viralos"
            className="h-8 w-auto max-w-[9.5rem] object-contain md:h-9"
          />
        </LocaleLink>
        <div className={`flex min-w-0 flex-1 justify-center ${locale === "ta" ? "2xl:w-[46rem]" : "xl:w-[34rem]"}`}>
          <PillNav
            items={items}
            activeHref={`${pathname}${pathname === home ? hash : ""}`}
            linkComponent={LocaleLink}
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
            menuLabels={{ open: copy.openMenu, close: copy.closeMenu }}
            className="[&[data-collapsed]]:justify-end [&>div[id]]:left-auto [&>div[id]]:right-0 [&>div[id]]:min-w-60"
            mobileFooter={
              <div className="space-y-4 p-3 sm:hidden">
                <LanguageSwitch />
                <StickerButton href="/#access" variant="yellow" className="w-full">
                  {copy.requestAccess}
                </StickerButton>
              </div>
            }
          />
        </div>
        <div className="hidden shrink-0 items-center gap-3 justify-self-end sm:flex">
          <LanguageSwitch />
          <StickerButton
            href="/#access"
            variant="yellow"
            className="shrink-0 px-3 py-2.5 text-xs sm:px-4 sm:text-sm"
          >
            {copy.requestAccess}
          </StickerButton>
        </div>
      </div>
    </header>
  );
}
