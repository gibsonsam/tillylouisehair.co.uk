import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
    "mobile hairdresser Saddleworth",
    "mobile hairdresser Uppermill",
    "mobile hairdresser Oldham",
    "mobile hair appointments Saddleworth",
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
        {/* Google Tag Manager — placed in <head> as early as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${siteConfig.gtmContainerId}');`,
          }}
        />
      </head>
      <body className="min-h-screen bg-cream text-brown antialiased">
        {/* Google Tag Manager (noscript) — immediately after opening <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmContainerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
    </html>
  );
}
