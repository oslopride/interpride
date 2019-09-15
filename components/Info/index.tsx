import React from "react";
import * as S from "./styles";

const Info = () => {
  return (
    <S.Info>
      <div>
        <S.Image>
          <img
            src="https://placeimg.com/640/480/nature/grayscale"
            alt="Interpride illustration"
          />
        </S.Image>
        <S.Text>
          <h2>What is Interpride AGM?</h2>
          <p>Lorem ipsum</p>
          <S.Button>
            <a href="https://drive.google.com/open?id=1-JdJVLJibIGt89dyMBSnvLl0YqZJyimB">
              Download the bid
            </a>
          </S.Button>
        </S.Text>
      </div>
    </S.Info>
  );
};

export default Info;
