import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.Hero>
      <S.Date>
        <h1>1 - 4 October 2020</h1>
        <h1>Oslo, Norway</h1>
      </S.Date>

      <S.Links>
        <Link href="/schedule">
          <div>
            <h2>Workshops</h2>
            <p>
              Coming workshops focused on current topics, conflicts and
              solidarity in the LGBTQI movement
            </p>
          </div>
        </Link>
        <Link href="/registration">
          <div>
            <h2>Tickets</h2>
            <p>
              The registration will open on October 17. Click here for more
              information on ticket prices
            </p>
          </div>
        </Link>
        <Link href="/registration">
          <div>
            <h2>Closing party</h2>
            <p>
              Entrance to an awesome closing party on Saturday is included in
              the tickets
            </p>
          </div>
        </Link>
      </S.Links>
    </S.Hero>
  );
};

export default Hero;
