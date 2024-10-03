// Import: Main Semantic Props JavaScript import.

import "./import.css";

import breakpoint from "./breakpoint.js";
import color from "./color.js";

/**
 * Activates Semantic Props elements, adding custom property classes.
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

	/** Activates new Semantic Props elements. */
	const observer = new MutationObserver(records => {
		for (const { target, oldValue } of records) {
			if (!oldValue || !oldValue.includes("--semantic")) {
				activate(target);
			}
		}
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