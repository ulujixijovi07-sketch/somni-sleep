import React from "react";
import { Providers } from "./providers";
import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1A2E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://somnisleep.com"),
  title: "SOMNI | Science-Backed Sleep Tools",
  description:
    "Four sensory pathways to deep sleep. Backed by neuroscience. Designed for humans who have tried everything else.",
  keywords: ["sleep", "insomnia", "sleep mask", "white noise", "aromatherapy", "sleep science", "SOMNI"],
  openGraph: {
    title: "SOMNI | Science-Backed Sleep Tools",
    description: "Four sensory pathways to deep sleep. Backed by neuroscience.",
    type: "website",
  },
  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
      de: "/de",
      es: "/es",
      it: "/it",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
        {/* Google Analytics 4 */}
        {gaId && (
          <React.Fragment>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            ></script>
          </React.Fragment>
        )}
        {/* Meta Pixel */}
        {pixelId && (
          <React.Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`,
              }}
          ></script>
          </React.Fragment>
        )}
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
