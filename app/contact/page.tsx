import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { formatHours } from "@/lib/hours";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book your appointment with Tilly Louise Hair at Avanti Hair, 36 High Street, Uppermill, Saddleworth, OL3 6HR. Call 07481 400054 or email us.",
  alternates: { canonical: "/contact" },
};

const { contact, hours } = siteConfig;

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream via-surface to-surface-dark pt-32 pb-16 sm:pt-36">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl text-brown sm:text-5xl">Let's plan your visit</h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Get in touch by email or phone to book an appointment, ask a question or arrange a consultation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] bg-surface p-6 sm:p-8">
            <h2 className="text-2xl text-brown sm:text-3xl">Contact details</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <a href={`tel:${contact.phoneTel}`} className="flex items-start gap-4 transition-colors hover:text-brown">
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

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
              >
                Email us
              </a>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:border-gold hover:text-gold"
              >
                Call us
              </a>
            </div>
          </article>

          <article className="space-y-8">
            <div className="rounded-[2rem] border border-surface-dark bg-surface p-6 sm:p-8">
              <h2 className="text-2xl text-brown sm:text-3xl">Opening Hours</h2>
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
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <iframe
                title="Salon location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.607362713801!2d-2.0094934228272217!3d53.54692455969618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bc62aaa2c7c23%3A0xbc51736a688c12ed!2sAvanti%20Hair!5e0!3m2!1sen!2suk!4v1778855918537!5m2!1sen!2suk"
                className="aspect-[4/3] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
