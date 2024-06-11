import React from 'react';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';

function Home() {
  return (
    <div>
      <TopNavBar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
