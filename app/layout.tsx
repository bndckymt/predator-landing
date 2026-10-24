import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Predator Helios | Unleash the Beast",
  description: "A fictional promotional concept page for a Predator Helios gaming laptop. Performance, display and cooling, told in motion.",
  openGraph: { title: "Predator Helios | Unleash the Beast", description: "Concept campaign page for a premium gaming laptop.", type: "website" },
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%2305070a'/><path d='M8 24 16 7l8 17-8-5z' fill='%23b9ff2e'/></svg>" },
};
export const viewport: Viewport = { themeColor: "#05070a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
