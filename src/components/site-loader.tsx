"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LoadingAnimation = dynamic(() => import("@/components/loading-animation"), {
  ssr: false,
});

export function SiteLoader() {
  const [phase, setPhase] = useState<"play" | "leave" | "gone">("play");

  useEffect(() => {
    if (phase === "gone") {
      document.body.style.overflow = "";
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setPhase("leave"), reduce ? 300 : 6000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "leave") return;
    const timer = window.setTimeout(() => setPhase("gone"), 450);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-white transition-opacity duration-500 ${phase === "leave" ? "pointer-events-none opacity-0" : "opacity-100"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <LoadingAnimation onDone={() => setPhase("leave")} />
    </div>
  );
}
