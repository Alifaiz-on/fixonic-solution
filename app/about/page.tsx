import "./about.css";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import AboutProcess from "./AboutProcess";
import AboutWhyChoose from "./AboutWhyChoose";
import AboutWhoWeAre from "./AboutWhoWeAre";

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