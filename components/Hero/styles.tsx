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
`;

export const Links = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin-top: -40vw;
  padding: 4rem;
  min-height: 20vw;
  text-align: center;

  @media (min-width: 620px) {
    margin-top: -30vw;
    padding-top: 8rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 920px) {
    padding-top: 10rem;
  }

  @media (min-width: 1120px) {
    padding-top: 10rem;
    padding-bottom: 12rem;
  }

  > div {
    margin: 1rem;
    max-width: 340px;

    @media (min-width: 620px) {
      margin-right: 2rem;
      margin-left: 2rem;
    }
  }
`;
