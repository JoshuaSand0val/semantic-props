// Rollup Config: Configuration file for rollup bundling of source code.

import postcss from "rollup-plugin-postcss";

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
			extract: "import.css"
		}),
		terser()
	]
};