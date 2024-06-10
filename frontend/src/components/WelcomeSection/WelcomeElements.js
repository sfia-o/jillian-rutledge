import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  z-index: 0;
  max-width: 1200px;
  height: 600px;
  position: absolute;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WelcomeH1 = styled.h1`
  color: white;
  font-family: "Grandiflora One", cursive;
  font-size: 50px;
  text-align: center;
  font-weight: black;
  color: black;
  margin: 0;
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
  max-width: 700px;
  font-size: 30px;
  text-align: start;
  margin: 0 50;
  font-weight: 100;
  font-style: italic;
  color: black;
  margin: 0 34;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const WelcomeP = styled.p`
   color: black;
  max-width: 700px;
  font-size: 30px;
  text-align: start;
  margin: 0 50;
  font-weight: 100;
  font-style: italic;
  color: black;
  margin: 0 34;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;