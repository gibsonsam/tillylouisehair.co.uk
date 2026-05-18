import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base,                  changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`,    changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,       changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`,     changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contact`,     changeFrequency: "monthly", priority: 0.8 },
  ];
}
