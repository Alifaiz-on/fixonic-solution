import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolsBrandsSection from "./components/ToolsBrandsSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";



export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <ToolsBrandsSection />
      <Testimonials />
      <FAQ />
      
    </main>
  );
}