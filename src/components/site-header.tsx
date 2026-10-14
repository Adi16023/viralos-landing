"use client";

import PillNav from "@/components/PillNav";

const items = [
  { label: "Home", href: "/", ariaLabel: "Viralos home" },
  { label: "Product", href: "/#product", ariaLabel: "Product" },
  { label: "How it works", href: "/#how", ariaLabel: "How it works" },
  { label: "Rules", href: "/#rules", ariaLabel: "Messaging rules" },
  { label: "FAQ", href: "/#faq", ariaLabel: "Questions" },
];

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto max-w-6xl px-4 pt-4">
        <PillNav
          logo="/viralos-logo.png"
          logoAlt="Viralos"
          items={items}
          baseColor="#1585AC"
          pillColor="#FFFFFF"
          pillTextColor="#000000"
          hoveredPillTextColor="#F6F648"
          initialLoadAnimation={false}
        />
      </div>
    </header>
  );
}
