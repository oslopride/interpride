import styled from "styled-components";

export const Banner = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  width: 100%;
`;

export const Title = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2vw;

  h1 {
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-family: Montserrat, sans-serif;

    @media (min-width: 620px) {
      text-align: left;
    }
  }
`;
