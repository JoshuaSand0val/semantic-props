// Semantic Props used for container inline-size.

import { breakpoints } from "./range.js";
import semantic from "./semantic.js";

/** Container Semantic Props. */
const props: { [key: string]: string } = {};

// Define Semantic Props containers:
for (const [prop, length] of Object.entries(breakpoints)) {
	props[`--${prop}-container`] = `${length}px`;
}

// Define Semantic Props styles:
semantic(props);