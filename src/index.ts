// Index: Semantic Props written to JavaScript file.

import { writeFileSync } from "node:fs"
import * as props from "./export";

/** File export data. */
let data: string = "";

for (const [key, value] of Object.entries(props)) {
	data += `export const ${key} = ${JSON.stringify(value)};\n`;
}

writeFileSync("dist/index.js", data, {
	encoding: "utf8",
	flag: "w"
});