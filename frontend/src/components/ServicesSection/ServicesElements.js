import styled from "styled-components";

export const ServicesContainer = styled.div`
  max-width: 100%;
  background-color: #073B3A;
  height: 800px;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServiceH1 = styled.h1`
  font-family: "Grandiflora One", cursive;
  color: black;
  margin-bottom: 5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ServiceCard = styled.div`
  border: 1px black;
  height: 30rem;
  width: 20rem;
  margin: 0 3rem;
  background-color: white;
  border-radius: 20px;
`;

export const Title = styled.h1`
  color: black;
`;

export const Description = styled.p`
  color: black;
`;

export const CardButton = styled.button`
  color: black;
  background-color: blue;
`;
