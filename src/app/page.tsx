import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import CaseStudies from "@/components/CaseStudies";
import BeforeAfter from "@/components/BeforeAfter";
import ProjectsSlider from "@/components/ProjectsSlider";
import ClientJourney from "@/components/ClientJourney";
import HotspotProject from "@/components/HotspotProject";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollStory />
      <CaseStudies />
      <ProjectsSlider />
      <BeforeAfter />
      <ClientJourney />
      <HotspotProject />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}

