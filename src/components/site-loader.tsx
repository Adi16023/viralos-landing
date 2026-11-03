"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LoadingAnimation = dynamic(() => import("@/components/loading-animation"), {
  ssr: false,
});

const sessionKey = "viralos:intro-seen";
let seenInDocument = false;

export function SiteLoader() {
  const [phase, setPhase] = useState<"checking" | "play" | "leave" | "gone">("checking");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      let seen = seenInDocument;
      try {
        seen ||= window.sessionStorage.getItem(sessionKey) === "true";
        window.sessionStorage.setItem(sessionKey, "true");
      } catch (error) {
        console.warn("Viralos could not persist the intro state for this tab session.", error);
      }
      seenInDocument = true;
      setPhase(seen ? "gone" : "play");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (phase !== "play" && phase !== "leave") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "play") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setPhase((current) => (current === "play" ? "leave" : current));
    }, reduce ? 300 : 6000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leave") return;
    const timer = window.setTimeout(() => setPhase("gone"), 450);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "checking" || phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-white transition-opacity duration-500 ${phase === "leave" ? "pointer-events-none opacity-0" : "opacity-100"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <LoadingAnimation onDone={() => setPhase((current) => (current === "play" ? "leave" : current))} />
    </div>
  );
}
