import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutH1,
  AboutDescription,
  AboutIMG,
} from "./AboutElements";
import Profile from "../../assets/placeholder_profilepic.jpg";


function AboutSection() {
  return (
    <AboutContainer>
      <AboutText>
        <AboutH1>ABOUT ME</AboutH1>
        <AboutDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Phasellus
          malesuada libero ut nisl varius, sed facilisis justo malesuada.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        </AboutDescription>
      </AboutText>
      <AboutIMG src={Profile}></AboutIMG>
    </AboutContainer>
  );
}

export default AboutSection;
