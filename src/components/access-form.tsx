"use client";

import { useState } from "react";
import { useMessages } from "next-intl";
import { StickerButton } from "@/components/sticker-button";
import { SITE } from "@/lib/site";

export function AccessForm() {
  const copy = useMessages().common;
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  return (
    <form
      className="mt-8 flex flex-col gap-3 md:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        const body = `Work email: ${email}\nInstagram professional account: ${account}\n\nPlease send early access details.`;
        window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Viralos early access")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <label className="sr-only" htmlFor="access-email">
        {copy.workEmail}
      </label>
      <input
        id="access-email"
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={copy.workEmail}
        className="h-12 flex-1 rounded-2xl border-2 border-black bg-white px-4 text-[#000000] shadow-[3px_3px_0_0_#000] outline-none placeholder:text-black/40"
      />
      <label className="sr-only" htmlFor="access-account">
        {copy.username}
      </label>
      <input
        id="access-account"
        value={account}
        onChange={(event) => setAccount(event.target.value)}
        placeholder="@account"
        className="h-12 w-full rounded-2xl border-2 border-black bg-white px-4 text-[#000000] shadow-[3px_3px_0_0_#000] outline-none placeholder:text-black/40 md:w-44"
      />
      <StickerButton type="submit" variant="yellow" className="w-full md:w-auto">
        {copy.requestAccess}
      </StickerButton>
    </form>
  );
}
