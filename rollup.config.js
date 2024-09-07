// Rollup Config: Configuration file for rollup bundling of source code.

import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

import terser from "@rollup/plugin-terser";

export default {
	input: "src/import.js",
	output: {
		file: "dist/import.js",
		format: "es"
	},
	plugins: [
		postcss({
			plugins: [
				postcssImport,
				postcssPresetEnv({
					features: {
						"light-dark-function": false
					}
				}),
				cssnano({
					preset: "default"
				})
			]
		}),
		terser()
	]
};