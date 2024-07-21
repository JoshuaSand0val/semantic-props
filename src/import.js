// Import: Main Semantic Props JavaScript import.
import breakpoint from "./breakpoint.js";
import color from "./color.js";

/** Adds classes to all Semantic Props elements. */
export default function semantic() {
	/**
	 * Adds Semantic Props classes to element.
	 * @param {HTMLElement} element Element to add Semantic Props classes to.
	 */
	const initialize = (element) => {
		breakpoint(element);
		color(element);
	};

	/** MutationObserver for adding classes to Semantic Props elements. */
	const semanticObserver = new MutationObserver(records => {
		for (const record of records) {
			/** Potential Semantic Props element. @type {HTMLElement} */
			const element = record.target;

			// Continue if class attribute was not mutated:
			if (record.type !== "attributes") {
				continue;
			}

			// Add classes only to new Semantic Props elements:
			if (!record.oldValue || !record.oldValue.includes("--semantic")) {
				if (element.classList.contains("--semantic")) {
					initialize(element);
				}
			}
		}
	});

	// Observe document for new Semantic Props elements:
	semanticObserver.observe(document.documentElement, {
		subtree: true,
		childList: true,
		attributes: true,
		attributeFilter: ["class"],
		attributeOldValue: true
	});

	// Add classes to existing Semantic Props elements:
	for (const element of document.querySelectorAll(".--semantic")) {
		initialize(element);
	}
}

// Attempt to initialize Semantic Props on DOM content load:
if (typeof window !== "undefined") {
	addEventListener("DOMContentLoaded", semantic);
}