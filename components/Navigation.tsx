import React from "react";
import Link from "next/link";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href="/venue">
          <a aria-label="More information on the venue">Venue</a>
        </Link>
      </li>
      <li>
        <Link href="/tickets">
          <a aria-label="Information on tickets and pricing">Tickets</a>
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
