import type en from "./messages/en";

export const locales = ["en", "ta"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ta";
}

export function localizedHref(href: string, locale: Locale) {
  if (href === "/" || href.startsWith("/#") || href === "/pricing" || href.startsWith("/pricing#")) {
    return `/${locale}${href === "/" ? "" : href}`;
  }
  return href;
}

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof en;
  }
}
