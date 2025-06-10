// Export: Semantic Props as default export of JavaScript file.

import { writeFileSync } from "node:fs"
import * as props from "./import";

/** JSON export data. */
const data: string = JSON.stringify(props);

writeFileSync("dist/import.js", `export default ${data}`, {
	encoding: "utf8",
	flag: "w"
});