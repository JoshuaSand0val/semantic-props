// Component: Semantic Props Web Component.
import breakpoint from "./breakpoint.js";
import color from "./color.js";

// Prevent ReferenceError in Node.js:
if (typeof window !== "undefined") {
	/** Semantic Props Web Component. @type {HTMLElement} */
	class SemanticProps extends HTMLElement {
		/** Executes when web component has connected. */
		connectedCallback() {
			// Create element shadow DOM:
			const shadow = this.attachShadow({ mode: "open" });

			// Create content slot element:
			const slot = document.createElement("slot");

			// Add slot to component:
			shadow.appendChild(slot);

			/** MutationObserver for ensuring classes get added to component. */
			const semanticObserver = new MutationObserver(() => {
				breakpoint(this);
				color(this);
			});

			// Start observing this element:
			semanticObserver.observe(this, {
				subtree: true,
				childList: true
			});
		}
	}

	// Define "semantic-props" custom element:
	customElements.define("semantic-props", SemanticProps);
}