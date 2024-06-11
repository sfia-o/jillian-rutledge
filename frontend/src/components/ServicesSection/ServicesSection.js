import React from "react";
import { ServicesContainer, ServiceH1, CardContainer, ServiceCard, Title, Description, CardButton } from './ServicesElements';

function ServicesSection() {
  return (
    <ServicesContainer>
      <ServiceH1>HERE'S HOW I CAN HELP</ServiceH1>
      <CardContainer>
      <ServiceCard>
        <Title>BREATHWORK</Title>
        <Description></Description>
        <CardButton>Learn More</CardButton>
      </ServiceCard>
      <ServiceCard>
        <Title>COACHING</Title>
        <Description></Description>
        <CardButton>Learn More</CardButton>
      </ServiceCard>
      <ServiceCard>
        <Title>FREE DIVING</Title>
        <Description></Description>
        <CardButton>Learn More</CardButton>
      </ServiceCard>
      </CardContainer>
    </ServicesContainer>
  );
}

export default ServicesSection;
