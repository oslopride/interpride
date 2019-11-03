import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function() {
	const data = useStaticQuery(
		graphql`
			query SanityNavbarConfigQuery {
				sanityConfig(_id: { eq: "global-config" }) {
					navbar {
						title
						slug {
							current
						}
					}
				}
			}
		`
	);

	const links = (data.sanityConfig.navbar || []).map(page => (
		<li key={page.slug.current}>
			<Link to={`/${page.slug.current}`} aria-label={page.title}>
				{page.title}
			</Link>
		</li>
	));

	return (
		<S.Nav>
			<ul>{links}</ul>
		</S.Nav>
	);
}
