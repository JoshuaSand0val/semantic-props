// Semantic Props for timing animations.

import type { Property } from "csstype";

/** Semantic Props for CSS `<easing-function>` type. */
export const easing: Record<string, Property.AnimationTimingFunction> = {
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out"
};

/** Semantic Props for CSS `<time>` type. */
export const time: Record<string, Property.AnimationDuration> = {
	fastest: "75ms",
	faster: "100ms",
	fast: "150ms",
	normal: "300ms",
	slow: "500ms",
	slower: "750ms",
	slowest: "1s"
};