import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "ThetaMind - A Global Tribe of Awakening",
  description: "Join the movement of conscious humans gathering in every city to remember who they are. Start or join a ThetaMind Circle and be part of humanity's collective awakening.",
  keywords: [
    "consciousness",
    "awakening",
    "meditation",
    "spiritual circles",
    "mindfulness",
    "human connection",
    "collective consciousness",
    "spiritual community",
    "theta mind",
    "global awakening"
  ],
  authors: [{ name: "ThetaMind" }],
  creator: "ThetaMind",
  openGraph: {
    title: "ThetaMind - A Global Tribe of Awakening",
    description: "Join the movement of conscious humans gathering in every city to remember who they are.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThetaMind - A Global Tribe of Awakening",
    description: "Join the movement of conscious humans gathering in every city to remember who they are.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
