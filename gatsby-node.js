async function createPages(graphql, actions, reporter) {
	const { createPage } = actions;

	const result = await graphql(`
		query AllSanityPagesQuery {
			allSanityPage {
				nodes {
					id
					slug {
						current
					}
				}
			}
		}
	`);

	if (result.errors) {
		throw result.errors;
	}

	const pages = result.data.allSanityPage.nodes || [];

	pages.forEach((page, index) => {
		const path = `/${page.slug.current}`;

		reporter.info(`Creating page ${path} (${index + 1}/${pages.length})`);

		createPage({
			path,
			component: require.resolve("./src/templates/page.jsx"),
			context: { id: page.id }
		});
	});
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	await createPages(graphql, actions, reporter);
};
