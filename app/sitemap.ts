import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://fixonic-solution.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/about",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/contact",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/website-development",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/seo",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/digital-marketing",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/ui-ux-design",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/ai-solutions",
      lastModified: new Date(),
    },

    {
      url: "https://fixonic-solution.vercel.app/services/domain-hosting",
      lastModified: new Date(),
    },

  ];

}