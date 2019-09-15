import React, { FunctionComponent } from "react";
import Link from "next/link";
import ReactSVG from "react-svg";
import * as S from "./styles";

type Props = {
  classname?: string;
};

const Logo: FunctionComponent<Props> = ({ classname }) => {
  return (
    <Link href="/">
      <S.LogoLink
        className={classname}
        aria-label="Go to the homepage"
        tabIndex={0}
      >
        <ReactSVG src="/static/logo.svg" />
      </S.LogoLink>
    </Link>
  );
};

export default Logo;
