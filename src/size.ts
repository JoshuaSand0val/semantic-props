(function () {
	if (typeof window === "undefined") return;

	/** HTML `:root` document element. */
	const root: HTMLElement = document.documentElement;

	/** Breakpoint class paired to media-query. */
	const breakpoints: Record<string, MediaQueryList> = {
		watch: matchMedia("(min-width: 0rem)"),
		phone: matchMedia("(min-width: 20rem)"),
		tablet: matchMedia("(min-width: 40rem)"),
		laptop: matchMedia("(min-width: 64rem)"),
		desktop: matchMedia("(min-width: 80rem)")
	};

	/** Toggles breakpoint classes on match. */
	function size(): void {
		for (const [className, media] of Object.entries(breakpoints)) {
			root.classList.toggle(className, media.matches);
		}
	}

	// Initialize breakpoint matching:
	document.addEventListener("DOMContentLoaded", size);
	addEventListener("resize", size);
	size();
})();