import { NextResponse } from "next/server";
import { hashMetaUserId, parseSignedRequest } from "@/lib/meta-deletion";

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

    // Removing the app stops access. It is not the same request as deletion.
    hashMetaUserId(payload.user_id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid signed_request" }, { status: 400 });
  }
}
