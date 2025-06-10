// Semantic Props for the CSS z-index property.

import type { Property } from "csstype";

/** Semantic Props for CSS `z-index` property value. */
export const z: Record<string, Property.ZIndex> = {
	bottom: -1000,
	relative: 1000,
	absolute: 2000,
	sticky: 3000,
	fixed: 4000,
	top: 5000
};