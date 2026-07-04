import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LELO – Dominik Lenz | Handwerker",
  description:
    "Professioneller Hausmeisterservice, Fußbodenverlegung, Netzwerkverlegung, Silikonarbeiten und 3D-Modelle im Raum Donau-Ries. 24/7 erreichbar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
