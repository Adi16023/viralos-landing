export const SITE = {
  name: "Viralos",
  description:
    "Viralos is an Instagram DM automation platform for professional accounts. It replies through the official Instagram API, only after a person messages you, comments, or replies to a story.",
  contactEmail: "adithya.challa1@gmail.com",
  updated: "October 14, 2026",
} as const;

export function siteOrigin(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  if (host) return `${proto}://${host}`;
  return "http://localhost:3000";
}
