"use client";

import { Lottie } from "lottie-react";
import instagramButton from "@/lottie/instagram-button.json";

export function HeroInstagram() {
  return (
    <div className="mx-auto aspect-square w-full max-w-[260px] sm:max-w-[320px] lg:mr-0 lg:ml-auto lg:max-w-[380px]" aria-hidden="true">
      <Lottie src={instagramButton} loop autoplay className="size-full" />
    </div>
  );
}
