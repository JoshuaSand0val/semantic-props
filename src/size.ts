(function () {
	if (typeof window === "undefined") return;

	/** Breakpoint class paired to min-width in numbered pixels. */
	const breakpoints: [string, number][] = Object.entries({
		watch: 0,
		phone: 320,
		tablet: 640,
		laptop: 1024,
		desktop: 1280
	});

	/** Toggles matching breakpoint classes on entries. */
	const size = new ResizeObserver(entries => {
		for (const { target, contentBoxSize } of entries) {
			if (typeof contentBoxSize[0] === "undefined") continue;
			for (const [name, minWidth] of breakpoints) {
				target.classList.toggle(name, contentBoxSize[0].inlineSize >= minWidth);
			}
		}
	});

	/** Starts and stops size observer for containers. */
	const containers = new MutationObserver(records => {
		for (const { target, oldValue } of records) {
			if (!(target instanceof Element)) continue;

			if (target.classList.contains("container")) {
				if (!oldValue?.includes("container")) {
					size.observe(target);
				}
			}
			else {
				if (oldValue?.includes("container")) {
					size.unobserve(target);
				}
			}
		}
	});

	/** Initializes observation of all containers. */
	let initialize = (): void => {
		// Observe document as container:
		document.documentElement.classList.add("container");

		// Observe existing containers:
		for (const container of document.querySelectorAll(".container")) {
			size.observe(container);
		}

		// Observe new containers:
		containers.observe(document.documentElement, {
			subtree: true,
			childList: true,
			attributeFilter: ["class"],
			attributeOldValue: true
		});
	}

	// Apply initialization:
	document.addEventListener("DOMContentLoaded", initialize);
	initialize();
})();