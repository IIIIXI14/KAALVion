import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PatentsSection from "@/components/PatentsSection";
// import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundScene from "@/components/BackgroundScene";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-transparent">
      <BackgroundScene />
      <div className="relative z-10">
        <Navbar />
        <main className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-32 pt-10">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PatentsSection />
          {/* <CaseStudiesSection /> */}
          <TestimonialsSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
