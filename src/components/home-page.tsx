import { AccessForm } from "@/components/access-form";
import { StickerButton } from "@/components/sticker-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const marquee = [
  "Official Instagram API",
  "No passwords",
  "Comment to DM",
  "Story replies",
  "24-hour window",
  "Human handoff",
  "Opt-out in the thread",
];

const features = [
  {
    title: "Turn comments into one private reply",
    copy: "Someone comments a keyword on your post. Viralos sends the answer you saved while that conversation is allowed. It does not message everyone who liked it.",
    tone: "yellow" as const,
  },
  {
    title: "Story replies stay tied to the story",
    copy: "A story reply opens the window. The follow-up stays attached to that reply, not to a list of viewers.",
    tone: "white" as const,
  },
  {
    title: "Keyword DMs, in your voice",
    copy: "An inbound message matches a phrase you wrote. The answer goes out as your account, with a way to say stop.",
    tone: "blue" as const,
  },
  {
    title: "A person takes the hard threads",
    copy: "Help, a refund, or an angry message moves to a teammate. The bot does not keep selling, and it never pretends to be that person.",
    tone: "white" as const,
  },
];

const before = [
  "Copying the same reply into every thread",
  "Losing the person who commented “price”",
  "Refreshing the inbox to find what still matters",
  "A bot still pitching after they asked for help",
];

const after = [
  "One private reply, tied to the comment or story",
  "Keyword, intent, and time left in the window",
  "A teammate takes the thread when a person is needed",
  "Opt-out in the conversation. Stop means stop.",
];

const steps = [
  {
    title: "Connect",
    copy: "An admin of the professional account approves Viralos in Instagram’s official login. The password stays with them.",
  },
  {
    title: "Trigger",
    copy: "A direct message, a story reply, or a comment on your own post opens the conversation. A follow or a like does not.",
  },
  {
    title: "Reply",
    copy: "The automated reply goes out within 24 hours of their last interaction, inside Instagram’s API limits.",
  },
  {
    title: "Hand off",
    copy: "If they need support after the window, a real teammate answers. Viralos will not stamp a human tag on a bot message.",
  },
];

const stats = [
  ["24", "hours", "Standard window after their last message."],
  ["7", "days", "Support replies from a real human, not a bot."],
  ["30", "days", "Deletion requests are finished inside this window."],
  ["0", "passwords", "Instagram login only. The password stays with them."],
];

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

