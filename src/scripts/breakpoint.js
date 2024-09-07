/** Names of custom property or class breakpoints. @type {string[]} */
const breakpoints = [
	"--2xs-breakpoint", "--xs-breakpoint",
	"--sm-breakpoint", "--md-breakpoint", "--lg-breakpoint",
	"--xl-breakpoint", "--2xl-breakpoint", "--3xl-breakpoint"
];

export default {
	/**
	 * Toggles Semantic Props breakpoint classes based on container inline-size.
	 * @param {Element} element Element to toggle breakpoint classes on.
	 */
	initialize(element) {
		/** Element inline CSS. @type {string} */
		const style = element.getAttribute("style") ?? "";

		// Set element CSS background-size to calculate breakpoint:
		element.style.background = breakpoints.map(prop => `url() 0/var(${prop})`).join(",");

		/** Get breakpoint CSS pixel values. @type {string[]} */
		const values = getComputedStyle(element).getPropertyValue("background-size").split(",");

		// Reset element inline CSS:
		element.setAttribute("style", style);

		/** CSS pixel sizes of breakpoints. @type {number[]} */
		const sizes = values.map(value => parseInt(value));

		/** Toggles breakpoint class for container inline-size. @type {ResizeObserver} */
		const breakpointObserver = new ResizeObserver(entries => {
			// Toggle classes for all resized elements:
			for (const { target, borderBoxSize } of entries) {
				/** Element border-box inline-size in CSS pixels. @type {number} */
				const inlineSize = borderBoxSize[0].inlineSize;

				// Loop through breakpoints toggling class when size is met:
				for (let i = 0; i < breakpoints.length; i++) {
					target.classList.toggle(breakpoints[i], inlineSize >= sizes[i]);
				}
			}
		});

		// Observe resize of element:
		breakpointObserver.observe(element);
	},
	/**
	 * Removes all Semantic Props breakpoint classes.
	 * @param {Element} element Element to remove breakpoint classes off of.
	 */
	deactivate(element) {
		element.classList.remove(...breakpoints);
	}
}