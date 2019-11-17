/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		"gatsby-plugin-styled-components",
		{
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
		},
		{
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vkt86e4g",
        dataset: "production",
        token: process.env.MY_SANITY_TOKEN,
      }
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-54270444-2",
				head: false,
				anonymize: true,
				pageTransitionDelay: 0,
				siteSpeedSampleRate: 10
			}
		}
	]
}
