import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import TextArea from "../components/TextArea";
import Hero from "../components/Hero";
import Split from "../components/Split";
import { rhythm } from "../utils/typography";
import { urlFor } from "../utils/sanity";

const TextAreaWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: ${rhythm(1)};
`;

const FullWidthImage = styled.img`
	max-height: 350px;
	width: 100%;
	object-fit: cover;
`;

export default function Page({ data: { page } }) {
	const layout = page._rawLayout.map(section => {
		switch (section._type) {
			case "banner":
				return <PageTitle key={section._key} title={section.text} />;
			case "textArea":
				return (
					<TextAreaWrapper key={section._key}>
						<TextArea {...section} />
					</TextAreaWrapper>
				);
			case "hero":
				return <Hero key={section._key} {...section} />;
			case "split":
				return <Split key={section._key} {...section} />;
			case "image":
				return (
					<FullWidthImage
						src={urlFor(section)
							.height(350)
							.width(1200)
							.url()}
						key={section._key}
					/>
				);
			default:
				console.log(`Unknown layout type: "${section._type}"`);
				return <div key={section._key} />;
		}
	});

	return <Layout>{layout}</Layout>;
}

export const query = graphql`
	query PageTemplateQuery($id: String!) {
		page: sanityPage(id: { eq: $id }) {
			title
			_rawLayout(resolveReferences: { maxDepth: 10 })
		}
	}
`;
