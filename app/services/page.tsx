import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "View our full service menu and pricing — cuts, colour, balayage, highlights, Olaplex treatments, bridal hair and more at Tilly Louise Hair, Uppermill, Saddleworth.",
  alternates: { canonical: "/services" },
};

const serviceGroups = [
  {
    title: "Cuts & Styling",
    items: [
      ["Women's Cut & Blow Dry", "£35+"],
      ["Restyle", "£35+"],
      ["Children's Cut", "£15+"],
      ["Blow Dry", "£20+"],
    ],
  },
  {
    title: "Colour",
    items: [
      ["Full Head Colour", "£57+"],
      ["Root Touch Up", "£52+"],
      ["Full Head Highlights", "£110+"],
      ["Half Head Highlights", "£90+"],
      ["Balayage", "£135+"],
      ["Toner & Gloss", "£25+"],
      ["Colour Correction", "Price on Consultation"],
    ],
  },
  {
    title: "Treatments",
    items: [
      ["Olaplex Treatment", "£35+"],
      ["Deep Conditioning", "£25+"],
    ],
  },
  {
    title: "Special Occasions",
    items: [
      ["Bridal Hair", "£35+"],
      ["Occasion Updo", "£25+"],
      ["Trial Run", "£20+"],
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream via-surface to-surface-dark hero-top pb-16">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Services
          </p>
          <h1 className="mt-4 text-4xl text-brown sm:text-5xl">Services & Pricing</h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Luxury hair services tailored to your look, your lifestyle and your
            special moments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom space-y-8">
          {serviceGroups.map((group) => (
            <article key={group.title} className="rounded-[2rem] bg-surface p-6 sm:p-8">
              <h2 className="text-2xl text-brown sm:text-3xl">{group.title}</h2>
              <div className="mt-6 space-y-4">
                {group.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex flex-col gap-1 border-b border-surface-dark/80 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <h3 className="text-lg text-brown">{name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                      {price}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="rounded-[2rem] border border-surface-dark bg-cream p-6 text-center sm:p-8">
            <p className="text-base leading-8 text-muted">
              All prices are a guide. Final price confirmed at consultation.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
