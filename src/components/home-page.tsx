"use client";

import { AccessForm } from "@/components/access-form";
import AnimatedContent from "@/components/AnimatedContent";
import BorderGlow from "@/components/BorderGlow";
import Carousel from "@/components/Carousel";
import ClickSpark from "@/components/ClickSpark";
import CountUp from "@/components/CountUp";
import FadeContent from "@/components/FadeContent";
import GlareHover from "@/components/GlareHover";
import GradientText from "@/components/GradientText";
import MagicBento from "@/components/MagicBento";
import RotatingText from "@/components/RotatingText";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollVelocity from "@/components/ScrollVelocity";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import StarBorder from "@/components/StarBorder";
import Stepper, { Step } from "@/components/Stepper";
import TrueFocus from "@/components/TrueFocus";
import WebThreads from "@/components/WebThreads";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const faqs = [
  {
    q: "What is Viralos?",
    a: "Viralos is an Instagram DM automation platform for professional accounts. It watches conversations people start with you and sends the reply you configured, through Meta’s official Instagram API.",
  },
  {
    q: "Can it message people who never contacted me?",
    a: "No. A person has to message the account, reply to a story, or comment in a way that opens a conversation. Cold DMs to followers or likers are not part of the product.",
  },
  {
    q: "Does Viralos ask for my Instagram password?",
    a: "No. Connection uses Instagram’s official login and permissions. If a tool asks for your Instagram password, it is not Viralos.",
  },
  {
    q: "What happens after 24 hours?",
    a: "Standard automated replies stay inside the 24-hour window that opens when the person last interacts. A real person on your team can use Meta’s human-agent path for support, for up to 7 days. Viralos does not let a bot pretend to be that human.",
  },
  {
    q: "How does someone get their data deleted?",
    a: "They can remove Viralos in Instagram or Facebook and ask Meta to delete the data, or they can use the public data-deletion page. Instructions, a confirmation code, and a status link are on that page. No login is required to read it.",
  },
  {
    q: "How do I get access?",
    a: "Request access from this page. We email you back. There is no separate mailing list on this site until you send that email.",
  },
];

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-white">
            <WebThreads
              color1="#1585AC"
              color2="#0a6d90"
              color3="#F6F648"
              backgroundColor="#FFFFFF"
              lightMode
              brightness={0.9}
            />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-5xl flex-col justify-end px-6 pb-36 pt-36">
            <ShinyText
              text="Instagram DM automation"
              className="text-sm uppercase tracking-[0.22em] text-[#000000]"
            />
            <h1 className="mt-5 max-w-full text-balance text-left font-sans text-[clamp(2.35rem,9vw,6.6rem)] leading-[0.95] text-[#000000]">
              Reply while the conversation is still open.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xl text-[#000000]">
              <span>Triggered by</span>
              <RotatingText
                texts={["a comment", "a story reply", "an inbound DM", "an icebreaker"]}
                mainClassName="overflow-hidden text-[#1585AC]"
                rotationInterval={2200}
              />
            </div>
            <p className="mt-6 max-w-xl text-lg text-[#1a1a1a]">
              Viralos answers for professional accounts through the official Instagram API. The person
              goes first. The 24-hour window does the rest.
            </p>
            <ClickSpark sparkColor="#1585AC" className="mt-8 inline-flex flex-wrap gap-3">
              <StarBorder as="a" href="/#access" color="#1585AC" theme="light" thickness={2}>
                Request access
              </StarBorder>
              <StarBorder as="a" href="/#rules" color="#F6F648" theme="light" thickness={1}>
                See the rules
              </StarBorder>
            </ClickSpark>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-5xl px-6 py-28">
          <ShinyText text="Inbox" className="text-sm uppercase tracking-[0.18em]" />
          <ScrollReveal
            containerClassName="mt-4"
            textClassName="font-sans text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] text-[#000000]"
            baseOpacity={1}
            enableBlur={false}
          >
            Signals from the conversations people already started.
          </ScrollReveal>
          <p className="mt-6 max-w-2xl text-lg text-[#3a3a3a]">
            Viralos watches the inbox, comments, and story replies on the professional account you
            connect. It shows which thread is waiting, why it opened, and which reply is still
            allowed.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["See the thread", "A comment, a story reply, or a direct message lands in one queue with the account it belongs to."],
              ["Know why it matters", "Keyword, intent, and the time left in the messaging window sit next to the draft."],
              ["Reply with the rules on", "The send stays inside Meta’s window, carries your opt-out, and stops when the person says stop."],
            ].map(([title, copy]) => (
              <SpotlightCard key={title} theme="light" className="p-6" spotlightColor="rgba(21, 133, 172, 0.28)">
                <h2 className="font-sans text-3xl text-[#000000]">{title}</h2>
                <p className="mt-3 text-[#3a3a3a]">{copy}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-8 px-6 py-8">
          {[
            "Catch the lead before the 24-hour window closes.",
            "Hand the thread to a person when the question needs a person.",
            "Spend less time refreshing the inbox to find the message that matters.",
          ].map((line) => (
            <FadeContent key={line} initialOpacity={1} className="border-t border-black/10 pt-8">
              <p className="font-sans text-3xl text-[#000000] md:text-5xl">{line}</p>
            </FadeContent>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <ShinyText text="See what Viralos can handle" className="text-sm uppercase tracking-[0.18em]" />
          <div className="mt-8">
            <MagicBento
              theme="light"
              glowColor="21, 133, 172"
              columns={3}
              textAutoHide={false}
              items={[
                {
                  label: "01",
                  title: "Comment to DM",
                  description: "Someone comments a keyword on your post. Viralos sends one private reply while that conversation is allowed.",
                  colSpan: 2,
                },
                {
                  label: "02",
                  title: "Story replies",
                  description: "A story reply opens the window. The follow-up stays tied to that reply.",
                },
                {
                  label: "03",
                  title: "Keyword DMs",
                  description: "An inbound message matches a phrase you wrote. The answer goes out as your account.",
                },
                {
                  label: "04",
                  title: "Human handoff",
                  description: "Help, refund, or an angry thread moves to a teammate. The bot does not keep selling.",
                  colSpan: 2,
                },
              ]}
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-10">
          <AnimatedContent>
            <ShinyText text="A thread, before it goes cold" className="text-sm uppercase tracking-[0.18em]" />
          </AnimatedContent>
          <div className="mt-6">
            <Carousel
              theme="light"
              effect="slide"
              baseWidth="100%"
              autoplay
              items={[
                {
                  title: "The comment",
                  description: "A person comments “price” on a reel. That comment is the trigger, not a license to message anyone else who liked the post.",
                },
                {
                  title: "The private reply",
                  description: "Viralos sends the answer you saved, with a way to say stop, while the messaging window is open.",
                },
                {
                  title: "The handoff",
                  description: "They ask for a refund. A teammate takes the thread. Outside 24 hours, only that person replies, and only for support.",
                },
              ]}
            />
          </div>
        </section>

        <section id="how" className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#1585AC]">02 · The flow</p>
          <h2 className="mt-3 max-w-3xl font-sans text-4xl text-[#000000] md:text-6xl">
            From the first message to a person, when a person is needed.
          </h2>
          <div className="mt-10">
            <Stepper theme="light" accentColor="#1585AC" orientation="vertical" initialStep={1} frame>
              <Step title="Connect" description="Instagram login">
                <p className="text-[#1a1a1a]">
                  An admin of the professional account approves Viralos in Instagram’s official
                  login. We store the token for that account. We never take the password.
                </p>
              </Step>
              <Step title="Trigger" description="They go first">
                <p className="text-[#1a1a1a]">
                  A direct message, a story reply, or a comment on your own post opens the
                  conversation. Nothing sends because someone merely followed or liked.
                </p>
              </Step>
              <Step title="Reply" description="Inside the window">
                <p className="text-[#1a1a1a]">
                  The automated reply goes out within 24 hours of their last interaction, paced
                  inside the Instagram API limits, with one automated private reply per person from
                  a comment or story trigger in that day.
                </p>
              </Step>
              <Step title="Hand off" description="A human, not a tag">
                <p className="text-[#1a1a1a]">
                  If they need support after the window, a real teammate answers. Viralos will not
                  stamp the human-agent tag on a bot message.
                </p>
              </Step>
            </Stepper>
          </div>
        </section>

        <section className="py-10">
          <ScrollVelocity
            texts={[
              "COMMENTS · STORY REPLIES · KEYWORD DMS · ICEBREAKERS · ",
              "OPT-OUT · HUMAN HANDOFF · 24-HOUR WINDOW · NO PASSWORDS · ",
            ]}
            velocity={40}
            className="text-4xl font-semibold uppercase tracking-tight text-[#000000]/80 md:text-6xl"
          />
        </section>

        <section id="rules" className="mx-auto max-w-5xl px-6 py-24">
          <ShinyText text="Built for the review, not around it" className="text-sm uppercase tracking-[0.18em]" />
          <h2 className="mt-4 max-w-3xl font-sans text-4xl text-[#000000] md:text-6xl">
            Meta’s messaging rules are the product rules.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [24, "hours", "Standard window after their last message."],
              [7, "days", "Support replies from a real human, not a bot."],
              [30, "days", "Deletion requests are finished inside this window."],
              [0, "passwords", "Instagram login only. The password stays with them."],
            ].map(([value, label, copy]) => (
              <GlareHover
                key={String(label)}
                width="100%"
                height="220px"
                background="#FFFFFF"
                borderRadius="24px"
                borderColor="#1585AC"
                glareColor="#F6F648"
              >
                <div className="flex h-full flex-col justify-between p-5 text-left">
                  <CountUp to={Number(value)} className="font-sans text-5xl text-[#000000]" />
                  <div>
                    <p className="text-[#1585AC]">{label}</p>
                    <p className="mt-1 text-sm text-[#3a3a3a]">{copy}</p>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <SpotlightCard theme="light" className="p-6">
              <h3 className="text-xl text-[#000000]">Allowed</h3>
              <p className="mt-3 text-[#3a3a3a]">
                Official API sends after a person messages, comments, or replies to a story.
                Promotional content only inside an open window. Opt-out in the thread. Message
                copies removed when Instagram says the person deleted them.
              </p>
            </SpotlightCard>
            <SpotlightCard theme="light" className="p-6">
              <h3 className="text-xl text-[#000000]">Not allowed</h3>
              <p className="mt-3 text-[#3a3a3a]">
                Browser bots, scraped recipient lists, password sharing, cold welcome pitches, and
                using the human-agent tag to automate a promotion. Those paths are how accounts
                lose API access.
              </p>
            </SpotlightCard>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <TrueFocus
            sentence="Consent over volume"
            borderColor="#1585AC"
            glowColor="rgba(21, 133, 172, 0.45)"
          />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <ScrollReveal baseOpacity={1} enableBlur={false} textClassName="text-2xl leading-snug text-[#000000]">
              Try a keyword. Read the replies. Change the line that feels like spam. The window only stays open when people keep talking back.
            </ScrollReveal>
            <ScrollReveal baseOpacity={1} enableBlur={false} textClassName="text-2xl leading-snug text-[#000000]">
              Your scripts stay yours. Viralos does not sell Instagram data and does not use private messages to train a public model.
            </ScrollReveal>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
          <ShinyText text="Questions, before you connect an account" className="text-sm uppercase tracking-[0.18em]" />
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((item) => (
              <FadeContent key={item.q} initialOpacity={1}>
                <details className="group py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg text-[#000000]">
                    {item.q}
                    <span className="text-[#1585AC] group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[#3a3a3a]">{item.a}</p>
                </details>
              </FadeContent>
            ))}
          </div>
        </section>

        <section id="access" className="mx-auto max-w-3xl px-6 py-20">
          <BorderGlow glowColor="198 80% 38%" backgroundColor="#FFFFFF" borderRadius={28} colors={["#1585AC", "#F6F648", "#000000"]}>
            <div className="p-8 md:p-12">
              <GradientText className="block font-sans text-[clamp(2.4rem,8vw,3.5rem)] leading-tight" colors={["#1585AC", "#000000", "#0a6d90"]}>
                The next reply starts here.
              </GradientText>
              <p className="mt-4 max-w-xl text-[#3a3a3a]">
                Viralos is opening for professional accounts that want official Instagram DM
                automation. No spam list. The button opens an email to us.
              </p>
              <AccessForm />
            </div>
          </BorderGlow>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
