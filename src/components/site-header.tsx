"use client";

import { useEffect, useState } from "react";
import { StickerButton } from "@/components/sticker-button";

const items = [
  { label: "Product", href: "/#product", ariaLabel: "Product" },
  { label: "How it works", href: "/#how", ariaLabel: "How it works" },
  { label: "Rules", href: "/#rules", ariaLabel: "Messaging rules" },
  { label: "FAQ", href: "/#faq", ariaLabel: "Questions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 lg:px-3">
        <a href="/" className="min-w-0 shrink" aria-label="Viralos home">
          <img
            src="/viralos-logo.png"
            alt="Viralos"
            className="h-8 w-auto max-w-[9.5rem] object-contain object-left sm:max-w-none md:h-9"
          />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
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
        <div className="flex shrink-0 items-center gap-2">
          <StickerButton
            href="/#access"
            variant="yellow"
            className="hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            Request access
          </StickerButton>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl text-[#000000] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-black/10 px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-2 py-3 text-base font-medium text-[#000000] hover:bg-[#f6fbfd]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-2 py-3 sm:hidden">
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
