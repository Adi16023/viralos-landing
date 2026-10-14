"use client";

import { useState } from "react";
import { StickerButton } from "@/components/sticker-button";

const items = [
  { label: "Product", href: "/#product", ariaLabel: "Product" },
  { label: "How it works", href: "/#how", ariaLabel: "How it works" },
  { label: "Rules", href: "/#rules", ariaLabel: "Messaging rules" },
  { label: "FAQ", href: "/#faq", ariaLabel: "Questions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="/" className="shrink-0" aria-label="Viralos home">
          <img src="/viralos-logo.png" alt="Viralos" className="h-8 w-auto md:h-9" />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.ariaLabel}
              className="text-sm font-medium text-[#1a1a1a] hover:text-[#1585AC]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <StickerButton
            href="/#access"
            variant="yellow"
            className="hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            Request access
          </StickerButton>
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-[#000000] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-black/10 px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-base font-medium text-[#000000]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <StickerButton href="/#access" variant="yellow" onClick={() => setOpen(false)}>
                Request access
              </StickerButton>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
