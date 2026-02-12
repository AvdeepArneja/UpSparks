import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upsparks Capital | Investing in Founders with Big Ideas",
  description: "Upsparks Capital invests in founders building world-class, technology-enabled startups. We accelerate ambitious entrepreneurs at the early stage.",
  keywords: ["venture capital", "startup funding", "early stage investment", "Indian startups", "founder investment"],
  authors: [{ name: "Upsparks Capital" }],
  openGraph: {
    title: "Upsparks Capital | Investing in Founders with Big Ideas",
    description: "Upsparks Capital invests in founders building world-class, technology-enabled startups. We accelerate ambitious entrepreneurs at the early stage.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upsparks Capital | Investing in Founders with Big Ideas",
    description: "Upsparks Capital invests in founders building world-class, technology-enabled startups.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
