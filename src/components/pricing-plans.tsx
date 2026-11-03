"use client";

import { useState } from "react";
import { useMessages } from "next-intl";
import { ArrowUpRight, Check, Flame, Sparkles, Sprout, Users, Zap } from "lucide-react";
import { StickerButton } from "@/components/sticker-button";
import { SITE } from "@/lib/site";

const plans = [
  {
    name: "Spark",
    monthly: 0,
    annual: 0,
    icon: Sprout,
  },
  {
    name: "Ignite",
    monthly: 499,
    annual: 4999,
    icon: Zap,
  },
  {
    name: "Blaze",
    monthly: 899,
    annual: 8999,
    icon: Flame,
  },
];

const agencyPlans = [
  {
    name: "Agency",
    monthly: 2499,
    annual: 24999,
  },
  {
    name: "Agency Pro",
    monthly: 4999,
    annual: 49999,
  },
];

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function FeatureList({ features, dark = false }: { features: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3 text-sm leading-relaxed">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5">
          <Check aria-hidden="true" className={`mt-0.5 size-4 shrink-0 ${dark ? "text-[#F6F648]" : "text-[#1585AC]"}`} strokeWidth={2.5} />
          {feature}
        </li>
      ))}
    </ul>
  );
}

export function PricingPlans() {
  const { plans: copy, common } = useMessages();
  const [annual, setAnnual] = useState(false);
  const period = annual ? copy.perYear : copy.perMonth;

  return (
    <section id="plans" className="site-container py-14 md:py-20">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-[#1585AC]">{copy.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{copy.title}</h2>
        </div>
        <div className="shrink-0">
          <div role="group" aria-label={copy.billing} className="inline-flex gap-1 rounded-2xl border border-black/10 bg-[#f6fbfd] p-1.5">
            {[false, true].map((yearly) => (
              <button
                key={String(yearly)}
                type="button"
                aria-pressed={annual === yearly}
                onClick={() => setAnnual(yearly)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1585AC] ${annual === yearly ? "bg-black text-white" : "text-[#3a3a3a] hover:bg-white"}`}
              >
                {yearly ? copy.yearly : copy.monthly}
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-xs font-medium text-[#1585AC]">{copy.savings}</p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#3a3a3a]">
        {copy.notice}
      </p>

      <div aria-live="polite" aria-atomic="true" className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map((plan, index) => {
          const popular = plan.name === "Blaze";
          const free = plan.monthly === 0;
          const Icon = plan.icon;

          return (
            <article key={plan.name} className={`relative flex flex-col rounded-[1.75rem] border-2 p-6 lg:p-7 ${popular ? "border-[#1585AC] bg-[#1585AC] text-white shadow-[6px_6px_0_0_#000]" : "border-black/10 bg-white"}`}>
              <div className="flex items-center justify-between gap-3">
                <span className={`grid size-11 place-items-center rounded-2xl ${popular ? "bg-white/15" : "bg-[#f6fbfd]"}`}>
                  <Icon aria-hidden="true" className={`size-5 ${popular ? "text-[#F6F648]" : "text-[#1585AC]"}`} />
                </span>
                {popular && <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F648] px-3 py-1.5 text-xs font-semibold text-black"><Sparkles aria-hidden="true" className="size-3.5 shrink-0" />{copy.popular}</span>}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{plan.name}</h3>
              <p className={`mt-2 min-h-10 text-sm leading-relaxed ${popular ? "text-white/90" : "text-[#3a3a3a]"}`}>{copy.descriptions[index]}</p>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
                <span className="text-[clamp(2.4rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.05em]">{inr.format(annual ? plan.annual : plan.monthly)}</span>
                <span className={`text-sm ${popular ? "text-white/90" : "text-[#3a3a3a]"}`}>{free ? copy.forever : period}</span>
              </p>
              <p className={`mb-7 mt-3 text-xs ${popular ? "text-white/90" : "text-[#3a3a3a]"}`}>
                {free ? copy.freeCaption : `${annual ? copy.billedYearly : copy.billedMonthly}. ${copy.trial}`}
              </p>
              <StickerButton
                href="/#access"
                aria-label={`${common.requestAccess}: ${plan.name}`}
                variant={popular ? "yellow" : "white"}
                className="w-full"
              >
                {free ? copy.startSpark : `${copy.choose} ${plan.name}`} <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </StickerButton>
              <div className={`mb-5 mt-8 border-t ${popular ? "border-white/25" : "border-black/10"}`} />
              <FeatureList features={copy.individualFeatures[index]} dark={popular} />
            </article>
          );
        })}
      </div>

      <div className="mb-7 mt-20 flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#F6F648]"><Users aria-hidden="true" className="size-5" /></span>
        <div>
          <p className="text-sm font-semibold text-[#1585AC]">{copy.agencyEyebrow}</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">{copy.agencyTitle}</h2>
          <p className="mt-3 text-sm text-[#3a3a3a]">{copy.agencyDescription}</p>
        </div>
      </div>

      <div aria-live="polite" aria-atomic="true" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {agencyPlans.map((plan, index) => (
          <article key={plan.name} className="flex flex-col rounded-[1.75rem] border border-black/10 bg-[#f6fbfd] p-6 lg:p-7">
            <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{copy.agencyDescriptions[index]}</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-[2.6rem] font-semibold leading-none tracking-[-0.05em]">{inr.format(annual ? plan.annual : plan.monthly)}</span>
              <span className="text-sm text-[#3a3a3a]">{period}</span>
            </p>
            <p className="mt-3 text-xs text-[#3a3a3a]">{annual ? copy.billedYearly : copy.billedMonthly} · {copy.trial}</p>
            <div className="my-6 border-t border-black/10" />
            <FeatureList features={copy.agencyFeatures[index]} />
            <div className="mt-auto pt-8">
              <StickerButton href="/#access" aria-label={`${common.requestAccess}: ${plan.name}`} className="w-full">
                {copy.choose} {plan.name} <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </StickerButton>
            </div>
          </article>
        ))}
        <article className="flex flex-col rounded-[1.75rem] bg-black p-6 text-white md:col-span-2 lg:col-span-1 lg:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F6F648]">{copy.enterpriseEyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">Enterprise</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{copy.enterpriseDescription}</p>
          <p className="mt-6 text-[2.6rem] font-semibold leading-none tracking-[-0.05em]">{copy.enterpriseTitle}</p>
          <p className="mt-3 text-xs text-white/80">{copy.enterpriseCaption}</p>
          <div className="my-6 border-t border-white/20" />
          <FeatureList dark features={copy.enterpriseFeatures} />
          <div className="mt-auto pt-8">
            <StickerButton href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Viralos Enterprise enquiry")}`} variant="yellow" className="w-full">
              {copy.contact} <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </StickerButton>
          </div>
        </article>
      </div>
    </section>
  );
}