const tones = {
  yellow: "bg-[#F6F648] text-[#000000]",
  white: "border border-black/10 bg-white text-[#000000]",
  blue: "bg-[#1585AC] text-white",
};

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-4 pt-16 md:pt-24">
            <p className="text-sm font-semibold text-[#1585AC]">Instagram DM automation</p>
            <h1 className="mt-4 max-w-4xl text-balance font-sans text-[clamp(2.8rem,6.4vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#000000]">
              Reply while the conversation is still open.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3a3a3a]">
              Viralos answers for professional accounts through the official Instagram API. The
              person goes first. The 24-hour window does the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StickerButton href="/#access" variant="yellow">
                Request access
              </StickerButton>
              <StickerButton href="/#rules">See the rules</StickerButton>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 pb-16 pt-10">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6fbfd] p-3 shadow-[0_28px_70px_-36px_rgba(21,133,172,0.55)] md:p-5">
              <div className="grid gap-3 lg:grid-cols-[240px_1fr]">
                <div className="rounded-[1.4rem] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1585AC]">
                    Inbox
                  </p>
                  <ul className="mt-4 space-y-3">
                    {[
                      ["@maya", "Commented “price”", "18h left"],
                      ["@leo", "Story reply", "6h left"],
                      ["@nina", "Asked for a refund", "Hand off"],
                    ].map(([name, reason, meta]) => (
                      <li key={name} className="rounded-2xl bg-[#f6fbfd] px-3 py-3">
                        <p className="font-semibold text-[#000000]">{name}</p>
                        <p className="text-sm text-[#3a3a3a]">{reason}</p>
                        <p className="mt-1 text-xs font-medium text-[#1585AC]">{meta}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.4rem] bg-white p-5 md:p-7">
                  <p className="text-sm text-[#3a3a3a]">Reel comment · keyword “price”</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#000000]">
                    One reply, still inside the window
                  </h2>
                  <div className="mt-6 space-y-3">
                    <div className="max-w-md rounded-2xl rounded-bl-md bg-[#f6fbfd] px-4 py-3 text-[#1a1a1a]">
                      How much is the starter kit?
                    </div>
                    <div className="ml-auto max-w-md rounded-2xl rounded-br-md bg-[#1585AC] px-4 py-3 text-white">
                      The starter kit is $48, and shipping is included. Reply STOP and we won’t
                      message again.
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-[#3a3a3a]">
                    A comment opens the window. The reply stays inside it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-black/10 bg-white py-4" aria-label="Product facts">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center">
                {marquee.map((item) => (
                  <li key={`${copy}-${item}`} className="flex items-center px-4 text-sm font-semibold text-[#000000]">
                    <span className="mr-4 inline-block size-2 rounded-full bg-[#F6F648] ring-2 ring-black" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
              Scale the conversations people already started.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[#3a3a3a]">
              Viralos watches the inbox, comments, and story replies on the professional account
              you connect. It shows which thread is waiting, why it opened, and which reply is
              still allowed.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className={`rounded-[1.75rem] p-7 md:p-8 ${tones[feature.tone]}`}>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{feature.title}</h3>
                <p className={`mt-3 text-base leading-relaxed ${feature.tone === "blue" ? "text-white/90" : "text-[#1a1a1a]"}`}>
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f6fbfd]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
              Your inbox, before and after.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.75rem] border border-black/10 bg-white p-7 md:p-9">
                <p className="text-sm font-semibold text-[#3a3a3a]">Before</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#000000]">
                  More messages, same scramble.
                </h3>
                <ul className="mt-6 space-y-3">
                  {before.map((item) => (
                    <li key={item} className="flex gap-3 text-[#1a1a1a]">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[1.75rem] bg-[#F6F648] p-7 md:p-9">
                <p className="text-sm font-semibold text-[#000000]">After</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#000000]">
                  The window stays useful.
                </h3>
                <ul className="mt-6 space-y-3">
                  {after.map((item) => (
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

        <section id="how" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-6xl">
            Up and running in four steps.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-[#3a3a3a]">
            From the first message to a person, when a person is needed.
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-[#1585AC]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#000000]">{step.title}</h3>
                <p className="mt-3 text-[#3a3a3a]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="rules" className="bg-[#1585AC] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Meta’s messaging rules are the product rules.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([value, label, copy]) => (
                <div key={`${value}-${label}`}>
                  <p className="font-sans text-5xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 font-semibold text-[#F6F648]">{label}</p>
                  <p className="mt-2 text-sm text-white/85">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.75rem] bg-white p-7 text-[#000000]">
                <h3 className="text-2xl font-semibold">Allowed</h3>
                <p className="mt-3 text-[#1a1a1a]">
                  Official API sends after a person messages, comments, or replies to a story.
                  Promotional content only inside an open window. Opt-out in the thread. Message
                  copies removed when Instagram says the person deleted them.
                </p>
              </article>
              <article className="rounded-[1.75rem] bg-[#000000] p-7 text-white">
                <h3 className="text-2xl font-semibold">Not allowed</h3>
                <p className="mt-3 text-white/85">
                  Browser bots, scraped recipient lists, password sharing, cold welcome pitches, and
                  using the human-agent tag to automate a promotion. Those paths are how accounts
                  lose API access.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-sans text-4xl font-semibold tracking-[-0.04em] text-[#000000] md:text-5xl">
            Questions, before you connect an account.
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-3xl border border-black/10 bg-white px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-[#000000] [&::-webkit-details-marker]:hidden">
                  {item.q}
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
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
            <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#000000]">
              The next reply starts here.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#1a1a1a]">
              Viralos is opening for professional accounts that want official Instagram DM
              automation. No spam list. The button opens an email to us.
            </p>
            <AccessForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
