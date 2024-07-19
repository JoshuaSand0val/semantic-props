// Rollup Config: Configuration file for rollup bundling of source code.

import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";

export default {
	input: "src/import.js",
	output: {
		file: "dist/import.js",
		format: "es"
	},
	plugins: [
		terser(),
		css({
			minify: true,
			output: "import.css"
		})
	]
};