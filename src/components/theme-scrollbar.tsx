"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function ThemeScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ y: number; scroll: number } | null>(null);
  const [thumb, setThumb] = useState({ top: 0, height: 48, visible: false, value: 0 });

  const measure = useCallback(() => {
    const root = document.documentElement;
    const locked = getComputedStyle(document.body).overflowY === "hidden";
    const max = root.scrollHeight - window.innerHeight;
    const track = trackRef.current?.clientHeight ?? window.innerHeight;
    if (locked || max <= 1 || track <= 0) {
      setThumb((current) => (current.visible ? { ...current, visible: false } : current));
      return;
    }
    const height = Math.max(56, (window.innerHeight / root.scrollHeight) * track);
    const travel = Math.max(1, track - height);
    const top = (window.scrollY / max) * travel;
    const value = Math.round((window.scrollY / max) * 100);
    setThumb({ top, height, visible: true, value });
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    const bodyObserver = new MutationObserver(measure);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      bodyObserver.disconnect();
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const scrollToThumb = (top: number) => {
    const track = trackRef.current?.clientHeight ?? window.innerHeight;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const height = thumb.height;
    const travel = Math.max(1, track - height);
    const next = Math.min(travel, Math.max(0, top));
    window.scrollTo({ top: (next / travel) * max, behavior: "auto" });
  };

  return (
    <div
      ref={trackRef}
      className={`fixed top-0 right-0 z-[60] h-dvh w-2 bg-white ${thumb.visible ? "" : "pointer-events-none opacity-0"}`}
      role="scrollbar"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={thumb.value}
      aria-label="Page scroll"
      tabIndex={thumb.visible ? 0 : -1}
      onPointerDown={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const y = event.clientY - rect.top;
        const onThumb = y >= thumb.top && y <= thumb.top + thumb.height;
        if (!onThumb) scrollToThumb(y - thumb.height / 2);
        drag.current = { y: event.clientY, scroll: window.scrollY };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!drag.current) return;
        const track = trackRef.current?.clientHeight ?? window.innerHeight;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const travel = Math.max(1, track - thumb.height);
        const dy = event.clientY - drag.current.y;
        window.scrollTo({ top: drag.current.scroll + (dy / travel) * max, behavior: "auto" });
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onKeyDown={(event) => {
        const step = window.innerHeight * 0.15;
        const page = window.innerHeight * 0.85;
        const actions: Record<string, number | "start" | "end"> = {
          ArrowDown: step,
          ArrowUp: -step,
          PageDown: page,
          PageUp: -page,
          Home: "start",
          End: "end",
        };
        const action = actions[event.key];
        if (action === undefined) return;
        event.preventDefault();
        if (action === "start") window.scrollTo({ top: 0 });
        else if (action === "end") window.scrollTo({ top: document.documentElement.scrollHeight });
        else window.scrollBy({ top: action });
      }}
    >
      <div
        className="absolute inset-x-px rounded-full bg-[#1585AC] hover:bg-[#F6F648]"
        style={{ top: thumb.top, height: thumb.height }}
      />
    </div>
  );
}
