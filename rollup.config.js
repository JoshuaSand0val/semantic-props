// Rollup Config: Configuration file for rollup bundling of source code.

import { dts } from "rollup-plugin-dts";

export default {
	input: "src/export.ts",
	output: {
		file: "dist/index.d.ts",
		format: "es"
	},
	plugins: [dts()]
}