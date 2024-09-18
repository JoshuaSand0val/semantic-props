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

/** Calculates percentage from value, min and max. */
const percentage = (min: number, value: number, max: number): string => {
	return `clamp(0, ${(value - min) / (max - min)}, 1)`;
};

// Define breakpoint range Semantic Props:
for (const [start, min] of Object.entries(breakpoints)) {
	for (const [end, max] of Object.entries(breakpoints)) {
		// Continue if breakpoints are incompatible:
		if (min >= max) continue;

		// Update Semantic Props breakpoint ranges:
		semantic({
			[`--${start}-to-${end}-vw`](update: Function) {
				addEventListener("resize", () => update(percentage(min, innerWidth, max)));
				dispatchEvent(new Event("resize"));
			},
			[`--${start}-to-${end}-vh`](update: Function) {
				addEventListener("resize", () => update(percentage(min, innerHeight, max)));
				dispatchEvent(new Event("resize"));
			}
		});
	}
}

export default breakpoints;