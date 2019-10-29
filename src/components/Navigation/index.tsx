import React from "react";
import { Link } from "gatsby";
import * as S from "./styles";

const Navigation = () => (
	<S.Nav>
		<ul>
			<li>
				<Link to="/venue" aria-label="Information on the venue">
					Venue
				</Link>
			</li>
			<li>
				<Link
					to="/registration"
					aria-label="Registration and pricing information"
				>
					Registration
				</Link>
			</li>
			<li>
				<Link to="/schedule" aria-label="The conference schedule">
					Schedule
				</Link>
			</li>
		</ul>
	</S.Nav>
);

export default Navigation;
