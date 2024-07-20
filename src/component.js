// Component: Semantic Props Web Component.
import breakpoint from "./breakpoint.js";
import color from "./color.js";

// Prevent ReferenceError in Node.js:
if (typeof window !== "undefined") {
	/** Semantic Props Web Component. @type {HTMLElement} */
	class SemanticProps extends HTMLElement {
		constructor() {
			super();

			/** MutationObserver for ensuring classes get added to component. */
			const semanticObserver = new MutationObserver(() => {
				// Add classes to element:
				breakpoint(this);
				color(this);

				// Disconnect observer once used:
				semanticObserver.disconnect();
			});

			// Start observing this element:
			semanticObserver.observe(this, {
				subtree: true,
				childList: true,
				attributes: true,
				characterData: true
			});
		}
	}

	// Define "semantic-props" custom element:
	customElements.define("semantic-props", SemanticProps);
}