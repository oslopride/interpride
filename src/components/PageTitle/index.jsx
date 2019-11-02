import React from "react";
import * as S from "./styles";

const PageTitle = ({ title }) => {
	return (
		<S.Banner>
			<S.Title>
				<h1>{title}</h1>
			</S.Title>
		</S.Banner>
	);
};

export default PageTitle;
