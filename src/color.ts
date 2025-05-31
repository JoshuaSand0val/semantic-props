(function () {
	if (typeof window === "undefined") return;

	/** HTML `:root` document element. */
	const root: HTMLElement = document.documentElement;

	/** Media-Query matching for user preferring dark scheme. */
	const prefersDark = matchMedia("(prefers-color-scheme: dark)");

	/** Toggles `light` or `dark` class matching preferred color-scheme. */
	function color(): void {
		root.classList.toggle("light", !prefersDark.matches);
		root.classList.toggle("dark", prefersDark.matches);
	}

	// Initialize color-scheme matching:
	document.addEventListener("DOMContentLoaded", color);
	prefersDark.addEventListener("change", color);
	color();
})();