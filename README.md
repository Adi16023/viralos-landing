# Viralos landing

Public site for Viralos, an Instagram DM automation platform. The marketing page is built from [React Bits](https://reactbits.dev) components. Privacy, terms, cookies, and data deletion are public HTML pages for Meta App Review.

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

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when you have the Meta app secret.
