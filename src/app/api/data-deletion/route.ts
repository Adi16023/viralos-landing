import { NextResponse } from "next/server";
import { issueDeletionReceipt } from "@/lib/meta-deletion";
import { siteOrigin } from "@/lib/site";

export async function POST(request: Request) {
  let body: { email?: string; role?: string; handle?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Expected JSON" }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  const role = body.role === "business" ? "business" : "instagram-user";
  const handle = (body.handle ?? "").trim().slice(0, 80);

  try {
    const receipt = issueDeletionReceipt("website");
    const origin = siteOrigin(request);
    const statusUrl = `${origin}/data-deletion/status?code=${encodeURIComponent(receipt.code)}`;
    return NextResponse.json({
      confirmation_code: receipt.code,
      url: statusUrl,
      received_at: receipt.receivedAt,
      due_at: receipt.dueAt,
      role,
      handle,
      email,
    });
  } catch {
    return NextResponse.json(
      { error: "Deletion receipts are not configured yet. Email the privacy contact on this page." },
      { status: 503 },
    );
  }
}
