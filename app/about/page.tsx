import type { Metadata } from "next";
import "./about.css";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import AboutProcess from "./AboutProcess";
import AboutWhyChoose from "./AboutWhyChoose";
import AboutWhoWeAre from "./AboutWhoWeAre";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fixonic Solutions, our digital team, mission, and how we help businesses grow with innovative web development, SEO, and AI technologies.",
  alternates: {
    canonical: "https://www.fixonicsolutions.com/about",
  },
  openGraph: {
    title: "About Us | Fixonic Solutions",
    description:
      "Learn about Fixonic Solutions, our digital team, mission, and how we help businesses grow with innovative web development, SEO, and AI technologies.",
    url: "https://www.fixonicsolutions.com/about",
    siteName: "Fixonic Solutions",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <AboutProcess />
      <AboutWhyChoose />
      <AboutWhoWeAre />
    </main>
  );
}