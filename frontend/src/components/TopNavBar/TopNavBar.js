import React from "react";
import {
  Nav,
  NavbarContainer,
} from "./TopNavBarElements";

const TopNavBar = () => {
  console.log("TopNavBar rendered"); // Debugging statement
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem>about</NavItem>
          <NavItem>coaching</NavItem>
          <NavLogo></NavLogo>
          <NavItem>diving</NavItem>
          <NavItem>contact</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TopNavBar;

