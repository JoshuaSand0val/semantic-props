/**
 * Adds semantic breakpoint classes based on container inline size.
 * @param {Element} element Element to add breakpoint classes to.
 */
export default function breakpoint(element) {
	/** Names of custom property or class breakpoints. @type {string[]} */
	const breakpoints = [
		"--2xs-breakpoint", "--xs-breakpoint",
		"--sm-breakpoint", "--md-breakpoint", "--lg-breakpoint",
		"--xl-breakpoint", "--2xl-breakpoint", "--3xl-breakpoint"
	];

	/** CSS pixel sizes of breakpoint custom properties. @type {number[]} */
	const sizes = (() => {
		/** Element inline CSS. @type {string} */
		const style = element.style;

		// Set element CSS background-size to calculate breakpoint:
		element.style.backgroundImage = breakpoints.map(() => "linear-gradient(#0000, #0000)").join(",");
		element.style.backgroundSize = breakpoints.map(prop => `var(${prop})`).join(",");

		/** Get breakpoint CSS pixel values. @type {string[]} */
		const values = getComputedStyle(element).getPropertyValue("background-size").split(",");

		// Reset element inline CSS:
		element.style = style;

		// Return breakpoint sizes as numbers:
		return values.map(value => parseInt(value));
	})();

	/** Adds appropriate breakpoint class for current container inline-size. @type {ResizeObserver} */
	const breakpointObserver = new ResizeObserver(entries => {
		for (const entry of entries) {
			/** Element border-box inline-size in CSS pixels. @type {number} */
			const inlineSize = entry.borderBoxSize[0].inlineSize;

			// Loop through all breakpoints and add appropriate classes:
			for (let i = 0; i < breakpoints.length; i++) {
				// Only add class when element meets breakpoint size:
				element.classList.toggle(breakpoints[i], inlineSize >= sizes[i]);
			}
		}
	});

	// Observe resize of element:
	breakpointObserver.observe(element);
}