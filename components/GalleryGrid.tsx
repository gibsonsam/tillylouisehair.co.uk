"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = ["All", "Cuts", "Colour", "Treatments", "Occasions"] as const;
type Category = (typeof FILTERS)[number];

type GalleryItem = {
  label: string;
  category: Exclude<Category, "All">;
  src?: string;
  gradient?: string;
};

const galleryItems: GalleryItem[] = [
  { label: "Balayage Blend",     category: "Colour",     src: "/images/gallery-01.jpg" },
  { label: "Glossy Brunette",    category: "Colour",     src: "/images/gallery-02.jpg" },
  { label: "Soft Waves",         category: "Treatments", src: "/images/gallery-03.jpg" },
  { label: "Golden Highlights",  category: "Colour",     src: "/images/gallery-04.jpg" },
  { label: "Precision Bob",      category: "Cuts",       src: "/images/gallery-05.jpg" },
  { label: "Wedding Styling",    category: "Occasions",  src: "/images/gallery-06.jpg" },
  { label: "Lived-in Blonde",    category: "Colour",     src: "/images/gallery-07.jpg" },
  { label: "Silk Blow Dry",      category: "Treatments", src: "/images/gallery-08.jpg" },
  { label: "Colour Refresh",     category: "Colour",     src: "/images/gallery-09.jpg" },
  { label: "Curly Blow Dry",      category: "Treatments", src: "/images/gallery-10.jpg" },
  { label: "Elegant Updo",       category: "Occasions",  src: "/images/gallery-11.jpg" },
  { label: "Dimensional Colour", category: "Colour",     src: "/images/gallery-12.jpg" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");

  const visible =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div role="group" aria-label="Filter gallery" className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                active === filter
                  ? "bg-gold text-brown"
                  : "border border-surface-dark bg-transparent text-brown hover:border-gold hover:text-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((item) => (
            <div
              key={item.label}
              className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-surface-dark"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={`${item.label} hairstyle by Tilly Louise Hair`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} aria-hidden="true" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/35 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-full bg-cream/85 px-4 py-2 text-sm font-medium text-brown shadow-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
