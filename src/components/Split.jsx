import React from "react";
import TextArea from "./TextArea";
import { urlFor } from "../utils/sanity";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 1200px;
	margin: 0 auto;
`;

const Image = styled.img`
	max-height: 40vh;
	width: 500px;
	flex-grow: 1;
	object-fit: cover;
	margin: ${rhythm(1)};
`;

const SplitTextArea = styled(TextArea)`
	width: 500px;
	flex-grow: 1;
	margin: ${rhythm(1)};

	h2 {
		color: #c63e3a;
	}
`;

export default function Split({ elements }) {
	return (
		<Wrapper>
			{elements.map(element => {
				switch (element._type) {
					case "textArea":
						return <SplitTextArea key={element._key} {...element} />;
					case "figure":
						return (
							<Image
								key={element._key}
								src={urlFor(element)
									.maxWidth(800)
									.url()}
							/>
						);
				}
			})}
		</Wrapper>
	);
}
