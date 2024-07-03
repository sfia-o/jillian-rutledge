import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  z-index: 0;
  max-width: 2000px;
  height: 600px;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WelcomeH1 = styled.h1`
  color: white;
  max-width: 450px;
  font-family: "Grandiflora One", cursive;
  font-size: 115px;
  text-align: start;
  color: black;
  margin: 0 3rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const WelcomeH2 = styled.h2`
  color: black;
  max-width: 1000px;
  font-size: 32px;
  text-align: start;
  font-style: bold;
  margin: 3 0;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubContainer = styled.div`
  margin: 2 0;
`

export const WelcomeP = styled.p`
   color: black;
  max-width: 700px;
  font-size: 30px;
  margin: 0;
  text-align: start;
  font-weight: 100;
  color: black;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;