import React, { FunctionComponent } from "react";
import * as S from "./styles";

type Props = {
  title: string;
};

const PageTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <S.Banner>
      <S.Title>
        <h1>{title}</h1>
      </S.Title>
    </S.Banner>
  );
};

export default PageTitle;
