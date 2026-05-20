import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tilly Louise Hair | Hairdresser in Uppermill, Saddleworth",
    template: "%s | Tilly Louise Hair",
  },
  description:
    "Premium hairdressing in Uppermill, Saddleworth. Expert cuts, colour, balayage, highlights and occasion styling from Tilly Louise Hair at Avanti Hair.",
  keywords: [
    "hairdresser Saddleworth",
    "hair salon Saddleworth",
    "hairdresser Uppermill",
    "hair salon Oldham",
    "balayage Saddleworth",
    "balayage Uppermill",
    "highlights Saddleworth",
    "highlights Oldham",
    "bridal hair Saddleworth",
    "bridal hair Uppermill",
    "Tilly Louise Hair",
    "Avanti Hair",
    "colour correction Saddleworth",
    "colour correction Oldham",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Tilly Louise Hair | Hairdresser in Uppermill, Saddleworth",
    description:
      "Premium hairdressing in Uppermill, Saddleworth. Expert cuts, colour, balayage, highlights and occasion styling from Tilly Louise Hair at Avanti Hair.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contact, geo, hours, name, url, social } = siteConfig;

  /** Groups days with the same opens/closes into OpeningHoursSpecification entries */
  const openingHoursSpecification = Object.entries(
    hours.reduce<Record<string, string[]>>((acc, { day, opens, closes }) => {
      if (opens && closes) (acc[`${opens}|${closes}`] ??= []).push(day);
      return acc;
    }, {}),
  ).map(([key, days]) => {
    const [opens, closes] = key.split("|");
    return { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name,
    url,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postcode,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification,
    sameAs: [social.instagram, social.facebook],
    priceRange: "££",
    areaServed: ["Uppermill", "Saddleworth", "Oldham"],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      style={{ "--banner-h": siteConfig.announcement.visible ? "2.5rem" : "0rem" } as React.CSSProperties}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-brown antialiased">
        <a
          href="#main-content"
          className="sr-only absolute left-4 z-[60] rounded-full bg-gold px-5 py-3 text-sm font-semibold text-brown shadow-lg focus:not-sr-only"
          style={{ top: "calc(var(--banner-h, 0rem) + 1rem)" } as React.CSSProperties}
        >
          Skip to main content
        </a>
        <AnnouncementBanner />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      {/* Google Analytics — replace G-XXXXXXXXXX in lib/site.ts with your real Measurement ID */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4MeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga4MeasurementId}');
        `}
      </Script>
    </html>
  );
}
