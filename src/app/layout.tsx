import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SOMNI | Science-Backed Sleep Tools",
  description:
    "Four sensory pathways to deep sleep. Backed by neuroscience. Designed for humans who have tried everything else.",
  keywords: ["sleep", "insomnia", "sleep mask", "white noise", "aromatherapy", "sleep science", "SOMNI"],
  openGraph: {
    title: "SOMNI | Science-Backed Sleep Tools",
    description: "Four sensory pathways to deep sleep. Backed by neuroscience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
