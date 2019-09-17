import React from "react";
import * as S from "./styles";
import Link from "next/link";

const About = () => {
  return (
    <S.About>
      <div>
        <S.Image>
          <img
            src="/static/oslo-pride-illustration.jpg"
            alt="Interpride illustration"
          />
        </S.Image>
        <S.Text>
          <h2>Oslo Pride</h2>
          <p>
            Oslo Pride is an active member of the European Pride Organisers
            Association, and has hosted EuroPride twice, first in 2005 and most
            recently in 2014. Oslo Pride also has a dedicated solidarity program
            funded by the Norwegian Ministry of Foreign Affaires, enabling us to
            host a customised conference program for Eastern European activists,
            including Russia and the Ukraine, every year since 2015.
          </p>
          <p>
            <a href="https://www.oslopride.no/a/oslo-pride">
              Read more about Oslo Pride.
            </a>
          </p>
          <S.Button>
            <a href="/static/the-bid.pdf" target="_blank">
              Download the bid
            </a>
          </S.Button>
        </S.Text>
      </div>
    </S.About>
  );
};

export default About;
