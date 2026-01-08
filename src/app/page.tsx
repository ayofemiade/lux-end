import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import ProjectsSlider from "@/components/ProjectsSlider";
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
      <ProjectsSlider />
      <HotspotProject />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}

