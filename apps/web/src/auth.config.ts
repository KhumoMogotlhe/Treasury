import type { NextAuthConfig } from "next-auth";

// Base config shared by auth.ts — no heavy imports.
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  providers: [],
};
