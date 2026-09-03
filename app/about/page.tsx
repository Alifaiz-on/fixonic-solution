import "./about.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import AboutProcess from "./AboutProcess";
import AboutWhyChoose from "./AboutWhyChoose";
import AboutWhoWeAre from "./AboutWhoWeAre";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <AboutContent />
        <AboutProcess />
        <AboutWhyChoose />
        <AboutWhoWeAre />
      </main>

      <Footer />
    </>
  );
}