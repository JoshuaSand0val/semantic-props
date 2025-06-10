// Semantic Props for CSS filter values.

import type { Property } from "csstype";

/** Semantic Props for CSS `filter` `blur()` function. */
export const blur: Record<string, Property.Filter> = {
	lightest: "blur(2px)",
	lighter: "blur(4px)",
	light: "blur(6px)",
	medium: "blur(8px)",
	heavy: "blur(16px)",
	heavier: "blur(24px)",
	heaviest: "blur(32px)"
};

/** Semantic Props for CSS `filter` `brightness()` function. */
export const brightness: Record<string, Property.Filter> = {
	lowest: "brightness(0.5)",
	lower: "brightness(0.75)",
	low: "brightness(0.875)",
	high: "brightness(1.125)",
	higher: "brightness(1.25)",
	highest: "brightness(1.5)"
};

/** Semantic Props for CSS `filter` `contrast()` function. */
export const contrast: Record<string, Property.Filter> = {
	lowest: "contrast(0.25)",
	lower: "contrast(0.5)",
	low: "contrast(0.75)",
	high: "contrast(1.25)",
	higher: "contrast(1.5)",
	highest: "contrast(2)"
}

/** Semantic Props for CSS `filter` `saturate()` function. */
export const saturate: Record<string, Property.Filter> = {
	lowest: "saturate(0.25)",
	lower: "saturate(0.5)",
	low: "saturate(0.75)",
	high: "saturate(1.25)",
	higher: "saturate(1.5)",
	highest: "saturate(2)"
};