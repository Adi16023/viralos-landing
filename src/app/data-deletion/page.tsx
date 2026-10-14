import type { Metadata } from "next";
import { DeletionForm } from "@/components/deletion-form";
import { LegalShell } from "@/components/legal-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to delete Viralos data, including Meta’s data deletion instructions and the signed deletion callback.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell kicker="Viralos" title="Data Deletion">
      <p>
        This is the public data-deletion instructions page for {SITE.name}. Anyone can open it
        without an account. Use it if you connected an Instagram professional account, or if you
        messaged a business that uses Viralos and want the copy of that conversation removed.
      </p>
      <p>
        Meta App Dashboard → App settings → Basic can point the “User data deletion” instructions
        field at this page. The callback URL, if you use a callback instead of instructions only, is
        the POST endpoint named below. Deleting data and removing the app are related, and they are
        not the same request.
      </p>

      <h2>1. Remove Viralos in Instagram or Facebook</h2>
      <ol>
        <li>Instagram: Settings and activity → Apps and websites → Active → Viralos → Remove.</li>
        <li>Facebook: Settings and privacy → Settings → Apps and websites → Viralos → Remove.</li>
        <li>When Meta asks what should happen to data the app received, choose delete.</li>
      </ol>
      <p>
        If you choose delete, Meta sends a signed request to our data-deletion callback. We check
        the signature with the app secret, record the request, and return a confirmation code and a
        status URL. Removing the app without asking for deletion is a deauthorize event: access
        stops, and stored data is not erased until a deletion request is made.
      </p>

      <h2>2. Ask on this page</h2>
      <p>
        Create a receipt below, then email it to{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. You can also email that
        address directly with your Instagram username and whether you are the business or the person
        who was messaged. We may ask you to confirm you control the email or the Instagram account
        before we delete, so we do not erase the wrong person.
      </p>
      <DeletionForm />

      <h2>3. What we delete</h2>
      <ul>
        <li>Instagram access tokens for the account.</li>
        <li>Profile fields we stored for that connection, such as the professional account ID and username.</li>
        <li>Message content, attachments we stored, comment text used for triggers, and automation state tied to that person or that customer workspace.</li>
        <li>The connected workspace itself, when the business customer asks for the whole account to be deleted.</li>
      </ul>
      <p>
        We finish that deletion within 30 days of a verified request. This marketing website does
        not store Instagram message bodies. The receipt still covers product data once a workspace
        database is connected, and the callback is the hook that deletion runs from.
      </p>
      <p>
        We keep a minimal receipt: the confirmation code, the time, and the status. We do not keep
        the message content in that receipt. Server logs roll off on the schedule in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>4. Status</h2>
      <p>
        Each request has a status page at <a href="/data-deletion/status">/data-deletion/status</a>{" "}
        with the code attached. The page shows when the request was received and the date by which
        deletion is due. It does not show message content or a Meta user ID.
      </p>

      <h2>5. Callbacks for the Meta dashboard</h2>
      <p>These paths are on this same site. Replace the host with the production domain.</p>
      <table>
        <thead>
          <tr>
            <th>Dashboard field</th>
            <th>URL path</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Privacy Policy URL</td>
            <td>/privacy</td>
          </tr>
          <tr>
            <td>Terms of Service URL</td>
            <td>/terms</td>
          </tr>
          <tr>
            <td>Data deletion instructions URL</td>
            <td>/data-deletion</td>
          </tr>
          <tr>
            <td>Data deletion callback URL</td>
            <td>/api/meta/data-deletion</td>
          </tr>
          <tr>
            <td>Deauthorize callback URL</td>
            <td>/api/meta/deauthorize</td>
          </tr>
        </tbody>
      </table>
      <p>
        The deletion callback accepts POST form data with a <code>signed_request</code> field. On
        success it responds with JSON: <code>url</code> and <code>confirmation_code</code>. Set{" "}
        <code>META_APP_SECRET</code> in the host environment before you submit the callback, or the
        endpoint will refuse unsigned calls. The deauthorize callback uses the same signature check
        and does not delete data by itself.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. Updated {SITE.updated}.
      </p>
    </LegalShell>
  );
}
