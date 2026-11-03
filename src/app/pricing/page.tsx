import type { Metadata } from "next";
import { PricingPlans } from "@/components/pricing-plans";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickerButton } from "@/components/sticker-button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free with Spark or find your next step with Ignite, Blaze, and Viralos agency plans. Compare monthly and annual pricing in INR.",
  alternates: { canonical: "/pricing" },
};

const faqs = [
  {
    question: "Is Spark really free?",
    answer:
      'Yes. Spark is free forever, with 3 automations and "Powered by Viralos" branding. No card is required. It is a starting point for trying automation before moving to a paid plan.',
  },
  {
    question: "How do paid trials work?",
    answer:
      "Ignite, Blaze, Agency, and Agency Pro include a 14-day trial, with a card saved at signup. Enterprise terms are agreed with our team. This site currently takes access requests, not payments; we will confirm availability and billing details before you sign up.",
  },
  {
    question: "How does yearly pricing work?",
    answer:
      "Yearly prices are the total for one year, not a monthly charge. Compared with paying monthly for 12 months, yearly billing saves up to 17% on paid plans. Use the billing switch above to see the exact totals.",
  },
  {
    question: "Which plan is right for an agency?",
    answer:
      "Agency supports 5 client accounts, with 60 automations per account and white-labeling. Agency Pro supports 15 client accounts and adds a dedicated account manager. For custom SLAs, advanced security, or white-glove support, talk to us about Enterprise.",
  },
  {
    question: "Do the same messaging rules apply to every plan?",
    answer:
      "Yes. A higher plan does not unlock cold DMs or bypass Meta's rules. Instagram automated replies must follow an interaction the person starts and stay inside the permitted messaging window. Connection uses the official API, never your Instagram password.",
  },
];

export default function PricingPage() {
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
              Small start.
              <br />
              <span className="relative isolate inline-block px-2">
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[42%] -rotate-2 bg-[#F6F648]" />
                Big conversations.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3a3a3a]">
              Start free. Find your rhythm. Pick the plan that gives your next
              chapter a little more room.
            </p>
            <a href="#plans" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1585AC] underline-offset-4 hover:underline">
              Find your fit <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </section>

        <PricingPlans />

        <section className="border-y border-black/10 bg-[#f6fbfd]">
          <div className="site-container grid gap-7 py-10 md:grid-cols-3">
            {[
              ["01", "Official API. Always.", "Instagram connection through the official API. Your password stays yours."],
              ["02", "The person goes first.", "Replies follow a conversation they start, inside the permitted messaging window."],
              ["03", "A real team, one email away.", "Need a hand choosing? Tell us about your account and we will help you find a fit."],
            ].map(([number, title, copy]) => (
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
            <p className="text-sm font-semibold text-[#1585AC]">Good questions.</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              A few things,
              <br />
              cleared up.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-[#3a3a3a]">
              No guesswork before your next step. Here is how the plans work.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-3xl border border-black/10 bg-white p-5">
                <summary className="flex list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {question}
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
              <p className="text-sm font-semibold">Your next chapter starts with a reply.</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-5xl">Less inbox juggling.<br />More room to grow.</h2>
            </div>
            <StickerButton href="/#access" className="shrink-0">
              Request access <span aria-hidden="true">&rarr;</span>
            </StickerButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
