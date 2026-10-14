import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for the Viralos website. This marketing site does not use analytics or advertising cookies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalShell kicker="Viralos" title="Cookie Policy">
      <p>
        This policy describes cookies and similar storage on the {SITE.name} marketing website. It
        sits with the <a href="/privacy">Privacy Policy</a> and the{" "}
        <a href="/terms">Terms of Service</a>. It is public and does not require a login.
      </p>

      <h2>1. What this site uses</h2>
      <p>
        This website does not set analytics cookies, advertising cookies, or a Meta Pixel. It does
        not load Google Analytics. A visit does not add you to an advertising audience.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Where</th>
            <th>How long</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>viralos-cookie-notice</td>
            <td>Functional storage, not an HTTP cookie</td>
            <td>localStorage on this site’s origin</td>
            <td>Until you clear site data</td>
            <td>Remembers that you dismissed the notice so it does not cover the page on every visit.</td>
          </tr>
        </tbody>
      </table>
      <p>
        The host, Vercel, may process IP addresses and request logs to deliver the site and resist
        abuse. Those logs are described in the Privacy Policy. They are not an advertising cookie.
      </p>

      <h2>2. What we will not turn on quietly</h2>
      <p>
        If a later version of the product needs a sign-in cookie, it will be a strictly necessary
        session cookie, marked Secure and HttpOnly, and this page will be updated before that cookie
        is set. Non-essential analytics or marketing storage will load only after a choice that is
        recorded first. A Global Privacy Control signal (Sec-GPC: 1) will be treated as a refusal of
        non-essential storage.
      </p>

      <h2>3. Your choices</h2>
      <p>
        You can clear local storage for this site in your browser, or block storage entirely. The
        pages, including the privacy, terms, and data-deletion pages, still load. Browser help:
      </p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Third-party cookies, and site settings for local storage.</li>
        <li>Safari: Settings → Privacy.</li>
        <li>Firefox: Settings → Privacy and Security.</li>
        <li>Edge: Settings → Cookies and site permissions.</li>
      </ul>

      <h2>4. Contact</h2>
      <p>
        Questions: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. Updated{" "}
        {SITE.updated}.
      </p>
    </LegalShell>
  );
}
