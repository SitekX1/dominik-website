import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";

export const metadata: Metadata = {
  title: "Dominik Website",
  description: "Offizielle Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
