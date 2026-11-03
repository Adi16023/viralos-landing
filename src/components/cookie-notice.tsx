"use client";

import { useEffect, useState } from "react";
import { useLocale, useMessages } from "next-intl";
import { LocaleLink } from "@/components/locale-link";
import { StickerButton } from "@/components/sticker-button";

const KEY = "viralos-cookie-notice";

export function CookieNotice() {
  const locale = useLocale();
  const copy = useMessages().common;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.localStorage.getItem(KEY) !== "dismissed");
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 lg:px-2 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm leading-6 text-[#1a1a1a]">
          {copy.cookieNotice}{" "}
          <LocaleLink className="text-[#1585AC] underline" href="/cookies">
            {copy.legalLinks[2]}{locale === "ta" ? ` (${copy.englishOnly})` : ""}
          </LocaleLink>
        </p>
        <StickerButton
          type="button"
          className="w-full shrink-0 whitespace-nowrap lg:w-auto"
          onClick={() => {
            window.localStorage.setItem(KEY, "dismissed");
            setOpen(false);
          }}
        >
          {copy.continue}
        </StickerButton>
      </div>
    </div>
  );
}
