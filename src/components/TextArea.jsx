import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { urlFor } from "../utils/sanity";

const Image = styled.img`
	max-height: 400px;
	width: 100%;
	object-fit: cover;
`;

const serializers = {
	types: {
		figure(props) {
			return (
				<Image
					src={urlFor(props.node)
						.height(400)
						.url()}
				/>
			);
		}
	}
};

export default function TextArea({ text, ...rest }) {
	return <BlockContent {...rest} blocks={text} serializers={serializers} />;
}
