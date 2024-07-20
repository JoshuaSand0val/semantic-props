// Rollup Config: Configuration file for rollup bundling of source code.

import terser from "@rollup/plugin-terser";

export default {
	input: "src/import.js",
	output: {
		file: "dist/import.js",
		format: "es"
	},
	plugins: [terser()]
};