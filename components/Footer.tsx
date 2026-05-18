import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

const { contact, tagline, name, social } = siteConfig;

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown text-cream">
      <div className="container-custom section-padding grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Logo className="h-14 w-[170px]" variant="light" />
          <p className="max-w-xs text-sm leading-7 text-cream/80">
            {tagline}
          </p>
          <div className="flex items-center gap-3">
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label="Instagram"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <FaInstagram size={18} />
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                aria-label="Facebook"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <FaFacebook size={18} />
              </a>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl text-cream">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-gold" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-cream">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-cream/80">
            <li>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Phone size={16} />
                <span>{contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail size={16} />
                <span>{contact.email}</span>
              </a>
            </li>
            <li className="max-w-xs leading-7">
              {contact.address.display}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-custom flex flex-col gap-2 py-4 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {name}. All rights reserved.</p>
          <p>Designed for a luxury salon experience.</p>
        </div>
      </div>
    </footer>
  );
}
