"use client";

import { Lottie } from "lottie-react";
import instagramButton from "@/lottie/instagram-button.json";

export function HeroInstagram() {
  return (
    <div className="mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:mx-0 lg:max-w-[380px]" aria-hidden="true">
      <Lottie src={instagramButton} loop autoplay className="aspect-square w-full" />
    </div>
  );
}
