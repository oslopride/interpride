import React, { FunctionComponent } from "react";
import * as S from "./styles";

type Props = {
  title: string;
  color: string;
};

const PageTitle: FunctionComponent<Props> = ({ title, color }) => {
  return (
    <S.Banner bgColor={color}>
      <S.Title>
        <h1>{title}</h1>
      </S.Title>
    </S.Banner>
  );
};

export default PageTitle;
