import type { Metadata } from "next";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ContactSection } from "@/components/sections/ContactSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewCTA } from "@/components/sections/ReviewCTA";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export const metadata: Metadata = {
  title: "Tilly Louise Hair | Hairdresser in Uppermill, Saddleworth",
  description:
    "Premium hairdressing in Uppermill, Saddleworth. Expert cuts, colour, balayage, highlights and occasion styling from Tilly Louise Hair at Avanti Hair.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <AboutSnippet />
      <ContactSection />
      <ReviewCTA />
    </>
  );
}
