import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import * as S from "./styles";

const Header = ({ locale }) => {
	return (
		<S.Header>
			<Logo locale={locale} />
			<Navigation locale={locale} />
		</S.Header>
	);
};

export default Header;
