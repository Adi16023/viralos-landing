import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Viralos — Instagram DM automation",
  description:
    "Viralos automates Instagram DMs for professional accounts through the official API, after a person messages, comments, or replies to a story.",
};

export default function Page() {
  return <HomePage />;
}
