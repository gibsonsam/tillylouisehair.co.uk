"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const shellClassName =
    scrolled || mobileOpen
      ? "bg-cream/95 shadow-sm backdrop-blur-sm"
      : "bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b border-transparent transition-all duration-300 ${shellClassName}`}
        aria-label="Primary"
      >
        <div className="container-custom flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" aria-label="Tilly Louise Hair home" className="shrink-0">
            <Logo className="h-12 w-[150px]" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`text-xs font-medium uppercase tracking-[0.24em] transition-colors ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-brown hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold px-5 text-xs font-semibold uppercase tracking-[0.24em] text-brown transition-colors hover:bg-gold hover:text-brown"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-surface-dark bg-cream text-brown transition-colors hover:border-gold hover:text-gold md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-t border-surface-dark bg-cream md:hidden"
            >
              <div className="container-custom py-4">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`flex min-h-11 items-center rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                          isActive(link.href)
                            ? "bg-surface text-gold"
                            : "text-brown hover:bg-surface hover:text-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brown transition-colors hover:bg-gold-light"
                    >
                      Book Now
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
