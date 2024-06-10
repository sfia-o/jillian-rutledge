import React from 'react'
import { WelcomeContainer, WelcomeH1, Container, WelcomeH2, WelcomeP } from "./WelcomeElements";


function WelcomeSection() {
  return (
    <WelcomeContainer>
      <WelcomeH1>LET'S DIVE IN</WelcomeH1>
      <Container>
      <WelcomeH2>Does this sound like you?</WelcomeH2>
      <WelcomeP>Does fear block you from pursuing your goals?</WelcomeP>
      <WelcomeP>Do you find yourself stuck in a cycle of procrastination?</WelcomeP>
      <WelcomeP>Do you feel stagnant? Like life is not moving forward</WelcomeP>
      </Container>
      
    </WelcomeContainer>
  )
}

export default WelcomeSection
