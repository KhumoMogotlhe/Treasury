import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Only bundles the Edge-safe authConfig — no Prisma, no bcryptjs.
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
