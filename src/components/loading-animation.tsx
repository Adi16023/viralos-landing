"use client";

import { Lottie } from "lottie-react";
import loadingBar from "@/lottie/loading-bar.json";

export default function LoadingAnimation({ onDone }: { onDone: () => void }) {
  return (
    <Lottie
      src={loadingBar}
      loop={false}
      autoplay
      className="aspect-video w-[min(92vw,760px)]"
      subscriptions={{ complete: onDone }}
      aria-hidden
    />
  );
}
