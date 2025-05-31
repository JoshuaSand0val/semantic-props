(function () {
	if (typeof window === "undefined") return;

	/** Breakpoint class paired to min-width in numbered pixels. */
	const breakpoints: Record<string, number> = {
		watch: 0,
		phone: 320,
		tablet: 640,
		laptop: 1024,
		desktop: 1280
	};

	/** Observes to toggle matching breakpoint classes on entries. */
	const resize = new ResizeObserver(entries => {
		for (const { target, borderBoxSize } of entries) {
			if (typeof borderBoxSize[0] === "undefined") continue;
			for (const [name, minWidth] of Object.entries(breakpoints)) {
				target.classList.toggle(name, borderBoxSize[0].inlineSize >= minWidth);
			}
		}
	});

	/** Starts observation of containers. */
	function observe(containers: Element[]) {
		for (const container of containers) {
			resize.observe(container, { box: "border-box" });
		}
	}

	/** Ends observation of containers. */
	function unobserve(containers: Element[]) {
		for (const container of containers) {
			resize.unobserve(container);
			container.classList.remove(...Object.keys(breakpoints));
		}
	}

	/** Controls resize observer for mutated containers. */
	const mutation = new MutationObserver(records => {
		for (const { target, oldValue } of records) {
			if (!(target instanceof Element)) continue;

			if (target.classList.contains("container")) {
				if (!oldValue?.includes("container")) {
					observe([target]);
				}
			}
			else if (oldValue?.includes("container")) {
				unobserve([target]);
			}
		}
	});

	/** Initializes observation of all containers. */
	function initialize(): void {
		// Observe resize of existing containers:
		observe([document.documentElement, ...document.querySelectorAll(".container")]);

		// Observe mutations in containers:
		mutation.observe(document.documentElement, {
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