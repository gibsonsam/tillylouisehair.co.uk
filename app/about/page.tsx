import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Scissors, ShieldCheck, Sparkles, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Tilly",
  description:
    "Meet Tilly Louise — NVQ Level 3 qualified hairdresser with over 5 years experience, trained by Michaeljohn. Premium hair services at Avanti Hair, Uppermill, Saddleworth.",
  alternates: { canonical: "/about" },
};

const credentials: { label: string; Icon: React.ElementType }[] = [
  { label: "NVQ Advanced Level 3 & Level 2 Hairdressing", Icon: Award },
  { label: "Trained by Michaeljohn — a multi-award-winning training provider, with over 40 years of experience in the hairdressing and barbering industry", Icon: Star },
  { label: "Level 2 Beauty Therapy — pedicures, manicures, facials, massages & eyebrow shaping", Icon: Sparkles },
  { label: "Fully insured — treatments carried out with complete peace of mind", Icon: ShieldCheck },
];

const values = [
  {
    title: "Creativity",
    description: "Bespoke looks designed around your style, texture and goals.",
    Icon: Sparkles,
  },
  {
    title: "Precision",
    description: "Technical cutting and colouring with detail at every stage.",
    Icon: Scissors,
  },
  {
    title: "Care",
    description: "A calm, welcoming experience that puts your hair health first.",
    Icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream via-surface to-surface-dark pt-32 pb-16 sm:pt-36">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            About Tilly
          </p>
          <h1 className="mt-4 text-4xl text-brown sm:text-5xl">A personal approach to beautiful hair</h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Discover the story, training and values behind Tilly Louise Hair.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/tilly-portrait.jpg"
              alt="Tilly Louise — stylist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl text-brown sm:text-4xl">Meet the stylist behind the chair</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>
                With more than half a decade of experience, Tilly Louise has
                built a reputation for thoughtful consultations, beautiful colour
                work and confidence-boosting finishes.
              </p>
              <p>
                Her work is inspired by modern luxury: soft tones, seamless
                blends and polished cuts that feel effortless long after you
                leave the salon.
              </p>
              <p>
                Whether you are booking a full transformation, a fresh trim or
                styling for a special event, every appointment is tailored with
                care, creativity and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <article className="rounded-[2rem] bg-cream p-6 sm:p-8">
            <h2 className="text-2xl text-brown sm:text-3xl">Qualifications & Credentials</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              {credentials.map(({ label, Icon }) => (
                <li key={label} className="flex items-start gap-4 rounded-2xl border border-surface-dark bg-surface px-4 py-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                    <Icon size={18} />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-2xl text-brown sm:text-3xl">What matters most</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {values.map(({ title, description, Icon }) => (
                <div key={title} className="rounded-[2rem] bg-cream p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-2xl text-brown">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom rounded-[2rem] bg-brown px-6 py-10 text-center text-cream sm:px-10">
          <h2 className="text-3xl text-cream sm:text-4xl">Ready for your next appointment?</h2>
          <p className="mt-4 text-base leading-8 text-cream/80">
            Book your consultation and let's create a look that feels like you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
          >
            Book with Tilly
          </Link>
        </div>
      </section>
    </>
  );
}
