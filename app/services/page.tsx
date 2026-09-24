import type { Metadata } from "next";
import "./services.css";

import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServiceProcess from "./ServiceProcess";
import ServicesWhyChoose from "./ServicesWhyChoose";
import ServicesCTA from "./ServicesCTA";


export const metadata: Metadata = {
  title: "Digital Services & Solutions | Web, SEO, Marketing & AI",
  description:
    "Explore full-service digital solutions by Fixonic Solutions: custom web development, SEO strategies, performance marketing, UI/UX design, and AI automation for global businesses.",
  alternates: {
    canonical: "https://www.fixonicsolutions.com/services",
  },
  openGraph: {
    title: "Digital Services & Solutions | Fixonic Solutions",
    description:
      "Explore full-service digital solutions by Fixonic Solutions: custom web development, SEO strategies, performance marketing, UI/UX design, and AI automation for global businesses.",
    url: "https://www.fixonicsolutions.com/services",
    siteName: "Fixonic Solutions",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Fixonic Solutions Services - Global Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services & Solutions | Fixonic Solutions",
    description:
      "Full-service digital agency solutions: custom web development, SEO, performance marketing, and AI automation for global businesses.",
    images: ["/images/logo.png"],
  },
};

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.fixonicsolutions.com/services/#webpage",
        "url": "https://www.fixonicsolutions.com/services",
        "name": "Digital Services & Solutions | Fixonic Solutions",
        "description":
          "Explore full-service digital solutions by Fixonic Solutions: custom web development, SEO strategies, performance marketing, UI/UX design, and AI automation for global businesses.",
        "isPartOf": {
          "@id": "https://www.fixonicsolutions.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.fixonicsolutions.com/services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.fixonicsolutions.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.fixonicsolutions.com/services",
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesWhyChoose />
      <ServicesCTA />
    </main>
  );
}