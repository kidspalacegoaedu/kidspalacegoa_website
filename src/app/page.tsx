import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";
import { Activities } from "@/components/sections/Activities";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <WhyChoose />
        <Programs />
        <Gallery />
        <Activities />
        <AdmissionProcess />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
