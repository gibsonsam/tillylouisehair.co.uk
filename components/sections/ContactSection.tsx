"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { formatHours } from "@/lib/hours";
import { siteConfig } from "@/lib/site";

const { contact, hours } = siteConfig;

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

export function ContactSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section-padding bg-cream">
      <motion.div
        className="container-custom"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Get in Touch
          </p>
          <h2 className="mt-4 text-3xl text-brown sm:text-4xl">Plan your next appointment</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-[2rem] bg-surface p-6 sm:p-8">
            <h3 className="text-2xl text-brown">Contact Details</h3>
            <div className="mt-6 space-y-5 text-base text-muted">
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-start gap-4 transition-colors hover:text-brown"
              >
                <Phone className="mt-1 text-gold" size={20} />
                <span>{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-4 break-all transition-colors hover:text-brown"
              >
                <Mail className="mt-1 text-gold" size={20} />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-gold" size={20} />
                <span>{contact.address.display}</span>
              </div>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
            >
              Send us a message
            </a>
          </article>

          <article className="rounded-[2rem] border border-surface-dark bg-cream p-6 sm:p-8">
            <h3 className="text-2xl text-brown">Opening Hours</h3>
            <table className="mt-6 w-full text-left text-sm text-muted sm:text-base">
              <tbody>
                {hours.map(({ day, opens, closes }) => (
                  <tr key={day} className="border-b border-surface-dark/70 last:border-b-0">
                    <th className="py-3 pr-4 font-medium text-brown">{day}</th>
                    <td className="py-3">{formatHours(opens, closes)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
