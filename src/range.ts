// Semantic Props used for calculating breakpoint ranges.

import semantic from "./semantic.js";

/** Semantic Props breakpoints to lengths. */
const breakpoints: { [key: string]: number } = {
	"3xs": 0,
	"2xs": 180,
	"xs": 240,
	"sm": 360,
	"md": 480,
	"lg": 768,
	"xl": 1024,
	"2xl": 1440,
	"3xl": 1600
};

/** Calculates range from value, min and max. */
const range = (min: number, value: number, max: number): string => {
	return Math.min(Math.max((value - min) / (max - min), 0), 1).toFixed(2);
};

// Define breakpoint range Semantic Props:
for (const [start, min] of Object.entries(breakpoints)) {
	for (const [end, max] of Object.entries(breakpoints)) {
		// Continue if breakpoints are incompatible:
		if (min >= max) continue;

		/** Updates Semantic Props breakpoint range. */
		const update = () => semantic({
			[`--${start}-to-${end}-vw`]: range(min, innerWidth, max),
			[`--${start}-to-${end}-vh`]: range(min, innerHeight, max)
		});

		// Begin listening for Semantic Props:
		addEventListener("resize", update);
		update();
	}
}