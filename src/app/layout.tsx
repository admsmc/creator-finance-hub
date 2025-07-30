import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Creator Finance Hub - Financial Advice for Content Creators",
  description: "Expert financial guidance for YouTubers, streamers, and digital creators. Learn about taxes, business banking, retirement planning, and scaling your creator business.",
  keywords: "creator finance, youtube taxes, content creator business, freelancer finance, creator economy",
  authors: [{ name: "Creator Finance Hub" }],
  creator: "Creator Finance Hub",
  publisher: "Creator Finance Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Creator Finance Hub - Financial Advice for Content Creators",
    description: "Expert financial guidance for YouTubers, streamers, and digital creators. Learn about taxes, business banking, retirement planning, and scaling your creator business.",
    type: "website",
    locale: "en_US",
    siteName: "Creator Finance Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Finance Hub - Financial Advice for Content Creators",
    description: "Expert financial guidance for YouTubers, streamers, and digital creators.",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
