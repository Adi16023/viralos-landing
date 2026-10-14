"use client";

import { Lottie } from "lottie-react";
import loadingBar from "@/lottie/loading-bar.json";

export default function LoadingAnimation({ onDone }: { onDone: () => void }) {
  return (
    <div className="aspect-video w-[min(46vw,380px)]">
      <Lottie
        src={loadingBar}
        loop={false}
        autoplay
        className="size-full"
        subscriptions={{ complete: onDone }}
        aria-hidden
      />
    </div>
  );
}
