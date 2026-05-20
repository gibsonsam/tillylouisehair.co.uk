"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function ReviewCTA({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="Leave a Google review" className="section-padding bg-surface">
      <motion.div
        className="container-custom"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
      >
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-brown px-8 py-12 text-center sm:px-14">
          <div className="flex justify-center gap-2" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={26} className="fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>

          <h2 className="mt-6 font-display text-2xl text-cream sm:text-3xl">
            Loved your visit?
          </h2>

          <p className="mt-4 text-base leading-7 text-cream/80">
            Your review makes a huge difference — it helps others discover Tilly Louise Hair
            and supports a small, independent business.
          </p>

          <a
            href={siteConfig.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Leave a review on Google (opens in new tab)"
          >
            <FaGoogle size={16} aria-hidden="true" />
            Leave a Google Review
          </a>
        </div>
      </motion.div>
    </section>
  );
}
