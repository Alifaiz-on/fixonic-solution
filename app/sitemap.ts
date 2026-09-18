import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://fixonicsolutions.com/",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/about",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/contact",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/website-development",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/seo",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/digital-marketing",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/ui-ux-design",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/ai-solutions",
      lastModified: new Date(),
    },

    {
      url: "https://fixonicsolutions.com/services/domain-hosting",
      lastModified: new Date(),
    },

  ];

}