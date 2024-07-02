import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maharashtratour.in/",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/mumbai-darshan-cab",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/mumbai-to-shirdi-cab",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/mumbai-to-pune-cab",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/mumbai-to-lonavala-cab",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://maharashtratour.in/contact",
      lastModified: new Date(),
    },
  ];
}
