import React from "react";
import * as S from "./styles";
const Hero = () => {
  return (
    <S.Hero>
      <S.Date>
        <h1>1 - 4 October 2020</h1>
        <h1>Oslo, Norway</h1>
      </S.Date>

      <S.Links>
        <div>
          <h2>Workshops</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h2>Tickets</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h2>The Bid</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </S.Links>
    </S.Hero>
  );
};

export default Hero;
