import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolsBrandsSection from "./components/ToolsBrandsSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <ToolsBrandsSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}