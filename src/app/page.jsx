"use client";

import { useEffect } from "react";
import { useScroll } from "@/lib/ScrollContext";
import HeroSection from "@/components/Home/HeroSection";
import LatestWorks from "@/components/Home/LatestWorks";
import AboutUs from "@/components/Home/AboutUs";
import ServicePage from "@/components/Home/ServicePage";
import Creators from "@/components/Home/Creators";
import WhyChooseUse from "@/components/Home/WhyChooseUs";
import OurClients from "@/components/Home/OurClients";
import ContactForm from "@/components/Home/ContactForm";
import Review from "@/components/Home/Review";
import AnimatedContactButtons from "@/components/Home/AnimatedContactButtons";

export default function Home() {
  const { refs, scrollToSection } = useScroll();

  useEffect(() => {
    const targetSection = localStorage.getItem("scrollTarget");
    if (targetSection) {
      scrollToSection(targetSection); // Scroll to the section
      localStorage.removeItem("scrollTarget"); // Clear the scroll target
    }
  }, [scrollToSection]);

  return (
    <>
      <HeroSection />
      <LatestWorks />
      <div ref={refs.aboutUs}>
        <AboutUs />
      </div>
      <div ref={refs.servicePage}>
        <ServicePage />
      </div>
      <Creators />
      <WhyChooseUse />
      <Review />
      <div ref={refs.ourClients}>
        <OurClients />
      </div>
      <div ref={refs.contactForm}>
        <ContactForm />
      </div>
      <AnimatedContactButtons />
    </>
  );
}
