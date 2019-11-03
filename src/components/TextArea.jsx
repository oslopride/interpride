import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {};

export default function TextArea({ text, ...rest }) {
	return <BlockContent {...rest} blocks={text} serializers={serializers} />;
}
