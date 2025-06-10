// Semantic Props for font properties.

import type { Property } from "csstype";

/** Semantic Props for CSS `font-family` property value. */
export const family: Record<string, Property.FontFamily> = {
	body: "system-ui, sans-serif",
	mono: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
};

Object.assign(family, {
	display: family.body,
	accent: family.body
});

/** Semantic Props for CSS `font-weight` property value. */
export const weight: Record<string, Property.FontWeight> = {
	thin: 200,
	light: 300,
	regular: 500,
	bold: 700,
	heavy: 900
};

/** Semantic Props for CSS `letter-spacing` property value. */
export const letterSpacing: Record<string, Property.LetterSpacing> = {
	tightest: "-0.1em",
	tighter: "-0.075em",
	tight: "-0.05em",
	normal: "normal",
	wide: "0.1em",
	wider: "0.2em",
	widest: "0.3em"
};

/** Semantic Props for CSS `line-height` property value. */
export const line: Record<string, Property.LineHeight> = {
	shortest: 1.05,
	shorter: 1.15,
	short: 1.25,
	normal: 1.6,
	tall: 2,
	taller: 2.5,
	tallest: 3,
};

/** Semantic Props for CSS `word-spacing` property value. */
export const wordSpacing: Record<string, Property.WordSpacing> = {
	tightest: "-0.15em",
	tighter: "-0.125em",
	tight: "-0.1em",
	normal: "normal",
	wide: "0.1em",
	wider: "0.2em",
	widest: "0.3em"
};