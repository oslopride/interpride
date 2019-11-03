import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
	projectId: "vkt86e4g",
	dataset: "production"
});

export function urlFor(source) {
	return builder.image(source);
}
