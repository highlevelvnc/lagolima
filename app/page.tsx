import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Services from "@/components/Services";
import ResistantSurfaces from "@/components/ResistantSurfaces";
import ParallaxBanner from "@/components/ParallaxBanner";
import Applications from "@/components/Applications";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollEffects from "@/components/ScrollEffects";
import Loader from "@/components/Loader";

export default function HomePage() {
  return (
    <>
      <Loader />
      <a className="skip-link" href="#main">Saltar para o conteúdo</a>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Services />
        <ResistantSurfaces />
        <ParallaxBanner />
        <Applications />
        <Process />
        <Projects />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollEffects />
    </>
  );
}
