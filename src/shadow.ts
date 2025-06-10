// Semantic Props for CSS text-shadow, box-shadow and drop-shadow filter.

import type { Property } from "csstype";

/** Semantic Props for CSS `text-shadow` property value. */
export const textShadow: Record<string, Property.TextShadow> = {
	lightest: "0 2px 3px rgb(0 0 0 / 0.15)",
	lighter: "0 5px 4px rgb(0 0 0 / 0.15)",
	light: "0 7px 5px rgb(0 0 0 / 0.15)",
	medium: "0 8px 8px rgb(0 0 0 / 0.225)",
	heavy: "0 8px 8px rgb(0 0 0 / 0.3)",
	heavier: "0 9px 9px rgb(0 0 0 / 0.3)",
	heaviest: "0 10px 10px rgb(0 0 0 / 0.3)"
};

/** Semantic Props for CSS `box-shadow` property value. */
export const boxShadow: Record<string, Property.BoxShadow> = {
	lightest: "0 2px 3px rgb(0 0 0 / 0.1)",
	lighter: "0 5px 4px rgb(0 0 0 / 0.1)",
	light: "0 7px 5px rgb(0 0 0 / 0.1)",
	medium: "0 8px 8px rgb(0 0 0 / 0.15)",
	heavy: "0 8px 8px rgb(0 0 0 / 0.2)",
	heavier: "0 9px 9px rgb(0 0 0 / 0.2)",
	heaviest: "0 10px 10px rgb(0 0 0 / 0.2)",
	lightestInset: "inset 0 2px 3px rgb(0 0 0 / 0.1)",
	lighterInset: "inset 0 5px 4px rgb(0 0 0 / 0.1)",
	lightInset: "inset 0 7px 5px rgb(0 0 0 / 0.1)",
	mediumInset: "inset 0 8px 8px rgb(0 0 0 / 0.15)",
	heavyInset: "inset 0 8px 8px rgb(0 0 0 / 0.2)",
	heavierInset: "inset 0 9px 9px rgb(0 0 0 / 0.2)",
	heaviestInset: "inset 0 10px 10px rgb(0 0 0 / 0.2)"
};

/** Semantic Props for CSS `filter` `drop-shadow()` function. */
export const dropShadow: Record<string, Property.Filter> = {
	lightest: "drop-shadow(0 2px 3px rgb(0 0 0 / 0.1))",
	lighter: "drop-shadow(0 5px 4px rgb(0 0 0 / 0.1))",
	light: "drop-shadow(0 7px 5px rgb(0 0 0 / 0.1))",
	medium: "drop-shadow(0 8px 8px rgb(0 0 0 / 0.15))",
	heavy: "drop-shadow(0 8px 8px rgb(0 0 0 / 0.2))",
	heavier: "drop-shadow(0 9px 9px rgb(0 0 0 / 0.2))",
	heaviest: "drop-shadow(0 10px 10px rgb(0 0 0 / 0.2))"
};