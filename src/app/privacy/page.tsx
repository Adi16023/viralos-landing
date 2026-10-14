import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Viralos, an Instagram DM automation platform. Describes Instagram data, use, retention, sharing, and how to request deletion.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell kicker="Viralos" title="Privacy Policy">
      <p>
        This Privacy Policy explains how {SITE.name} (“Viralos”, “we”) handles personal information
        when you visit this website or when a business connects an Instagram professional account so
        Viralos can automate direct messages. It is written for the people Meta asks us to inform:
        the business that connects an account, and the person who messages that account.
      </p>
      <p>
        You can read this page without an account or a password. To ask for deletion, use{" "}
        <a href="/data-deletion">Data Deletion</a>. The terms that govern use of the service are at{" "}
        <a href="/terms">Terms of Service</a>. Cookies and similar storage are described in the{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Viralos is an Instagram DM automation platform. It sends and organizes replies for Instagram
        professional accounts through Meta’s official Instagram API. The privacy contact for this
        policy is <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
      <p>
        For messages inside a connected Instagram account, the business customer decides why those
        messages are processed and is the controller. Viralos processes that Instagram data on the
        customer’s instructions, to provide the automation they turned on. Viralos is the controller
        for this website, for access emails you send us, and for security logs of the site.
      </p>

      <h2>2. Instagram and Meta data</h2>
      <p>
        We request only the permissions needed to run DM automation. We do not request permission to
        publish posts. We never ask for an Instagram or Facebook password. Connection happens through
        Meta’s official login screen, where the account admin chooses what to allow.
      </p>
      <p>Depending on the login path Meta offers for the account, the permissions are:</p>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>What it can include</th>
            <th>Why Viralos uses it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>instagram_business_basic, or the earlier instagram_basic</td>
            <td>Professional account ID, username, name, profile picture, account type, and counts the API returns with the profile.</td>
            <td>To show which account is connected and to send as that account.</td>
          </tr>
          <tr>
            <td>instagram_business_manage_messages, or the earlier instagram_manage_messages</td>
            <td>Conversation and message IDs, message text, attachments the person sent, timestamps, participant IDs, story-reply context, icebreaker or ad referral context, and delivery state when the API provides it.</td>
            <td>To display the inbox and send the replies the customer configured.</td>
          </tr>
          <tr>
            <td>instagram_business_manage_comments, or the earlier instagram_manage_comments</td>
            <td>Comment ID, text, time, media ID, and the commenter’s ID and username.</td>
            <td>To send a private reply when someone comments on the customer’s own post or reel.</td>
          </tr>
          <tr>
            <td>pages_show_list, pages_manage_metadata, pages_messaging, pages_read_engagement, business_management, and email, only on the Facebook Login path</td>
            <td>The list of Pages and businesses the admin can access, the Page linked to the Instagram account, and the admin’s email if they grant it.</td>
            <td>To let the admin pick the correct professional account. We do not use Page data to publish or to advertise.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Message content is used to provide the inbox and the automations that customer enabled. It is
        not sold. It is not used to train a public AI model. It is not used to build advertising
        profiles of the people who message a customer, and it is not shared with data brokers.
      </p>

      <h2>3. Information from business customers and this website</h2>
      <ul>
        <li>Account details the customer gives us, such as name, work email, and the Instagram username they connect.</li>
        <li>Automation settings: keywords, reply text, handoff rules, and opt-out handling.</li>
        <li>Emails you send from the access form or the deletion form. This website does not keep a separate marketing list. If you do not send the email, we do not receive the address.</li>
        <li>Technical logs from hosting, such as IP address, user agent, and the page requested, used to keep the site available and to investigate abuse.</li>
      </ul>
      <p>
        We do not run a Meta Pixel, Google Analytics, or other advertising cookies on this marketing
        site. See the Cookie Policy.
      </p>

      <h2>4. Why we process it</h2>
      <ul>
        <li>To connect the professional account and send replies the customer configured.</li>
        <li>To enforce the messaging limits in the Terms: a person has to engage first, standard automation stays inside 24 hours, and a bot cannot use the human-agent tag.</li>
        <li>To honor “stop” and similar opt-outs, and to delete a stored message when Instagram notifies us that the person deleted it.</li>
        <li>To answer access and privacy requests, and to keep a short record that a deletion request was received.</li>
        <li>To protect the service against abuse and to fix failures.</li>
      </ul>
      <p>
        Where the GDPR or UK GDPR applies, the legal bases are: contract, for providing the
        automation a customer asked for; legitimate interests, for security logs and for keeping the
        site reliable, balanced against your rights; consent, when an admin connects an account or
        when a person opts in to a later message inside an open conversation; and legal obligation,
        where we must keep a record of a request or a transaction.
      </p>

      <h2>5. How long we keep it</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access tokens for a connected Instagram account</td>
            <td>Until the customer disconnects the account or the token is revoked, then deleted within 30 days.</td>
          </tr>
          <tr>
            <td>Message and comment content used for automation</td>
            <td>While the customer workspace is active, and no longer than 24 months, unless a shorter delete happens first.</td>
          </tr>
          <tr>
            <td>A message the person deletes on Instagram</td>
            <td>Our copy is deleted after the deletion webhook, without using that content again.</td>
          </tr>
          <tr>
            <td>Website server logs</td>
            <td>Up to 90 days.</td>
          </tr>
          <tr>
            <td>Deletion receipt (code, time, status)</td>
            <td>Up to 3 years, without the message content, so we can show that the request was received.</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Who else processes it</h2>
      <ul>
        <li>Meta Platforms processes the API calls, because that is how Instagram messaging works. Their terms apply to the connected account.</li>
        <li>Vercel hosts this website and may process IP addresses and request logs on its network.</li>
        <li>When the product database is connected, the host of that database will be listed here before customer message data is stored there. This marketing site does not store Instagram message bodies.</li>
      </ul>
      <p>
        We do not sell personal information. We do not share it for cross-context behavioral
        advertising. We do not give Instagram data to data brokers.
      </p>

      <h2>7. Deletion, access, and other rights</h2>
      <p>
        You can ask us to delete, correct, export, or explain the personal information we hold. You
        can object to processing based on legitimate interests, and you can complain to a data
        protection authority. We respond within 30 days.
      </p>
      <p>
        Removing the app in Instagram or Facebook stops new access. Deletion of data we already
        stored is a separate step. Both paths are on the <a href="/data-deletion">Data Deletion</a>{" "}
        page, which is also the instructions URL for Meta App settings. Meta can call{" "}
        <a href="/api/meta/data-deletion">/api/meta/data-deletion</a> when a person removes the app
        and asks for deletion. That endpoint checks Meta’s signed request and returns a confirmation
        code plus a status URL.
      </p>
      <p>
        An Instagram user can also remove access under Settings and activity → Apps and websites.
        A Facebook user can use Settings and privacy → Settings → Apps and websites, remove Viralos,
        and choose to delete data.
      </p>

      <h2>8. Security</h2>
      <p>
        The site is served over HTTPS. Instagram tokens are not placed in the browser of the person
        who is being messaged. Meta callbacks are accepted only when the signed request matches the
        app secret. Staff access to customer message data, once that database exists, is limited to
        operating and supporting the service.
      </p>

      <h2>9. Children</h2>
      <p>
        Viralos is a business tool for people 18 or older. It is not directed at children. We do not
        knowingly store personal information about a child under 13. If you believe we have, email{" "}
        {SITE.contactEmail} and we will delete it.
      </p>

      <h2>10. International transfers</h2>
      <p>
        This website is hosted on Vercel, which can process a request outside your country. Where
        required, we rely on the provider’s standard contractual clauses or the EU-U.S. Data Privacy
        Framework participation of that provider.
      </p>

      <h2>11. California</h2>
      <p>
        In the last 12 months we have not sold personal information and we have not shared it for
        cross-context behavioral advertising. California residents can ask to know, delete, and
        correct personal information, and can use an authorized agent. We will not deny service
        because you exercised these rights. Contact {SITE.contactEmail}.
      </p>

      <h2>12. Changes</h2>
      <p>
        If we change this policy, we will update the effective date on this page. The URL stays
        public and does not redirect to the home page.
      </p>

      <h2>13. Contact</h2>
      <p>
        Privacy and deletion requests: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        Updated {SITE.updated}.
      </p>
    </LegalShell>
  );
}
