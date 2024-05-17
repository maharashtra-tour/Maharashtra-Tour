import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://garvtravels.in/",
      lastModified: new Date(),
    },
    {
      url: "https://garvtravels.in/mumbai-darshan-cab",
      lastModified: new Date(),
    },
    {
      url: "https://garvtravels.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://garvtravels.in/contact",
      lastModified: new Date(),
    },
  ];
}
