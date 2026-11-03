# Viralos landing

Public site for Viralos, an Instagram DM automation platform. The marketing page is built from [React Bits](https://reactbits.dev) components. Privacy, terms, cookies, and data deletion are public HTML pages for Meta App Review.

## Pricing

`/en/pricing` and `/ta/pricing` present the freemium model: Spark is free forever, and paid plans offer
a 14-day trial with a card required at signup. Monthly/yearly prices and plan
limits live in `src/components/pricing-plans.tsx`. Annual prices are displayed as
yearly totals in INR. Plan buttons lead to the existing access-request flow;
Enterprise enquiries open an email. This page does not collect payments.

## Languages and translation review

Home and Pricing have dedicated `/en`, `/ta`, `/en/pricing`, and `/ta/pricing`
URLs. `next-intl` provides the message context; it does not generate translations
or call a translation service. English and draft Tamil copy live in
`src/i18n/messages/en.ts` and `src/i18n/messages/ta.ts`. The Tamil message file
must satisfy the English TypeScript schema. A native Tamil speaker should review
the draft, including product terminology and pricing claims, before publication.
Brand and plan names, INR amounts, and messaging limits are unchanged.

The header language selector preserves the current page and section and stores
`VIRALOS_LOCALE` for one year when clicked. The bare `/` and `/pricing` routes
redirect to that preference, or English if none is set. Explicit locale URLs
always win; browser language does not force a redirect. Root layouts provide
the correct HTML language, Noto Sans Tamil, translated metadata, canonical URLs,
and alternate-language links. A language change crosses localized root layouts,
so Next.js may load a new document; the session intro does not replay.

Legal pages retain their existing English URLs and are labelled English in the
Tamil footer. They are intentionally not machine-translated.

## Meta dashboard URLs

In App settings → Basic, after the site is deployed:

| Field | Path |
| --- | --- |
| Privacy Policy URL | `/privacy` |
| Terms of Service URL | `/terms` |
| Data deletion instructions URL | `/data-deletion` |
| Data deletion callback URL | `/api/meta/data-deletion` |
| Deauthorize callback URL | `/api/meta/deauthorize` |

Set `META_APP_SECRET` in the host before using the callback. The instructions page works without it. The callback checks Meta’s `signed_request` and returns `url` and `confirmation_code`.

Pages are public, use HTTPS on Vercel, and do not redirect to the home page or ask for a login.

## Local

Main marketing sections, the header, and the footer share `.site-container` in
`src/app/globals.css`: full-width content with responsive 24–96px side gutters.
Reading-heavy sections keep their narrower text widths.

The shared header uses React Bits Pill Nav with split layout, plain items, a
glass capsule, glide hover, and a pill indicator. It automatically collapses
when the links no longer fit and respects reduced-motion preferences.
The original wordmark sits separately on the left; desktop navigation is
centered, with a blue surface and yellow highlight matching the brand.

Internal header/footer links and sticker buttons use client-side navigation.
The intro loader runs once per tab session, tracked by
`sessionStorage["viralos:intro-seen"]`; refreshing or navigating does not replay
it. If session storage is blocked, a console warning is emitted and the loader
is limited to once per document instead.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when you have the Meta app secret.
