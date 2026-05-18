/**
 * site.ts — single source of truth for all business data.
 *
 * Update this file whenever contact details, hours, or social links change.
 * Everything on the site reads from here.
 */

export const siteConfig = {
  /** Business name — used in the nav, footer, and page titles. */
  name: "Tilly Louise Hair",

  /** Canonical site URL — used for metadata, sitemap and structured data. */
  url: "https://tillylouisehair.co.uk",

  /**
   * Google Analytics 4 Measurement ID.
   * Replace the placeholder with your real ID from Google Analytics
   * (Admin → Data Streams → your stream → Measurement ID, format: G-XXXXXXXXXX).
   */
  ga4MeasurementId: "G-WTEHZF3G51",

  /** Short tagline shown in the footer. */
  tagline:
    "Premium hairdressing with a warm, boutique touch. Elegant cuts, bespoke colour and styling for every occasion.",

  contact: {
    /** Displayed phone number. */
    phone: "07481 400054",
    /** tel: href — digits only, no spaces. */
    phoneTel: "07481400054",
    /** Email address — used for mailto: links. */
    email: "bookings@tillylouisehair.co.uk",
    address: {
      /** Single-line address for display in the UI. */
      display: "Avanti Hair, 36 High Street, Uppermill, Oldham, OL3 6HR",
      /** Venue / building name. */
      venueName: "Avanti Hair",
      /** Street address. */
      street: "36 High Street",
      /** Town / city. */
      locality: "Uppermill",
      /** County / region. */
      region: "Oldham",
      /** Postcode. */
      postcode: "OL3 6HR",
      /** ISO 3166-1 alpha-2 country code. */
      country: "GB",
    },
  },

  /** Geo-coordinates — used in structured data (JSON-LD). */
  geo: {
    latitude: 53.5469,
    longitude: -2.0095,
  },

  /** Opening hours — shown in the contact section, contact page, and used in structured data.
   *  Times are 24-hour "HH:MM" strings. Use null for closed days. */
  hours: [
    { day: "Monday",    opens: null,    closes: null    },
    { day: "Tuesday",   opens: "09:30", closes: "16:00" },
    { day: "Wednesday", opens: "09:30", closes: "16:00" },
    { day: "Thursday",  opens: "09:30", closes: "16:00" },
    { day: "Friday",    opens: "09:30", closes: "21:00" },
    { day: "Saturday",  opens: "09:00", closes: "16:00" },
    { day: "Sunday",    opens: null,    closes: null    },
  ],

  social: {
    /** Set to null to hide the icon. */
    instagram: "https://instagram.com/tillylouisehair",
    facebook: "https://facebook.com/tilly.louise.756",
  },
} as const;
