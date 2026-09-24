import type { Metadata } from "next";
import "./contact.css";

import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";

export const metadata: Metadata = {
  title: "Contact Us | Hire a Global Digital Agency",
  description:
    "Get in touch with Fixonic Solutions. Discuss your custom web development, SEO, performance marketing, or AI automation project and request a free consultation.",
  alternates: {
    canonical: "https://www.fixonicsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | Fixonic Solutions",
    description:
      "Get in touch with Fixonic Solutions. Discuss your custom web development, SEO, performance marketing, or AI automation project and request a free consultation.",
    url: "https://www.fixonicsolutions.com/contact",
    siteName: "Fixonic Solutions",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Fixonic Solutions - Global Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Fixonic Solutions",
    description:
      "Get in touch with Fixonic Solutions for custom web development, SEO, performance marketing, or AI automation.",
    images: ["/images/logo.png"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.fixonicsolutions.com/contact/#webpage",
        "url": "https://www.fixonicsolutions.com/contact",
        "name": "Contact Us | Fixonic Solutions",
        "description":
          "Get in touch with Fixonic Solutions. Discuss your custom web development, SEO, performance marketing, or AI automation project and request a free consultation.",
        "isPartOf": {
          "@id": "https://www.fixonicsolutions.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.fixonicsolutions.com/contact/#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://www.fixonicsolutions.com/contact",
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
          __html: JSON.stringify(contactSchema),
        }}
      />
      <ContactHero />

      <section className="contact-wrapper">
        <ContactSection />
        <ContactMap />
      </section>
    </main>
  );
}