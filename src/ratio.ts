// Semantic Props for CSS aspect-ratio property.

import type { Property } from "csstype";

/** Semantic Props for CSS `aspect-ratio` property value. */
export const ratio: Record<string, Property.AspectRatio> = {
	square: "1 / 1",
	landscape: "4 / 3",
	portrait: "3 / 4",
	video: "16 / 9",
	wide: "21 / 9"
};