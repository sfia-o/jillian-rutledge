import React from "react";
import { Nav, NavbarContainer, NavItem } from "./TopNavBarElements";
import { Link } from "react-router-dom"


const TopNavBar = () => {
  console.log("TopNavBar rendered"); // Debugging statement
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem>about</NavItem>
          <NavItem><Link to='/coaching' style={{ textDecoration: 'none', color: 'inherit' }}>coaching</Link></NavItem>
          {/* <NavLogo>
            <img src={slogo} alt="jillian rutledge styled logo" />
          </NavLogo> */}
          {/* Temporary placeholder logo*/}<NavItem><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>JILLIAN RUTLEDGE</Link></NavItem>
          <NavItem><Link to='/diving' style={{ textDecoration: 'none', color: 'inherit' }}>diving</Link></NavItem>
          <NavItem>contact</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TopNavBar;
