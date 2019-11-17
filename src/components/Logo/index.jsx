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
				<img src="/ip_logo_black.png" alt="Interpride logo" />
			</S.LogoLink>
		</Link>
	);
};

export default Logo;
