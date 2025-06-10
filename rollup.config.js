// Rollup Config: Configuration file for rollup bundling of source code.

import { dts } from "rollup-plugin-dts";

export default {
	input: "src/import.ts",
	output: {
		file: "dist/import.d.ts",
		format: "es"
	},
	plugins: [dts()]
}