"use client";

import { useLocale, useMessages } from "next-intl";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { locales } from "@/i18n/config";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const copy = useMessages().common;
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  const localized = /^\/(en|ta)(\/|$)/.test(pathname);
  if (!localized) return null;
  const suffix = pathname.replace(/^\/(en|ta)/, "");

  return (
    <nav aria-label={copy.language} className="inline-flex shrink-0 rounded-full border border-[#1585AC]/25 bg-[#f6fbfd] p-1 text-xs font-medium">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}${suffix}${hash}`}
          hrefLang={language}
          lang={language}
          aria-current={language === locale ? "page" : undefined}
          onClick={() => {
            document.cookie = `VIRALOS_LOCALE=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
          }}
          className={`rounded-full px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1585AC] ${language === locale ? "bg-[#1585AC] text-white" : "text-[#155e75] hover:bg-[#1585AC]/10"}`}
        >
          {language === "en" ? "EN" : "தமிழ்"}
        </Link>
      ))}
    </nav>
  );
}
