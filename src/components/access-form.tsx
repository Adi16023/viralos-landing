"use client";

import { useState } from "react";
import StarBorder from "@/components/StarBorder";
import { SITE } from "@/lib/site";

export function AccessForm() {
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  return (
    <form
      className="mt-8 flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        const body = `Work email: ${email}\nInstagram professional account: ${account}\n\nPlease send early access details.`;
        window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Viralos early access")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <label className="sr-only" htmlFor="access-email">
        Work email
      </label>
      <input
        id="access-email"
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Work email"
        className="h-12 flex-1 rounded-full border border-white/15 bg-black/30 px-4 text-[#f4efe8] outline-none"
      />
      <label className="sr-only" htmlFor="access-account">
        Instagram username
      </label>
      <input
        id="access-account"
        value={account}
        onChange={(event) => setAccount(event.target.value)}
        placeholder="@account"
        className="h-12 w-full rounded-full border border-white/15 bg-black/30 px-4 text-[#f4efe8] outline-none sm:w-40"
      />
      <StarBorder type="submit" color="#ff5c39" theme="dark" thickness={2}>
        Request access
      </StarBorder>
    </form>
  );
}
