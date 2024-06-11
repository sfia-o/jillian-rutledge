import React from "react";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";

function Home() {
  return (
    <div>
      <TopNavBar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;
