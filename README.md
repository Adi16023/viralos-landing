# Viralos landing

Public site for Viralos, an Instagram DM automation platform. The marketing page is built from [React Bits](https://reactbits.dev) components. Privacy, terms, cookies, and data deletion are public HTML pages for Meta App Review.

## Pricing

`/pricing` presents the freemium model: Spark is free forever, and paid plans offer
a 14-day trial with a card required at signup. Monthly/yearly prices and plan
limits live in `src/components/pricing-plans.tsx`. Annual prices are displayed as
yearly totals in INR. Plan buttons lead to the existing access-request flow;
Enterprise enquiries open an email. This page does not collect payments.

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
