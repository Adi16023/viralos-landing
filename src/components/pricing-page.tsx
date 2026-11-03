"use client";

import { useMessages } from "next-intl";
import { PricingPlans } from "@/components/pricing-plans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickerButton } from "@/components/sticker-button";

export default function PricingPage() {
  const { pricing: copy, common } = useMessages();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-black/10 bg-[#f6fbfd]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border-[50px] border-[#1585AC]/5 md:right-10 md:size-[440px]"
          />
          <div className="site-container relative pb-14 pt-14 text-center md:pb-20 md:pt-20">
            <h1 className="mx-auto max-w-4xl text-balance text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
              {copy.title}
              <br />
              <span className="relative isolate inline-block px-2">
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[42%] -rotate-2 bg-[#F6F648]" />
                {copy.titleHighlight}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3a3a3a]">
              {copy.description}
            </p>
            <a href="#plans" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1585AC] underline-offset-4 hover:underline">
              {copy.findFit} <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </section>

        <PricingPlans />

        <section className="border-y border-black/10 bg-[#f6fbfd]">
          <div className="site-container grid gap-7 py-10 md:grid-cols-3">
            {copy.assurances.map(([number, title, copy]) => (
              <div key={number} className="flex items-start gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-black/10 bg-white text-xs font-semibold text-[#1585AC]">{number}</span>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="site-container grid gap-10 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-[#1585AC]">{copy.faqEyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              {copy.faqTitle}
              <br />
              {copy.faqHighlight}
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-[#3a3a3a]">
              {copy.faqDescription}
            </p>
          </div>
          <div className="space-y-3">
            {copy.faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-3xl border border-black/10 bg-white p-5">
                <summary className="flex list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{question}</span>
                  <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-[#F6F648] text-xl leading-none group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-6 text-sm leading-relaxed text-[#3a3a3a]">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-[#F6F648]">
          <div className="site-container flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-20">
            <div>
              <p className="text-sm font-semibold">{copy.ctaEyebrow}</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-5xl">{copy.ctaTitle}<br />{copy.ctaHighlight}</h2>
            </div>
            <StickerButton href="/#access" className="shrink-0">
              {common.requestAccess} <span aria-hidden="true">&rarr;</span>
            </StickerButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
