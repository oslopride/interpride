import styled from "styled-components";

export const Header = styled.header`
  flex-shrink: 0;
  position: relative;
  padding: 1rem 1rem 0;

  @media (min-width: 620px) {
    display: flex;
    justify-content: space-between;
  }
`;
