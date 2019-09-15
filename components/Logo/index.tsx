import React, { FunctionComponent } from "react";
import Link from "next/link";
import ReactSVG from "react-svg";

type Props = {
  classname?: string;
};

const Logo: FunctionComponent<Props> = ({ classname }) => {
  return (
    <Link href="/">
      <a className={classname} aria-label="Go to the homepage">
        <ReactSVG src="/static/logo.svg" />
      </a>
    </Link>
  );
};

export default Logo;
