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
	
		/** Adds appropriate breakpoint class for current container width. @type {ResizeObserver} */
		static breakpoint = new ResizeObserver(entries => {
			/** Names of custom property or class breakpoints. @type {string[]} */
			const breakpoints = [
				"--2xs-breakpoint", "--xs-breakpoint",
				"--sm-breakpoint", "--md-breakpoint", "--lg-breakpoint",
				"--xl-breakpoint", "--2xl-breakpoint", "--3xl-breakpoint"
			];
	
			// Loop through all semantic-props elements adding classes:
			for (const entry of entries) {
				/** Resized semantic-props element. @type {Element} */
				const element = entry.target;
	
				// Reset all breakpoint classes on element:
				element.classList.remove(...breakpoints);
	
				// Loop through all breakpoints and add appropriate classes:
				for (const prop of breakpoints) {
					/** Current breakpoint width. @type {string} */
					const breakpointWidth = getComputedStyle(element).getPropertyValue(prop);
	
					// Add breakpoint classes when valid.
					if (entry.borderBoxSize[0].inlineSize >= parseFloat(breakpointWidth)) {
						element.classList.add(prop);
					}
				}
			}
		});
	
		/** Adds appropriate color class for user color scheme. */
		static color(component) {
			/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
			const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");
	
			/** Event listener for color scheme matchMedia() event. */
			const listener = () => {
				/** Whether user has selected to prefer dark color scheme. @type {boolean} */
				const isDarkMode = darkModeQuery.matches;
		
				// Reset all color classes on container:
				component.classList.remove("--light-color", "--dark-color");
		
				// Set appropriate color class based on preferred colors:
				component.classList.add(isDarkMode ? "--dark-color" : "--light-color");
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