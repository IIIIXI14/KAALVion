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
import FirstVisitWelcome from "@/components/FirstVisitWelcome";

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
      <FirstVisitWelcome />
      <div className="relative z-10">
        <Navbar />
        <main id="main-content" className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-32 pt-10">
          <HeroSection />
          <AboutSection />
          {/* SEO-focused sections for website and app development */}
          <section id="web-development" className="px-4 sm:px-6">
            <div className="container mx-auto space-y-4 sm:space-y-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Website &amp; web app development built for scale.
              </h2>
              <p className="text-base md:text-lg text-white/75 max-w-3xl">
                KAALVION is a website development and web app development studio for teams that can&apos;t afford failures in
                production. We design, build, and operate fast, secure web experiences that feel as responsive as native apps —
                from marketing sites to complex dashboards and internal tools.
              </p>
              <p className="text-sm md:text-base text-white/70 max-w-3xl">
                Using modern stacks like React, TypeScript, and edge-ready infrastructure, we take products from Figma to
                production with observability, automated testing, and rollbacks built in. Whether you&apos;re shipping a new SaaS
                web app or rebuilding an outdated website, our team handles architecture, UX, and implementation in one loop.
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2">
                <li>High-performance marketing websites and landing pages</li>
                <li>Web app development for dashboards, admin panels, and portals</li>
                <li>Multi-tenant, role-based access with strong security defaults</li>
                <li>Ongoing optimisation for Core Web Vitals and SEO</li>
              </ul>
            </div>
          </section>

          <section id="app-development" className="px-4 sm:px-6">
            <div className="container mx-auto space-y-4 sm:space-y-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Cross-platform app development with React Native &amp; Flutter.
              </h2>
              <p className="text-base md:text-lg text-white/75 max-w-3xl">
                KAALVION builds cross-platform apps that feel native on iOS and Android, using React Native and Flutter. One
                shared codebase, production-grade performance, and a design system that stays consistent across mobile, tablet,
                and desktop.
              </p>
              <p className="text-sm md:text-base text-white/70 max-w-3xl">
                From MVPs to mission-critical field apps, we handle architecture, offline-first data sync, authentication, and
                deployments to the App Store and Play Store. Our app development process combines fast iteration with robust QA
                so new features ship weekly, not yearly.
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-2">
                <li>Cross-platform apps with React Native and Flutter</li>
                <li>Offline-first flows, background sync, and secure local storage</li>
                <li>Biometric login, SSO, and role-aware permissions</li>
                <li>Analytics, A/B testing, and continuous delivery baked in</li>
              </ul>
            </div>
          </section>

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
