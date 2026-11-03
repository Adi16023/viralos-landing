"use client";

import { useMessages } from "next-intl";
import { AccessForm } from "@/components/access-form";
import { HeroInstagram } from "@/components/hero-instagram";
import { StickerButton } from "@/components/sticker-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const featureTones = ["yellow", "white", "blue", "white"] as const;

const tones = {
  yellow: "bg-[#F6F648] text-[#000000]",
  white: "border border-black/10 bg-white text-[#000000]",
  blue: "bg-[#1585AC] text-white",
};

export function HomePage() {
  const { home: copy, common } = useMessages();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-white">
          <div className="site-container grid items-center gap-6 pb-4 pt-12 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-sm font-semibold text-[#1585AC]">{copy.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-balance font-sans text-[clamp(2.8rem,6.4vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#000000]">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3a3a3a]">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <StickerButton href="/#access" variant="yellow">
                  {common.requestAccess}
                </StickerButton>
                <StickerButton href="/#rules">{copy.seeRules}</StickerButton>
              </div>
            </div>
            <HeroInstagram />
          </div>

          <div className="site-container pb-16 pt-10">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6fbfd] p-3 shadow-[0_28px_70px_-36px_rgba(21,133,172,0.55)] md:p-5">
              <div className="grid gap-3 lg:grid-cols-[240px_1fr]">
                <div className="rounded-[1.4rem] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1585AC]">
                    {copy.inbox}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {copy.conversations.map(([name, reason, meta]) => (
                      <li key={name} className="rounded-2xl bg-[#f6fbfd] px-3 py-3">
                        <p className="font-semibold text-[#000000]">{name}</p>
                        <p className="text-sm text-[#3a3a3a]">{reason}</p>
                        <p className="mt-1 text-xs font-medium text-[#1585AC]">{meta}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.4rem] bg-white p-5 md:p-7">
                  <p className="text-sm text-[#3a3a3a]">{copy.reel}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#000000]">
                    {copy.replyTitle}
                  </h2>
                  <div className="mt-6 space-y-3">
                    <div className="max-w-md rounded-2xl rounded-bl-md bg-[#f6fbfd] px-4 py-3 text-[#1a1a1a]">
                      {copy.sampleQuestion}
                    </div>
                    <div className="ml-auto max-w-md rounded-2xl rounded-br-md bg-[#1585AC] px-4 py-3 text-white">
                      {copy.sampleAnswer}
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-[#3a3a3a]">
                    {copy.sampleCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-black/10 bg-white py-4" aria-label={copy.factsLabel}>
          <div className="marquee-track">
            {[0, 1].map((repetition) => (
              <ul key={repetition} className="flex shrink-0 items-center" aria-hidden={repetition === 1}>
                {copy.marquee.map((item) => (
                  <li key={`${repetition}-${item}`} className="flex items-center px-4 text-sm font-semibold text-[#000000]">
                    <span className="mr-4 inline-block size-2 rounded-full bg-[#F6F648] ring-2 ring-black" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section id="product" className="site-container py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
              {copy.productTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[#3a3a3a]">
              {copy.productDescription}
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {copy.features.map((feature, index) => (
              <article key={feature.title} className={`rounded-[1.75rem] p-7 md:p-8 ${tones[featureTones[index]]}`}>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{feature.title}</h3>
                <p className={`mt-3 text-base leading-relaxed ${featureTones[index] === "blue" ? "text-white/90" : "text-[#1a1a1a]"}`}>
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f6fbfd]">
          <div className="site-container py-20 md:py-28">
            <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
              {copy.comparisonTitle}
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.75rem] border border-black/10 bg-white p-7 md:p-9">
                <p className="text-sm font-semibold text-[#3a3a3a]">{copy.beforeLabel}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#000000]">
                  {copy.beforeTitle}
                </h3>
                <ul className="mt-6 space-y-3">
                  {copy.before.map((item) => (
                    <li key={item} className="flex gap-3 text-[#1a1a1a]">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[1.75rem] bg-[#F6F648] p-7 md:p-9">
                <p className="text-sm font-semibold text-[#000000]">{copy.afterLabel}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#000000]">
                  {copy.afterTitle}
                </h3>
                <ul className="mt-6 space-y-3">
                  {copy.after.map((item) => (
                    <li key={item} className="flex gap-3 text-[#000000]">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-[#1585AC]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="how" className="site-container py-20 md:py-28">
          <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
            {copy.stepsTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-[#3a3a3a]">
            {copy.stepsDescription}
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => (
              <li key={step.title} className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-[#1585AC]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#000000]">{step.title}</h3>
                <p className="mt-3 text-[#3a3a3a]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="rules" className="bg-[#1585AC] text-white">
          <div className="site-container py-20 md:py-28">
            <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              {copy.rulesTitle}
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {copy.stats.map(([value, label, copy]) => (
                <div key={`${value}-${label}`}>
                  <p className="font-sans text-5xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 font-semibold text-[#F6F648]">{label}</p>
                  <p className="mt-2 text-sm text-white/85">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.75rem] bg-white p-7 text-[#000000]">
                <h3 className="text-2xl font-semibold">{copy.allowedTitle}</h3>
                <p className="mt-3 text-[#1a1a1a]">
                  {copy.allowed}
                </p>
              </article>
              <article className="rounded-[1.75rem] bg-[#000000] p-7 text-white">
                <h3 className="text-2xl font-semibold">{copy.forbiddenTitle}</h3>
                <p className="mt-3 text-white/85">
                  {copy.forbidden}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 lg:px-3 py-20 md:py-28">
          <h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-5xl">
            {copy.faqTitle}
          </h2>
          <div className="mt-10 space-y-3">
            {copy.faqs.map((item) => (
              <details key={item.q} className="group rounded-3xl border border-black/10 bg-white px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-[#000000] [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{item.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#F6F648] text-xl leading-none text-[#000000] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-10 text-[#3a3a3a]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="access" className="bg-[#F6F648]">
          <div className="mx-auto max-w-3xl px-6 lg:px-3 py-20 md:py-24">
            <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#000000]">
              {copy.accessTitle}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#1a1a1a]">
              {copy.accessDescription}
            </p>
            <AccessForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
