import styled from "styled-components";

export const Hero = styled.div`
  color: white;
  background-color: #05264c;
  background-repeat: no-repeat;
  background-size: 80vw;
  background-position: right bottom -20vw;
  font-family: Montserrat;
`;

export const Date = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 10vw;
  padding: 3rem 0 30vw;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 620px) {
    padding: 3rem 0 15vw;
  }

  h1 {
    margin: 1rem;

    @media (min-width: 620px) {
      font-size: 3rem;
    }
  }
`;

export const Links = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-flow: row wrap;
  margin-top: -40vw;
  padding: 4rem 1rem;
  min-height: 10vw;
  text-align: center;

  @media (min-width: 620px) {
    margin-top: -20vw;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 920px) {
    padding-top: 10rem;
  }

  @media (min-width: 1120px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  div {
    margin: 1rem;
    max-width: 340px;
    cursor: pointer;

    @media (min-width: 620px) {
      margin-right: 2rem;
      margin-left: 2rem;
    }

    p {
      font-family: Open Sans;
    }
  }
`;
