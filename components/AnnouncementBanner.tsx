import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * Thin fixed banner rendered above the Navbar.
 * Toggle visibility and update copy in lib/site.ts → announcement.
 */
export function AnnouncementBanner() {
  const { announcement } = siteConfig;

  if (!announcement.visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[55] flex h-10 items-center justify-center gap-3 bg-brown px-4 text-center text-xs font-medium tracking-wide text-cream">
      <span>{announcement.message}</span>
      {announcement.link && announcement.linkLabel && (
        <Link
          href={announcement.link}
          className="shrink-0 rounded-full border border-gold/50 px-3 py-1 text-gold transition-colors hover:border-gold hover:text-gold-light"
        >
          {announcement.linkLabel}
        </Link>
      )}
    </div>
  );
}
