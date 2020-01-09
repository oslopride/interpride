import React from "react";
import { Link } from "gatsby";
import * as S from "./styles";

const Logo = ({ classname, locale }) => {
	const url = locale === "en" ? "/" : `/${locale}/`;
	return (
		<Link to={url}>
			<S.LogoLink
				className={classname}
				aria-label="Go to the homepage"
				tabIndex={0}
			>
				<img src="/InterPrideEPOA.png" alt="Interpride EPOA logo" />
			</S.LogoLink>
		</Link>
	);
};

export default Logo;
