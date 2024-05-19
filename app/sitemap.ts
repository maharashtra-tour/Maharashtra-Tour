import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.garvtravels.in/",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/mumbai-darshan-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/mumbai-to-shirdi-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/mumbai-to-pune-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/mumbai-to-lonavala-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.garvtravels.in/contact",
      lastModified: new Date(),
    },
  ];
}
