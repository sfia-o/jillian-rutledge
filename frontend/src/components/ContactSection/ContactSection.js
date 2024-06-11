import React from "react";
import {
  ContactContainer,
  ConnectContainer,
  Title,
  Text,
  SubscribeContainer,
  InputForm,
} from "./ContactElements";

function ContactSection() {
  return (
    <ContactContainer>
      <ConnectContainer>
        <Title>CONNECT</Title>
        <p>750 245 2589</p>
        <p>jillian@gmail.com</p>
      </ConnectContainer>

      <SubscribeContainer>
        <Title>SUBSCRIBE</Title>
        <InputForm></InputForm>
      </SubscribeContainer>
    </ContactContainer>
  );
}

export default ContactSection;
