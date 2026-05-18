"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Scissors, Sparkles } from "lucide-react";

const services = [
  {
    title: "Cuts & Styling",
    description:
      "Precision cuts and blowouts tailored to your face shape and lifestyle.",
    price: "from £25",
    Icon: Scissors,
  },
  {
    title: "Colour & Highlights",
    description:
      "From balayage to full colour, we bring your dream colour to life.",
    price: "from £65",
    Icon: Sparkles,
  },
  {
    title: "Treatments",
    description:
      "Nourishing treatments to restore shine, strength and health to your hair.",
    price: "from £25",
    Icon: Heart,
  },
];

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function ServicesPreview() {
  return (
    <section className="section-padding bg-cream">
      <motion.div
        className="container-custom"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Tailored for you
          </p>
          <h2 className="mt-4 text-3xl text-brown sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            Thoughtful appointments designed to enhance your natural beauty and
            suit your lifestyle.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map(({ title, description, price, Icon }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={transition}
              className="rounded-2xl bg-surface p-6 sm:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-2xl text-brown">{title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{description}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {price}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-dark"
          >
            View All Services →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
