// Index: Semantic Props written to JavaScript file.

import { writeFileSync } from "node:fs"
import * as props from "./export";

/** JSON export data. */
const data: string = JSON.stringify(props);

writeFileSync("dist/index.js", `export default ${data}`, {
	encoding: "utf8",
	flag: "w"
});