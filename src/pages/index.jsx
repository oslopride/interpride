import React from "react";
import { graphql } from "gatsby";
import Page from "../templates/page";

export default function FrontPage({ data: { frontPage } }) {
	return <Page data={{ page: frontPage }} />;
}

export const query = graphql`
	query SanityFrontPagesQuery {
		frontPage: sanityFrontPage(_id: { eq: "global-frontPage" }) {
			_rawLayout
		}
	}
`;
