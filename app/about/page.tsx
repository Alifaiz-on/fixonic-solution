import type { Metadata } from "next";
import "./about.css";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import AboutProcess from "./AboutProcess";
import AboutWhyChoose from "./AboutWhyChoose";
import AboutWhoWeAre from "./AboutWhoWeAre";

export const metadata: Metadata = {
  title: "About Us | Full-Service Global Digital Agency",
  description:
    "Learn about Fixonic Solutions: our global team, mission, and how we empower startups, SMEs, and international brands with custom web development, SEO, and AI automation.",
  alternates: {
    canonical: "https://www.fixonicsolutions.com/about",
  },
  openGraph: {
    title: "About Us | Fixonic Solutions",
    description:
      "Learn about Fixonic Solutions: our global team, mission, and how we empower startups, SMEs, and international brands with custom web development, SEO, and AI automation.",
    url: "https://www.fixonicsolutions.com/about",
    siteName: "Fixonic Solutions",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "About Fixonic Solutions - Global Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Fixonic Solutions",
    description:
      "Learn about Fixonic Solutions: our global team, mission, and how we empower businesses worldwide with custom web development, SEO, and AI automation.",
    images: ["/images/logo.png"],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.fixonicsolutions.com/about/#webpage",
        "url": "https://www.fixonicsolutions.com/about",
        "name": "About Us | Full-Service Global Digital Agency | Fixonic Solutions",
        "description":
          "Learn about Fixonic Solutions: our global team, mission, and how we empower startups, SMEs, and international brands with custom web development, SEO, and AI automation.",
        "isPartOf": {
          "@id": "https://www.fixonicsolutions.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.fixonicsolutions.com/about/#breadcrumb",
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
            "name": "About Us",
            "item": "https://www.fixonicsolutions.com/about",
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
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <AboutHero />
      <AboutContent />
      <AboutProcess />
      <AboutWhyChoose />
      <AboutWhoWeAre />
    </main>
  );
}