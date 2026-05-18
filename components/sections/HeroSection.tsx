"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-surface to-surface-dark">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-gold/10 blur-2xl sm:h-72 sm:w-72" />
        <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full border border-gold/25" />
        <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full border border-brown/10" />
      </div>

      <div className="container-custom relative flex min-h-[85vh] items-center pt-28 pb-16 md:min-h-screen md:pt-32 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={transition}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold sm:text-base"
          >
            Tilly Louise Hair
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={transition}
            className="max-w-2xl text-4xl leading-tight text-brown sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Where Every Cut Tells a Story.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={transition}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            Step into a warm, premium salon experience where bespoke cuts,
            luminous colour and thoughtful styling are crafted around you.
            {/* TODO: Replace placeholder content */}
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={transition}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
            >
              Book an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:border-gold hover:text-gold"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
