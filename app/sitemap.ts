import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://laradiasagropecuaria.com.br",
      lastModified: new Date(),
    },
    {
      url: "https://laradiasagropecuaria.com.br/produtos",
      lastModified: new Date(),
    },
  ];
}