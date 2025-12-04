import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("garantUser");

  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/", "/invoices", "/profile"];
  const isProtectedPath = protectedRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/invoices/:path*", "/profile"],
};
