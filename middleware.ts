import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale-Middleware. Für Requests unter `/en/*` setzen wir einen Header
 * `x-rt-locale`, den `getLocale()` in `lib/i18n/index.ts` vor Cookie und
 * Accept-Language auswertet. So bleiben die Section-Komponenten unverändert
 * — sie lesen weiterhin über `getT()`, und ob die Seite auf DE oder EN
 * gerendert wird, entscheidet der Pfad.
 */
export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const pathname = req.nextUrl.pathname;
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  requestHeaders.set("x-rt-locale", isEn ? "en" : "de");
  requestHeaders.set("x-rt-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|opengraph-image|brand/|.*\\.).*)"],
};
