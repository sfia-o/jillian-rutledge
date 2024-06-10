import React from 'react';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';

function Home() {
  return (
    <div>
      <TopNavBar />
      <HeroSection />
      <WelcomeSection />
    </div>
  );
}

export default Home;
