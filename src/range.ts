// Semantic Props used for calculating value ranges.

import semantic from "./semantic.js";

/** Calculates range from value, min and max. */
const range = (min: number, value: number, max: number): string => {
	return Math.min(Math.max((value - min) / (max - min), 0), 1).toFixed(2);
};

/** Updates range Semantic Props. */
const update = () => semantic({
	"--vw-range": range(160, innerWidth, 1920),
	"--vh-range": range(160, innerHeight, 1920)
});

// Start updating Semantic Props:
addEventListener("resize", update);
update();