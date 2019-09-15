import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  margin-top: 0.5rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    flex-flow: nowrap;

    li {
      list-style: none;

      a {
        font-family: MontSerrat;
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`;
