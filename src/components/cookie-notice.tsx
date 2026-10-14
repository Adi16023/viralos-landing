"use client";

import { useEffect, useState } from "react";
import StarBorder from "@/components/StarBorder";

const KEY = "viralos-cookie-notice";

export function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.localStorage.getItem(KEY) !== "dismissed");
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#141218]/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[#d9d2c8]">
          This site does not set analytics or advertising cookies, and it does not load a Meta Pixel.{" "}
          <a className="text-[#ffb089] underline" href="/cookies">
            Cookie Policy
          </a>
        </p>
        <StarBorder
          type="button"
          color="#ff5c39"
          theme="dark"
          thickness={2}
          onClick={() => {
            window.localStorage.setItem(KEY, "dismissed");
            setOpen(false);
          }}
        >
          Continue
        </StarBorder>
      </div>
    </div>
  );
}
