import React from "react";
import { Nav, NavbarContainer, NavItem } from "./TopNavBarElements";

const TopNavBar = () => {
  console.log("TopNavBar rendered"); // Debugging statement
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem>about</NavItem>
          <NavItem>coaching</NavItem>
          {/* <NavLogo>
            <img src={slogo} alt="jillian rutledge styled logo" />
          </NavLogo> */}
          {/* Temporary placeholder logo*/}<NavItem>JILLIAN RUTLEDGE</NavItem>
          <NavItem>diving</NavItem>
          <NavItem>contact</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TopNavBar;
