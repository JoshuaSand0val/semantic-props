// Breakpoint: Dynamically applies breakpoint classes to --semantic class.

/** Names of custom property breakpoint classes. @type {string[]} */
const breakpoints = [
	"--2xs-breakpoint",
	"--xs-breakpoint",
	"--sm-breakpoint",
	"--md-breakpoint",
	"--lg-breakpoint",
	"--xl-breakpoint",
	"--2xl-breakpoint",
	"--3xl-breakpoint"
];

/** ResizeObserver for all --semantic props classes. */
const breakpointObserver = new ResizeObserver(entries => {
	for (const entry of entries) {
		/** Container of --semantic props element. @type {Element} */
		const container = entry.target;

		// Reset all breakpoint classes on container.
		container.classList.remove(...breakpoints);

		// Loop through all breakpoints and add appropriate classes.
		for (const prop of breakpoints) {
			/** Current breakpoint width. @type {string} */
			const breakpointWidth = getComputedStyle(container).getPropertyValue(prop);

			// Add breakpoint classes when valid.
			if (entry.borderBoxSize[0].inlineSize >= parseFloat(breakpointWidth)) {
				container.classList.add(prop);
			}
		}
	}
});

/** MutationObserver for all --semantic props classes. */
const semanticObserver = new MutationObserver(records => {
	for (const record of records) {
		// Observe container resize changes.
		if (record.target.classList.contains("--semantic")) {
			breakpointObserver.observe(record.target);
		}
	}
});

// Start observing all --semantic container classes.
semanticObserver.observe(document.documentElement, {
	subtree: true,
	childList: true,
	attributeFilter: ["class", "style"]
});