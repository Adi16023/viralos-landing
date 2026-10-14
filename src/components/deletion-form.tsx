"use client";

import { useState } from "react";
import { StickerButton } from "@/components/sticker-button";
import { SITE } from "@/lib/site";

type Receipt = {
  confirmation_code: string;
  url: string;
  due_at: string;
};

export function DeletionForm() {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [role, setRole] = useState("instagram-user");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setPending(true);
        setError("");
        try {
          const response = await fetch("/api/data-deletion", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, handle, role }),
          });
          const data = (await response.json()) as Receipt & { error?: string };
          if (!response.ok) {
            setError(data.error || "Could not create a confirmation code.");
            setReceipt(null);
            return;
          }
          setReceipt(data);
        } catch {
          setError("Could not reach the deletion endpoint. Email the privacy contact instead.");
        } finally {
          setPending(false);
        }
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm text-[#1a1a1a]">
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 h-11 w-full rounded-2xl border-2 border-black bg-white px-3 text-[#000000] shadow-[3px_3px_0_0_#000] outline-none placeholder:text-black/40"
          />
        </label>
        <label className="block text-sm text-[#1a1a1a]">
          Instagram username, if you have it
          <input
            value={handle}
            onChange={(event) => setHandle(event.target.value)}
            className="mt-1 h-11 w-full rounded-2xl border-2 border-black bg-white px-3 text-[#000000] shadow-[3px_3px_0_0_#000] outline-none placeholder:text-black/40"
          />
        </label>
      </div>
      <fieldset className="space-y-2 text-sm text-[#1a1a1a]">
        <legend>Who is asking</legend>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            checked={role === "instagram-user"}
            onChange={() => setRole("instagram-user")}
          />
          I messaged a business that uses Viralos
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            checked={role === "business"}
            onChange={() => setRole("business")}
          />
          I connected my Instagram professional account
        </label>
      </fieldset>
      <StickerButton type="submit" variant="yellow" disabled={pending}>
        {pending ? "Creating receipt…" : "Create deletion receipt"}
      </StickerButton>
      {error ? <p className="text-sm text-[#1585AC]">{error}</p> : null}
      {receipt ? (
        <div className="rounded-2xl border border-black/15 p-4 text-sm text-[#1a1a1a]">
          <p>
            Confirmation code: <strong className="break-all text-[#000000]">{receipt.confirmation_code}</strong>
          </p>
          <p className="mt-2">
            Status page:{" "}
            <a className="text-[#1585AC] underline" href={receipt.url}>
              {receipt.url}
            </a>
          </p>
          <p className="mt-2">
            Due by {new Date(receipt.due_at).toLocaleDateString("en-US", { dateStyle: "long", timeZone: "UTC" })}{" "}
            (UTC). Email the code to {SITE.contactEmail} so a person can match your request.
          </p>
          <a
            className="mt-3 inline-block text-[#1585AC] underline"
            href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Viralos data deletion")}&body=${encodeURIComponent(`Confirmation code: ${receipt.confirmation_code}\nRole: ${role}\nInstagram: ${handle}\nEmail: ${email}`)}`}
          >
            Email this receipt
          </a>
        </div>
      ) : null}
    </form>
  );
}
