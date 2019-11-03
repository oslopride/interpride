import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function({ data: { page } }) {
	return (
		<Layout>
			<h1>{page.title}</h1>
		</Layout>
	);
}

export const query = graphql`
	query PageTemplateQuery($id: String!) {
		page: sanityPage(id: { eq: $id }) {
			title
			_rawLayout
		}
	}
`;
