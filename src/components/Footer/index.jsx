import React from "react";
import * as S from "./styles";
import { Link } from "gatsby";

const Footer = () => (
	<S.Footer>
		<span>Created by Oslo Pride</span>
		<span>
			<Link to="/privacy-policy" aria-label="Privacy Policy">
				Privacy Policy
			</Link>
			<a href="https://www.interpride.org/">InterPride</a>
			<a href="http://epoa.eu/">EPOA</a>
		</span>
	</S.Footer>
);

export default Footer;
