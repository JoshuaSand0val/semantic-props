// Prevent ReferenceError in Node.js:
if (typeof window !== "undefined") {	
	/** Semantic Props Web Component. @type {HTMLElement} */
	class SemanticProps extends HTMLElement {
		constructor() {
			super();

			// Create element shadow DOM:
			const shadow = this.attachShadow({ mode: "open" });

			// Create content slot element:
			const slot = document.createElement("slot");

			// Add slot to component:
			shadow.appendChild(slot);
		}

		/** Adds appropriate breakpoint attributes for current container width. @type {ResizeObserver} */
		static breakpoint = new ResizeObserver(entries => {
			/** Names of breakpoint is attributes. @type {string[]} */
			const breakpoints = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];

			// Loop through all semantic-props elements adding attributes:
			for (const entry of entries) {
				/** Resized semantic-props element. @type {Element} */
				const element = entry.target;

				// Reset all breakpoint attributes on element:
				breakpoints.forEach(attr => element.removeAttribute(`is-${attr}-breakpoint`));

				// Loop through all breakpoints and add appropriate attributes:
				for (const prop of breakpoints) {
					/** Current breakpoint width. @type {string} */
					const breakpointWidth = getComputedStyle(element).getPropertyValue(`--${prop}-breakpoint`);

					// Add breakpoint is attributes when valid:
					if (entry.borderBoxSize[0].inlineSize >= parseFloat(breakpointWidth)) {
						element.setAttribute(`is-${prop}-breakpoint`, "");
					}
				}
			}
		});

		/** Adds appropriate color attribute for user color scheme. */
		static color(component) {
			/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
			const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

			/** Event listener for color scheme matchMedia() event. */
			const listener = () => {
				/** Whether user has selected to prefer dark color scheme. @type {boolean} */
				const isDarkMode = darkModeQuery.matches;

				// Reset all color attributes on container:
				["light-color", "dark-color"].forEach(attr => component.removeAttribute(`is-${attr}`));

				// Set appropriate color attribute based on preferred colors:
				component.setAttribute(isDarkMode ? "is-dark-color" : "is-light-color", "");
			};

			// Watch for preferred color scheme changes:
			darkModeQuery.addEventListener("change", listener);

			// Initially call event listener:
			listener();
		}

		/** Executes when web component has connected. */
		connectedCallback() {
			// Start observing breakpoints on this component:
			this.constructor.breakpoint.observe(this);

			// Start listening for color scheme changes for this component:
			this.constructor.color(this);
		}
	}

	// Define "semantic-props" custom element:
	customElements.define("semantic-props", SemanticProps);
}