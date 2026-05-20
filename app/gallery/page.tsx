import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Tilly Louise Hair's portfolio of cuts, colour, balayage and occasion styling at Avanti Hair, Uppermill, Saddleworth.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream via-surface to-surface-dark hero-top pb-16">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl text-brown sm:text-5xl">A closer look at our work</h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Explore a curated collection of colour, cuts and occasion styling.
          </p>
        </div>
      </section>

      <GalleryGrid />
    </>
  );
}

