import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunwareenergy.com'),
  title: "Sunware Energy Limited | Solar Installation Kenya",
  description:
    "Sunware Energy Limited is an EPRA licensed solar company in Kenya offering residential solar, commercial solar, solar water pumping, energy audits and maintenance services across Kenya.",
  keywords: [
    "solar installation Kenya",
    "solar company Nairobi",
    "solar panels Kenya",
    "solar water pump Kenya",
    "off grid solar Kenya",
    "hybrid solar system Kenya",
    "EPRA licensed solar installer",
    "solar energy Kenya",
  ],
  authors: [{ name: "Sunware Energy Limited" }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/Sunware Logo.png',
    apple: '/Sunware Logo.png',
  },
  openGraph: {
    title: "Sunware Energy Limited | Solar Installation Kenya",
    description:
      "Sunware Energy Limited is an EPRA licensed solar company in Kenya offering residential solar, commercial solar, solar water pumping, energy audits and maintenance services across Kenya.",
    url: 'https://sunwareenergy.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sunware Energy Limited | Solar Installation Kenya",
    description:
      "Sunware Energy Limited is an EPRA licensed solar company in Kenya offering residential solar, commercial solar, solar water pumping, energy audits and maintenance services across Kenya.",
  },
  verification: {
    google: 'aec6b88dbc9f9b38',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://sunwareenergy.com" />
        <meta name="author" content="Sunware Energy Limited" />
        <meta name="robots" content="index, follow" />
        <Script id="ld-json" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sunware Energy Limited",
            "description": "EPRA licensed solar installation company in Kenya",
            "url": "https://sunwareenergy.com",
            "telephone": "+254724659062",
            "email": "info@sunwareenergy.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Samtech Plaza, Utawala, Eastern Bypass",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.2921,
              "longitude": 36.8219
            },
            "openingHours": ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00"],
            "priceRange": "KES",
            "areaServed": "Kenya"
          })}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
