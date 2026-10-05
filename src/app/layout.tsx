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
  title: "Arun A - Java Full-Stack Developer",
  description:
    "Full-stack developer building enterprise applications with Java, Spring Boot, React.js and PostgreSQL. Explore my projects, experience and career journey.",
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
