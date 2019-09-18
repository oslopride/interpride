import styled from "styled-components";

export const VenueHero = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fec101;

  img {
    display: none;
    max-width: 50vw;
  }

  img,
  ul {
    @media (min-width: 620px) {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      width: 100%;
      flex: 1;
      object-fit: cover;
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
      font-family: montserrat, sans-serif;
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
    }
  }

  && {
    @media (min-width: 1440px) {
      ul {
        max-width: 1000px;
        margin: 0 auto;
      }
      img {
        display: none;
      }
    }
  }
`;
