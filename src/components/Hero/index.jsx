import React from "react";
import * as S from "./styles";
import BlockContent from "@sanity/block-content-to-react";

function Promotion({ heading, content }) {
	return (
		<S.ContentBox>
			<h2>{heading}</h2>
			<BlockContent blocks={content} />
		</S.ContentBox>
	);
}

export default function Hero({ title, subtitle, promotions }) {
	return (
		<S.Hero>
			<S.Title>
				<h1>{title}</h1>
				<h1>{subtitle}</h1>
			</S.Title>

			<S.Content>
				{promotions.map(promotion => (
					<Promotion key={promotion._key} {...promotion} />
				))}
			</S.Content>
		</S.Hero>
	);
}
