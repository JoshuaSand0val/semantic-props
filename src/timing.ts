/** Semantic Props for timing animations. */

interface props {
	/** Timing function for easing. */
	ease: string,
	/** Timing function for easing inward. */
	easeIn: string,
	/** Timing function for easing outward. */
	easeOut: string,
	/** Timing function for easing in/outward. */
	easeInOut: string,
	/** Duration for timing or delaying animations. */
	time: Record<string, `${number}ms`>
}

export const props: props = {
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",

	time: {
		fastest: "75ms",
		faster: "100ms",
		fast: "150ms",
		normal: "300ms",
		slow: "500ms",
		slower: "750ms",
		slowest: "1000ms"
	}
};