import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  /* Add some basic styles for debugging */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 80px;
`;

export const NavItem = styled.h1`
  color: white;
  display: flex;
  font-size: 14px;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;
