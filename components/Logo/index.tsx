import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  classname?: string;
};

const Logo: FunctionComponent<Props> = ({ classname }) => {
  return (
    <Link href="/">
      <a className={classname} aria-label="Go to the homepage">
        <img
          src="/static/logo.svg"
          alt="Interpride AGM logo. Squiggely rainbow over the text 'interpride'."
        />
      </a>
    </Link>
  );
};

export default Logo;
