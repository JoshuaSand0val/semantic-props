// Semantic Props for scaling responsive layouts.

import stylesheet from "./stylesheet.js";

/** Responsive scaling Semantic Props. */
const props: Parameters<typeof stylesheet>[0] = {};

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
	"3xl": 1600,
	"4xl": 1920
};

/** Calculates percentage from value, min and max. */
const percentage = (min: number, value: number, max: number): number => {
	return Math.min(Math.max((value - min) / (max - min), 0), 1);
};

// Define breakpoint range Semantic Props:
for (const [start, min] of Object.entries(breakpoints)) {
	for (const [end, max] of Object.entries(breakpoints)) {
		// Continue if breakpoints are incompatible:
		if (min >= max) continue;

		// Assign Semantic Props breakpoint ranges:
		Object.assign(props, {
			[`--inline-${start}-to-${end}`](update: Function) {
				addEventListener("resize", () => update(percentage(min, innerWidth, max)));
				dispatchEvent(new Event("resize"));
			},
			[`--block-${start}-to-${end}`](update: Function) {
				addEventListener("resize", () => update(percentage(min, innerHeight, max)));
				dispatchEvent(new Event("resize"));
			}
		});
	}
}

// Define Semantic Props:
stylesheet(props);