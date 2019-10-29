import Typography from "typography";

const typography = new Typography({
	scaleRatio: 2,
	googleFonts: [
		{
			name: "Montserrat",
			styles: ["400"]
		},
		{
			name: "Open Sans",
			styles: ["400", "400i", "700", "700i"]
		}
	],
	headerFontFamily: ["Montserrat", "sans-serif"],
	bodyFontFamily: ["Open Sans", "sans-serif"],
	headerWeight: 400,
	boldWeight: 700
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
