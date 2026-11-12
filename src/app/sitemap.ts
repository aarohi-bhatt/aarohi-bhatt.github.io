import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://aarohi-bhatt.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/art/`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
