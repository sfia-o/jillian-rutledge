import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: 0;  /* Changed to 0 for debugging */
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
  border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 80px;
`;

/* Define any other styled components used */
