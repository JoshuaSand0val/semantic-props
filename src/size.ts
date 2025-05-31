(function () {
	if (typeof window === "undefined") return;

	/** HTML `:root` document element. */
	const root: HTMLElement = document.documentElement;

	/** Elements representing a scoped container. */
	const containers: HTMLCollection = document.getElementsByClassName("container");

	/** Breakpoint class paired to min-width in numbered pixels. */
	const breakpoints: Record<string, number> = {
		watch: 0,
		phone: 320,
		tablet: 640,
		laptop: 1024,
		desktop: 1280
	};

	/** Toggles matching breakpoint classes on root and containers. */
	function size(): void {
		for (const [name, width] of Object.entries(breakpoints)) {
			for (const container of [root, ...containers]) {
				if (container instanceof HTMLElement) {
					container.classList.toggle(name, container.offsetWidth >= width);
				}
			}
		}
	}

	// Initialize breakpoint matching:
	document.addEventListener("DOMContentLoaded", size);
	addEventListener("resize", size);
	size();
})();