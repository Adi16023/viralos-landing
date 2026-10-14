import { createHmac, randomBytes, timingSafeEqual, createHash } from "node:crypto";

export type SignedMetaPayload = {
  algorithm?: string;
  user_id?: string;
  issued_at?: number;
};

export type DeletionReceipt = {
  code: string;
  receivedAt: string;
  dueAt: string;
  source: "meta" | "website";
  status: "received";
};

function signingSecret() {
  return (
    process.env.DELETION_SIGNING_SECRET ||
    process.env.META_APP_SECRET ||
    "viralos-landing-receipt"
  );
}

function base64UrlDecode(input: string) {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  return Buffer.from(padded + pad, "base64");
}

function base64UrlEncode(input: Buffer | string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export function parseSignedRequest(signedRequest: string, secret: string): SignedMetaPayload {
  const [encodedSig, payload] = signedRequest.split(".", 2);
  if (!encodedSig || !payload) {
    throw new Error("Malformed signed_request");
  }

  const signature = base64UrlDecode(encodedSig);
  const expected = createHmac("sha256", secret).update(payload).digest();
  if (signature.length !== expected.length || !timingSafeEqual(signature, expected)) {
    throw new Error("Invalid signed_request signature");
  }

  const data = JSON.parse(base64UrlDecode(payload).toString("utf8")) as SignedMetaPayload;
  if (data.algorithm && data.algorithm.toUpperCase() !== "HMAC-SHA256") {
    throw new Error("Unexpected signed_request algorithm");
  }
  return data;
}

function signBody(body: string) {
  const secret = signingSecret();
  if (!secret) throw new Error("Deletion signing secret is not configured");
  const sig = createHmac("sha256", secret).update(body).digest();
  return `${body}.${base64UrlEncode(sig)}`;
}

export function issueDeletionReceipt(source: DeletionReceipt["source"]): DeletionReceipt {
  const received = new Date();
  const due = new Date(received.getTime() + 30 * 24 * 60 * 60 * 1000);
  const body = base64UrlEncode(
    JSON.stringify({
      v: 1,
      src: source,
      t: received.toISOString(),
      n: randomBytes(9).toString("hex"),
    }),
  );
  return {
    code: signBody(body),
    receivedAt: received.toISOString(),
    dueAt: due.toISOString(),
    source,
    status: "received",
  };
}

export function readDeletionReceipt(code: string): DeletionReceipt | null {
  const secret = signingSecret();
  if (!secret || !code.includes(".")) return null;
  const splitAt = code.lastIndexOf(".");
  const body = code.slice(0, splitAt);
  const sig = code.slice(splitAt + 1);
  const expected = createHmac("sha256", secret).update(body).digest();
  const actual = base64UrlDecode(sig);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;

  try {
    const parsed = JSON.parse(base64UrlDecode(body).toString("utf8")) as {
      v?: number;
      src?: string;
      t?: string;
    };
    if (parsed.v !== 1 || (parsed.src !== "meta" && parsed.src !== "website") || !parsed.t) {
      return null;
    }
    const received = new Date(parsed.t);
    if (Number.isNaN(received.getTime())) return null;
    const due = new Date(received.getTime() + 30 * 24 * 60 * 60 * 1000);
    return {
      code,
      receivedAt: received.toISOString(),
      dueAt: due.toISOString(),
      source: parsed.src,
      status: "received",
    };
  } catch {
    return null;
  }
}

export function hashMetaUserId(userId: string) {
  return createHash("sha256").update(userId).digest("hex").slice(0, 16);
}

/**
 * This marketing site does not store Instagram messages.
 * Connect the product database here so a verified Meta callback deletes
 * tokens, conversations, comments, and profile fields for that user id.
 */
export function acknowledgeMetaDeletion(metaUserId: string) {
  return {
    storedOnThisSite: false,
    userRef: hashMetaUserId(metaUserId),
  };
}
