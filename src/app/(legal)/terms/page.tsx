import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Viralos. Covers Instagram DM automation, Meta platform rules, the 24-hour window, opt-out, and acceptable use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell kicker="Viralos" title="Terms of Service">
      <p>
        These terms are the agreement between you and {SITE.name} for the Viralos website and the
        Instagram DM automation service. If you connect an Instagram account or send messages
        through Viralos, you agree to these terms, the <a href="/privacy">Privacy Policy</a>, and
        the <a href="/cookies">Cookie Policy</a>.
      </p>
      <p>
        If you use Viralos for a company, you confirm that you can bind that company. The service
        is for business and creator professional accounts. You must be at least 18.
      </p>

      <h2>1. The service</h2>
      <p>
        Viralos automates replies on Instagram professional accounts through Meta’s official
        Instagram API. It can respond when a person messages the account, replies to a story, or
        comments on the customer’s own content, using the rules the customer configures. It can
        hand a thread to a human teammate.
      </p>
      <p>
        Viralos does not provide unofficial Instagram clients, browser automation, or password-based
        login. Meta can change, limit, or revoke API access. We do not guarantee that a message
        will be delivered, that an account will stay unrestricted, or that Meta will approve any
        particular permission.
      </p>

      <h2>2. Connecting Instagram</h2>
      <ul>
        <li>You must be allowed to administer the Instagram professional account you connect.</li>
        <li>You authorize Viralos to use the permissions you grant, described in the Privacy Policy, only to provide the automation you turn on.</li>
        <li>You can disconnect at any time. Disconnecting stops new access. Deletion of stored data is requested on the <a href="/data-deletion">Data Deletion</a> page.</li>
        <li>You will not share your Instagram or Facebook password with Viralos or with anyone claiming to be Viralos.</li>
      </ul>

      <h2>3. Meta’s rules, which you must follow</h2>
      <p>
        You will comply with the <a href="https://developers.facebook.com/terms/">Meta Platform Terms</a>,
        the <a href="https://developers.facebook.com/devpolicy/">Meta Developer Policies</a>, Instagram’s
        terms and community guidelines, and the Instagram messaging rules. Those rules include:
      </p>
      <ul>
        <li>Message only after the person engages: a direct message, a story reply, a comment that is allowed to open a private reply, an icebreaker they tap, or another interaction Meta treats as user-initiated.</li>
        <li>Do not send cold messages to followers, likers, or people from a scraped list. Do not buy or upload recipient lists for that purpose.</li>
        <li>Keep standard automated messages inside the 24-hour window that starts when the person last interacts. When they message again, the window starts again.</li>
        <li>The human-agent tag, which can extend a support reply to 7 days, may be used only when a real person on your team sends that support reply. You may not use it for a bot, a promotion, or a blast.</li>
        <li>Outside the standard window, send only through a path Meta currently allows, such as a utility template or a marketing message the person opted into during an open window. Do not use message tags Meta has retired.</li>
        <li>Put a working opt-out in the conversation. If the person says stop, unsubscribe, or a clear equivalent, automated messages to them end immediately.</li>
        <li>From a comment or story trigger, send at most one automated private reply to that person in a 24-hour period.</li>
        <li>Stay inside the rate limits Meta applies to the Instagram API. Do not try to evade them with extra accounts or unofficial clients.</li>
        <li>Do not send content that breaks the law or Instagram’s rules, including scams, harassment, hate, sexual content involving minors, or regulated goods you are not allowed to promote.</li>
        <li>If Instagram notifies us that a person deleted a message, you will not ask us to keep using that copy.</li>
      </ul>
      <p>
        You are responsible for the reply text, offers, and claims you configure. Viralos may refuse
        or shut off an automation that breaks these rules, and may suspend the workspace.
      </p>

      <h2>4. Your content and Instagram data</h2>
      <p>
        You keep ownership of your reply scripts and account content. You give Viralos a limited
        permission to host, process, and send that material only so we can operate the service you
        asked for. That permission ends when the content or the account is deleted, except for
        copies we must keep for security or legal reasons, described in the Privacy Policy.
      </p>
      <p>
        People who message your Instagram account did not sign up with Viralos. You are responsible
        for having a lawful basis to message them and for honoring their requests. You will not ask
        Viralos to use their messages for advertising audiences, data sales, or model training.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You will not:</p>
      <ul>
        <li>Probe, disrupt, or overload the service or Instagram.</li>
        <li>Reverse engineer the service except where the law allows it.</li>
        <li>Resell access in a way that hides who is sending the messages.</li>
        <li>Use the service to break privacy, intellectual property, or anti-spam law.</li>
      </ul>

      <h2>6. Access and fees</h2>
      <p>
        Early access is requested by email from the website. We are not charging a subscription on
        this site. If a paid plan is introduced, the price, the renewal, and how to cancel will be
        shown before you are billed. Taxes, if any, will be stated at that time.
      </p>

      <h2>7. Ending access</h2>
      <p>
        You can stop using Viralos at any time and ask for deletion. We can suspend or close a
        workspace that breaks these terms, puts other people at risk, or risks our API access. Rules
        about data, liability, and Meta compliance still apply after access ends.
      </p>

      <h2>8. Disclaimers and liability</h2>
      <p>
        The service is provided as available. We do not warrant uninterrupted API access, a
        particular reply rate, or any sales result. To the extent the law allows, we are not liable
        for indirect or consequential damages, lost profits, or lost goodwill. Our total liability
        for a claim relating to the service is limited to the fees you paid us for Viralos in the
        12 months before the claim, or 100 US dollars if you paid nothing. These limits do not
        apply where the law forbids them, including liability for fraud or for death or injury
        caused by negligence.
      </p>

      <h2>9. Your responsibility for claims</h2>
      <p>
        If a person, Meta, or another third party claims that your messages, your offers, or your
        use of a connected account broke the law or these terms, you will cover the resulting
        damages and reasonable legal costs we incur, except to the extent we caused the claim.
      </p>

      <h2>10. Disputes</h2>
      <p>
        Email {SITE.contactEmail} and describe the dispute. We will try to resolve it within 30
        days. If we cannot, either side may bring the claim in a court that has jurisdiction, and
        mandatory rights in your country of residence still apply. These terms do not require
        private arbitration.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these terms by posting a new version on this URL and changing the effective
        date. If you keep using Viralos after the update, the new terms apply. The page stays public
        and does not redirect to the home page.
      </p>

      <h2>12. Contact</h2>
      <p>
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. Updated {SITE.updated}.
      </p>
    </LegalShell>
  );
}
