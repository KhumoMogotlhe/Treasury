import { NextRequest, NextResponse } from "next/server";

// Lightweight cookie-based route guard — no Auth.js imports.
// JWT signature validation happens in auth() inside server components and API routes.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionToken =
    request.cookies.get("__Secure-authjs.session-token")?.value ??
    request.cookies.get("authjs.session-token")?.value;

  const isLoggedIn = !!sessionToken;

  const isProtected =
    pathname.startsWith("/dashboard") || pathname.startsWith("/admin");
  const isAuthRoute =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
