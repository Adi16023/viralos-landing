import { NextResponse } from "next/server";
import { acknowledgeMetaDeletion, issueDeletionReceipt, parseSignedRequest } from "@/lib/meta-deletion";
import { siteOrigin } from "@/lib/site";

export async function GET() {
  return NextResponse.json({
    endpoint: "Viralos Meta data-deletion callback",
    method: "POST",
    body: "application/x-www-form-urlencoded with signed_request",
    instructions: "/data-deletion",
  });
}

export async function POST(request: Request) {
  const secret = process.env.META_APP_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "META_APP_SECRET is not configured" },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const signedRequest = form.get("signed_request");
  if (typeof signedRequest !== "string" || signedRequest.length === 0) {
    return NextResponse.json({ error: "Missing signed_request" }, { status: 400 });
  }

  try {
    const payload = parseSignedRequest(signedRequest, secret);
    if (!payload.user_id) {
      return NextResponse.json({ error: "signed_request has no user_id" }, { status: 400 });
    }

    acknowledgeMetaDeletion(payload.user_id);
    const receipt = issueDeletionReceipt("meta");
    const origin = siteOrigin(request);
    const url = `${origin}/data-deletion/status?code=${encodeURIComponent(receipt.code)}`;

    return NextResponse.json({
      url,
      confirmation_code: receipt.code,
    });
  } catch {
    return NextResponse.json({ error: "Invalid signed_request" }, { status: 400 });
  }
}
