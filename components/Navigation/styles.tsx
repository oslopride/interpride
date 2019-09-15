import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  margin-top: 0.5rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding-left: 0;
    font-size: 0.85rem;
    list-style: none;

    @media (min-width: 620px) {
      flex-flow: nowrap;
      margin-left: 0;
    }

    li {
      a {
        display: inline-block;
        padding: 0.35rem;
        font-family: Montserrat;
        color: black;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        position: relative;

        ::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 80%;
          height: 2px;
          background-color: #fc2f70;
          transform-origin: center;
          transform: translate(-50%, 0) scaleX(0);
          transition: transform 0.3s ease-in-out;
        }

        :hover::before {
          transform: translate(-50%, 0) scaleX(1);
        }

        @media (min-width: 620px) {
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
        }
      }
    }
  }
`;
