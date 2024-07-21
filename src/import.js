// Import: Main Semantic Props JavaScript import.
import breakpoint from "./breakpoint.js";
import color from "./color.js";

/**
 * Adds custom property classes to all Semantic Props elements.
 * @type {Function}
 * @preserve
 */
export default function semantic() {
	/** Adds Semantic Props classes to elements. */
	const initialize = () => {
		for (const element of document.querySelectorAll(".--semantic")) {
			breakpoint(element);
			color(element);
		}
	};

	// Initialize Semantic Props:
	initialize();

	/** MutationObserver for adding classes to Semantic Props elements. */
	const semanticObserver = new MutationObserver(initialize);

	// Observe document for any mutations to elements:
	semanticObserver.observe(document.documentElement, {
		subtree: true,
		childList: true
	});
}

// Attempt to initialize Semantic Props on DOM content load:
if (typeof window !== "undefined") {
	addEventListener("DOMContentLoaded", semantic);
}