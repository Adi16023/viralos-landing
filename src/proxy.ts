import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const preferred = request.cookies.get("VIRALOS_LOCALE")?.value;
  const locale = preferred && isLocale(preferred) ? preferred : "en";
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/pricing"],
};
