// Breakpoint: Adds semantic breakpoint classes based on container inline size.

// Prevent ReferenceError in Node.js:
if (typeof window !== "undefined") {
	/** Names of custom property or class breakpoints. @type {string[]} */
	const breakpoints = [
		"--2xs-breakpoint", "--xs-breakpoint",
		"--sm-breakpoint", "--md-breakpoint", "--lg-breakpoint",
		"--xl-breakpoint", "--2xl-breakpoint", "--3xl-breakpoint"
	];

	/** Adds appropriate breakpoint class for current container width. @type {ResizeObserver} */
	const breakpointObserver = new ResizeObserver(entries => {
		for (const entry of entries) {
			/** Resized semantic-props element. @type {Element} */
			const element = entry.target;

			// Reset all breakpoint classes on element:
			element.classList.remove(...breakpoints);

			// Loop through all breakpoints and add appropriate classes:
			for (const prop of breakpoints) {
				/** Current breakpoint width. @type {string} */
				const breakpointWidth = getComputedStyle(element).getPropertyValue(prop);

				// Add breakpoint classes when valid:
				if (entry.borderBoxSize[0].inlineSize >= parseFloat(breakpointWidth)) {
					element.classList.add(prop);
				}
			}
		}
	});

	// Observe resize of all Semantic Props elements:
	addEventListener("DOMContentLoaded", () => {
		for (const element of document.querySelectorAll(".--semantic")) {
			breakpointObserver.observe(element);
		}
	});
}