// Export: Export Semantic Props to distributable file.

export * as default from "./import";

import { writeFileSync } from "node:fs";
import * as props from "./import";

/** JSON export data. */
const data: string = JSON.stringify(props);

// Write JSON data to distribution file:
writeFileSync("dist/export.js", `export default ${data}`, {
	encoding: "utf8",
	flag: "w"
});