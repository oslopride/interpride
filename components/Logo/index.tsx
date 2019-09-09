import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LogoImage = styled.img`
  margin-right: 10px;
  height: 100px;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  font-size: 35px;
`;

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LogoContainer aria-label="Go to the homepage">
        <LogoImage src="/static/logo.svg" alt="Interpride AGM logo" />
        INTERPRIDE
      </LogoContainer>
    </Link>
  );
};

export default Logo;
