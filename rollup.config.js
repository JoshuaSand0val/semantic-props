// Rollup Config: Configuration file for rollup bundling of source code.

import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import terser from "@rollup/plugin-terser";

export default {
	input: "src/import.ts",
	output: {
		file: "dist/import.js",
		format: "es"
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript(),
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