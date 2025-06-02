(function () {
	// Return in any incompatible environment (such as Node.js):
	if (typeof window === "undefined") return;

	/** All breakpoint names. */
	const breakpoints: string[] = ["watch", "phone", "tablet", "laptop", "desktop"];

	/** Toggles breakpoint classes on entries. */
	const observer = new ResizeObserver(entries => {
		for (const { target } of entries) {
			/** Container computed style values. */
			const style = getComputedStyle(target);

			for (const token of breakpoints) {
				/** Value of looped Semantic Props breakpoint. */
				const value: string = style.getPropertyValue(`--${token}`);

				// Toggle class for active breakpoints:
				target.classList.toggle(token, "true" === value);
			}
		}
	});

	/** Initializes observation of scripted containers. */
	function initialize(): void {
		for (const container of document.querySelectorAll("scripted")) {
			observer.observe(container);
		}
	}

	// Initialize scripted containers:
	document.addEventListener("DOMContentLoaded", initialize);
	initialize();
})();