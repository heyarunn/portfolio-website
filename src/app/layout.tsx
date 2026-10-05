import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Jost — a clean geometric sans used for both body and headings.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NineOrbit — 360° Digital Marketing Agency",
  description:
    "Websites, SEO, paid advertising, social media and ecommerce marketing — all under one roof. NineOrbit runs your digital presence as one connected system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
