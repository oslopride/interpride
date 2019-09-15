import React from "react";
import Link from "next/link";

const Navigation = () => (
  <nav>
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
  </nav>
);

export default Navigation;
