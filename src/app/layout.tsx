import type { Metadata, Viewport } from "next";
import { Lora, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { publicPath, siteUrl } from "@/content/site";

import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const shareDescription =
  "Three days of quantum computing challenges, talks and hacking at EPFL in Lausanne, Switzerland, March 12–14, 2027.";

const ogImage = {
  url: publicPath("/og-image.png"),
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "EPFL Quantum Hackathon (QPFL) logo",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "EPFL Quantum Hackathon 2027 | Lausanne, Switzerland",
  description:
    "Join the EPFL Quantum Hackathon, a three-day quantum computing hackathon at EPFL in Lausanne, Switzerland, on March 12–14, 2027. No prior quantum experience required.",
  keywords: [
    "EPFL",
    "Quantum Hackathon",
    "Quantum Computing",
    "Lausanne",
    "Programming",
    "Hackathon",
    "Quantum Science",
    "Quantum Engineering",
    "Quantum Challenges",
    "Innovation",
    "Technology",
    "Collaboration",
    "Networking",
    "Prizes",
  ],
  icons: {
    icon: [
      { url: publicPath("/favicon.ico"), sizes: "32x32" },
      { url: publicPath("/favicon-32x32.png"), type: "image/png", sizes: "32x32" },
      { url: publicPath("/favicon-16x16.png"), type: "image/png", sizes: "16x16" },
    ],
    apple: { url: publicPath("/apple-touch-icon.png"), sizes: "180x180" },
  },
  manifest: publicPath("/site.webmanifest"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "EPFL Quantum Hackathon",
    locale: "en_US",
    title: "EPFL Quantum Hackathon 2027",
    description: shareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPFL Quantum Hackathon 2027",
    description: shareDescription,
    images: [ogImage],
  },
  verification: { google: "2pYWuJ-tNP5xi4Yy2YxbjZFLzrxeaA31fk44xfrjtmo" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${spaceGrotesk.variable} bg-white font-main leading-[1.6] text-taupe`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
