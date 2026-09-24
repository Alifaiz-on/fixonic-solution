import type { Metadata } from "next";
import "./contact.css";

import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fixonic Solutions. Discuss your web development, SEO, or digital marketing project and request a free quote or consultation.",
  alternates: {
    canonical: "https://www.fixonicsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | Fixonic Solutions",
    description:
      "Get in touch with Fixonic Solutions. Discuss your web development, SEO, or digital marketing project and request a free quote or consultation.",
    url: "https://www.fixonicsolutions.com/contact",
    siteName: "Fixonic Solutions",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="contact-wrapper">
        <ContactSection />
        <ContactMap />
      </section>
    </main>
  );
}