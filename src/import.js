// Import: Main Semantic Props JavaScript import.
import breakpoint from "./breakpoint.js";
import color from "./color.js";

/**
 * Adds custom property classes to all Semantic Props elements.
 * @type {Function}
 * @preserve
 */
export default function semantic() {
	/**
	 * Adds classes to Semantic Props elements in container.
	 * @param {Element} container Container element to add classes to itself and children.
	 */
	const initialize = container => {
		for (const element of [container, ...container.getElementsByTagName("*")]) {
			if (element.classList.contains("--semantic")) {
				breakpoint(element);
				color(element);
			}
		}
	};

	// Initialize Semantic Props:
	initialize(document.documentElement);

	/** MutationObserver for adding classes to Semantic Props elements. */
	const semanticObserver = new MutationObserver(records => {
		for (const record of records) {
			// Add classes only to new Semantic Props elements:
			if (!record.oldValue || !record.oldValue.includes("--semantic")) {
				initialize(record.target);
			}
		}
	});

	// Observe document for any mutations to elements:
	semanticObserver.observe(document.documentElement, {
		subtree: true,
		childList: true,
		attributeFilter: ["class"],
		attributeOldValue: true
	});
}

// Attempt to initialize Semantic Props on DOM content load:
if (typeof window !== "undefined") {
	addEventListener("DOMContentLoaded", semantic);
}