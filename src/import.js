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
	const activate = container => {
		for (const element of [container, ...container.getElementsByTagName("*")]) {
			if (element.matches(".--semantic")) {
				breakpoint(element);
				color(element);
			}
		}
	};

	// Activate existing Semantic Props elements:
	activate(document.documentElement);

	/** Delay for MutationObserver to complete. @type {number|undefined} */
	let observerDelay;

	/** Activates new or mutated Semantic Props elements. */
	const observer = new MutationObserver(records => {
		// Reset MutationObserver completion delay:
		clearTimeout(observerDelay);
		observerDelay = setTimeout(() => {
			for (const record of records) {
				// Only activate parent of new elements:
				if (!record.oldValue || !record.oldValue.includes("--semantic")) {
					activate(record.target);
					continue;
				}
				// Else activate children of existing elements:
				for (const child of record.target.children) {
					activate(child);
				}
			}
		}, 10);
	});

	// Observe document for any mutations to elements:
	observer.observe(document.documentElement, {
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