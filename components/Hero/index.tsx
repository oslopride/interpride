import React from "react";
import * as S from "./styles";
import Link from "next/link";

const Hero = () => {
  return (
    <S.Hero>
      <S.Title>
        <h1>1 - 4 October 2020</h1>
        <h1>Oslo, Norway</h1>
      </S.Title>

      <S.Content>
        <S.ContentBox>
          <h2>Registration</h2>
          <p>
            The super early-bird tickets will be available on <b>October 17</b>.
            You can find prices and what{"'"}s included on{" "}
            <Link href="/registration">
              <a aria-label="Go to the registration page">
                the registration page
              </a>
            </Link>
            .
          </p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>Workshops</h2>
          <p>
            We are currently planning our workshops, and among the topics are{" "}
            <b>solidarity</b>, <b>human rights</b> and{" "}
            <b>making a successful pride</b>. Keep an eye on{" "}
            <Link href="/schedule">
              <a aria-label="Go to the schedule">the schedule</a>
            </Link>{" "}
            for more information.
          </p>
        </S.ContentBox>
        <S.ContentBox>
          <h2>WorldPride 2021 Kickoff</h2>
          <p>
            Pack your party shooes! Entrance to an <b>awesome party</b> on
            Saturday is included in the registration fee.
          </p>
        </S.ContentBox>
      </S.Content>
    </S.Hero>
  );
};

export default Hero;
