// Export: Export Semantic Props to distributable file.

import { writeFileSync, type WriteFileOptions } from "node:fs";
import * as props from "./import";

/** JSON export data. */
const data: string = JSON.stringify(props);

/** Options for Node.js `writeFileSync`. */
const options: WriteFileOptions = {
	encoding: "utf8",
	flag: "w"
};

// Write JSON data to distribution file:
writeFileSync("dist/import.json", data, options);