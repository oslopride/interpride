import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import * as S from "./styles";

type Props = {
	classname?: string;
};

const Logo: FunctionComponent<Props> = ({ classname }) => {
	return (
		<Link to="/">
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
