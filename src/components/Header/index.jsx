import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import * as S from "./styles";

const Header = () => {
	return (
		<S.Header>
			<Logo />
			<Navigation />
		</S.Header>
	);
};

export default Header;
