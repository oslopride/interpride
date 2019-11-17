import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function({ locale }) {
	const data = useStaticQuery(
		graphql`
			query SanityNavbarConfigQuery {
				sanityConfig(_id: { eq: "global-config" }) {
					navbar {
						title {
							en
							es
							fr
						}
						slug {
							current
						}
					}
				}
			}
		`
	);

	const prefix = locale === "en" ? "/" : `/${locale}/`;

	const links = (data.sanityConfig.navbar || []).map(page => (
		<li key={page.slug.current}>
			<Link
				to={`${prefix}${page.slug.current}`}
				aria-label={page.title[locale]}
			>
				{page.title[locale] || page.title.en}
			</Link>
		</li>
	));

	return (
		<S.Nav>
			<ul>{links}</ul>
		</S.Nav>
	);
}
