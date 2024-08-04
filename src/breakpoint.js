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

	/** Element inline CSS min-inline-size state. @type {string|null} */
	let minInlineSize = null;

	/** Adds appropriate breakpoint class for current container width. @type {ResizeObserver} */
	const breakpointObserver = new ResizeObserver(entries => {
		for (const entry of entries) {
			/** Resized Semantic Props element. @type {Element} */
			const element = entry.target;

			// Reset all breakpoint classes on element:
			element.classList.remove(...breakpoints);

			/** Element CSS inline-size. @type {string} */
			const inlineSize = getComputedStyle(element).getPropertyValue("inline-size");

			// Set element inline CSS min-inline-size state:
			minInlineSize ??= element.style.minInlineSize;

			// Loop through all breakpoints and add appropriate classes:
			for (const prop of breakpoints) {
				// Set element CSS min-inline-size to calculate remainder from breakpoint:
				element.style.minInlineSize = `calc(${inlineSize} - var(${prop}))`;

				// Add class when element is at least breakpoint size:
				if (getComputedStyle(element).getPropertyValue("min-inline-size") !== "0px") {
					element.classList.add(prop);
				}
			}

			// Reset element inline CSS min-inline-size:
			element.style.minInlineSize = minInlineSize;

			// Nullify min-inline-size inline CSS state:
			minInlineSize = null;
		}
	});

	// Observe resize of all Semantic Props elements:
	breakpointObserver.observe(element);
}