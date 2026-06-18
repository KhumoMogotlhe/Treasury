import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimensity — Business Treasury Management",
  description:
    "Accept stablecoins. Settle in any currency. Built for African businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
