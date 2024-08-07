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

	/** Delay for ResizeObserver to complete. @type {number|undefined} */
	let observerDelay;

	/** Adds appropriate breakpoint class for current container inline-size. @type {ResizeObserver} */
	const breakpointObserver = new ResizeObserver(() => {
		// Reset ResizeObserver completion delay:
		clearTimeout(observerDelay);
		observerDelay = setTimeout(() => {
			/** Element inline CSS min-inline-size. @type {string} */
			const minInlineSize = element.style.minInlineSize;

			/** Element CSS inline-size. @type {string} */
			const inlineSize = getComputedStyle(element).getPropertyValue("inline-size");

			// Loop through all breakpoints and add appropriate classes:
			for (const prop of breakpoints) {
				// Set element CSS min-inline-size to calculate remainder from breakpoint:
				element.style.minInlineSize = `min(var(${prop}) - ${inlineSize}, ${inlineSize})`;

				// Only add class when element meets breakpoint size:
				if (getComputedStyle(element).getPropertyValue("min-inline-size") !== "0px") {
					element.classList.remove(prop);
				}
				else {
					element.classList.add(prop);
				}
			}

			// Reset element inline CSS min-inline-size:
			element.style.minInlineSize = minInlineSize;
		}, 3);
	});

	// Observe resize of all Semantic Props elements:
	breakpointObserver.observe(element);
}