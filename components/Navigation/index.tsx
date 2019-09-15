import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Navigation = () => (
  <S.Nav>
    <ul>
      <li>
        <Link href="/venue">
          <a aria-label="Information on the venue">Venue</a>
        </Link>
      </li>
      <li>
        <Link href="/registration">
          <a aria-label="Registration and pricing information">Registration</a>
        </Link>
      </li>
      <li>
        <Link href="/schedule">
          <a aria-label="The conference schedule">Schedule</a>
        </Link>
      </li>
    </ul>
  </S.Nav>
);

export default Navigation;
