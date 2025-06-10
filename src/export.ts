// Export: Write Semantic Props as JSON.

import { writeFileSync, type WriteFileOptions } from "node:fs"

import { props as border } from "./border";
import { props as color } from "./color";
import { props as filter } from "./filter";
import { props as font } from "./font";
import { props as opacity } from "./opacity";
import { props as ratio } from "./ratio";
import { props as safeArea } from "./safeArea";
import { props as shadow } from "./shadow";
import { props as size } from "./size";
import { props as table } from "./table";
import { props as timing } from "./timing";
import { props as transform } from "./transform";
import { props as zIndex } from "./zIndex";

/** JSON export data. */
const data: string = JSON.stringify({
	...border,
	...color,
	...filter,
	...font,
	...opacity,
	...ratio,
	...safeArea,
	...shadow,
	...size,
	...table,
	...timing,
	...transform,
	...zIndex
});

/** Options for Node.js `writeFileSync`. */
const options: WriteFileOptions = {
	encoding: "utf8",
	flag: "w"
};

writeFileSync("dist/import.json", data, options);