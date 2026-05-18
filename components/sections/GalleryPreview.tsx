"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type GalleryItem = {
  label: string;
  src?: string;
  gradient?: string;
};

const galleryItems: GalleryItem[] = [
  { label: "Balayage",     src: "/images/gallery-01.jpg" },
  { label: "Gloss Finish", src: "/images/gallery-02.jpg" },
  { label: "Soft Waves",   src: "/images/gallery-03.jpg" },
  { label: "Highlights",   src: "/images/gallery-04.jpg" },
  { label: "Bob Cut",      src: "/images/gallery-05.jpg" },
  { label: "Bridal Style", src: "/images/gallery-06.jpg" },
];

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function GalleryPreview() {
  return (
    <section className="section-padding bg-surface">
      <motion.div
        className="container-custom"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            A glimpse of what we create
          </p>
          <h2 className="mt-4 text-3xl text-brown sm:text-4xl">Our Work</h2>
        </div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={transition}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-transparent transition-transform duration-300 group-hover:scale-[1.02] group-hover:border-gold">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={`${item.label} hairstyle by Tilly Louise Hair`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-dark"
          >
            View Full Gallery →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
