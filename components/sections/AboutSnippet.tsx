"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function AboutSnippet({ id }: { id?: string }) {
  return (
    <section id={id} className="section-padding bg-surface">
      <motion.div
        className="container-custom grid items-center gap-10 md:grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/tilly-portrait.jpg"
              alt="Tilly Louise — stylist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brown/35 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full border border-cream/50 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cream">
            Tilly Louise
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Meet Tilly
          </p>
          <h2 className="mt-4 text-3xl text-brown sm:text-4xl">
            Passionate about hair, dedicated to you
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              With over half a decade of experience in the industry, Tilly Louise
              brings passion, precision and creativity to every appointment.
            </p>
            <p>
              Based in Saddleworth, the salon offers a calm, welcoming space where
              every guest can relax, feel heard and enjoy a personalised service
              from consultation through to the finishing touch.
            </p>
            <p>
              Tilly specialises in soft, lived-in colour, highlights, precision
              cutting and beautiful styling for weddings and special occasions.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-11 items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-dark"
          >
            Meet Tilly →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
