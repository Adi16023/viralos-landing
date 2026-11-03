import type { Metadata } from "next";
import { Suspense } from "react";
import { LegalShell } from "@/components/legal-shell";
import { readDeletionReceipt } from "@/lib/meta-deletion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deletion status",
  description: "Status of a Viralos data deletion request.",
  robots: { index: false, follow: true },
};

function formatUtc(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  });
}

export default function DeletionStatusPage(props: PageProps<"/data-deletion/status">) {
  return (
    <LegalShell kicker="Viralos" title="Deletion status">
      <Suspense fallback={<p>Checking this confirmation code.</p>}>
        <DeletionStatus searchParams={props.searchParams} />
      </Suspense>
    </LegalShell>
  );
}

async function DeletionStatus({
  searchParams,
}: {
  searchParams: PageProps<"/data-deletion/status">["searchParams"];
}) {
  const query = await searchParams;
  const raw = query.code;
  const code = Array.isArray(raw) ? raw[0] : raw;
  const receipt = code ? readDeletionReceipt(code) : null;

  return (
    <>
      {!code ? (
        <p>
          Add the confirmation code from your receipt, or start from the{" "}
          <a href="/data-deletion">Data Deletion</a> page.
        </p>
      ) : null}
      {code && !receipt ? (
        <p>
          This code is not a Viralos deletion receipt. Check the link, or email{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> with the code you were
          given.
        </p>
      ) : null}
      {receipt ? (
        <>
          <p>
            Status: <strong>Received</strong>. Source:{" "}
            {receipt.source === "meta" ? "Meta data-deletion callback" : "request on this website"}.
          </p>
          <p>Received: {formatUtc(receipt.receivedAt)} UTC.</p>
          <p>
            Instagram data covered by this request is deleted by {formatUtc(receipt.dueAt)} UTC.
            This page does not display message content or a Meta user ID.
          </p>
          <p>
            Confirmation code: <code className="break-all">{receipt.code}</code>
          </p>
        </>
      ) : null}
      <p>
        Instructions: <a href="/data-deletion">Data Deletion</a>. Privacy:{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </>
  );
}
