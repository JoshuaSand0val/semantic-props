// Import: Main Semantic Props JavaScript import.
import "./breakpoint.css";
import "./color.css";
import "./deprecated.css";
import "./font.css";
import "./layer.css";
import "./safe.css";
import "./size.css";
import "./timing.css";

import breakpoint from "./breakpoint.js";
import color from "./color.js";

/**
 * Initializes and reevaluates Semantic Props element styles.
 * @type {Function}
 * @preserve
 */
export default function semantic() {
	/**
	 * Toggles Semantic Props classes to element.
	 * @param {Element} element Element to toggle classes on.
	 */
	const initialize = element => {
		breakpoint.initialize(element);
		color.initialize(element);
	};

	/**
	 * Removes Semantic Props classes on element.
	 * @param {Element} element Element to remove classes off of.
	 */
	const deactivate = element => {
		breakpoint.deactivate(element);
		color.deactivate(element);
	};

	// Initialize existing Semantic Props elements:
	for (const element of document.getElementsByClassName("--semantic")) {
		initialize(element);
	}

	/** Initialize/Deactivate mutated Semantic Props elements. */
	const observer = new MutationObserver(records => {
		for (const { type, target, oldValue } of records) {
			/** If target is currently a Semantic Props element. @type {boolean} */
			const currSemantic = target.classList.contains("--semantic");

			/** If target previously was a Semantic Props element. @type {boolean} */
			const prevSemantic = oldValue?.includes("--semantic");

			// Initialize if a current and new Semantic Props element:
			if (currSemantic && !prevSemantic) {
				initialize(target);
			}

			// Deactivate if no longer Semantic Props element:
			if (!currSemantic && prevSemantic) {
				deactivate(target);
			}

			// Initialize added child Semantic Props elements of target:
			if (type === "childList") {
				for (const element of target.getElementsByClassName("--semantic")) {
					initialize(element);
				}
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

// Initialize Semantic Props elements:
if (typeof window !== "undefined") semantic();