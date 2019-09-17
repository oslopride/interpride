import styled from "styled-components";

export const VenueHero = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fec101;

  img,
  ul {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    width: 50%;

    @media (min-width: 620px) {
      flex: 1;
    }
  }

  ul {
    list-style: none;
    margin: auto 20px;
    padding: 20px 0;

    li:first-child {
      margin-bottom: 1rem;
    }

    li a {
      height: 1rem;
      line-height: 1rem;
      text-decoration: none;
      color: black;
      font-size: 1rem;

      @media (min-width: 620px) {
        height: 2vw;
        line-height: 2vw;
        font-size: 2vw;
      }
    }

    li a span {
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
    }

    li a span svg {
      width: 2rem;
      height: 2rem;
      margin-right: 10px;

      @media (min-width: 620px) {
        width: 3vw;
        height: 3vw;
      }
    }
  }
`;
