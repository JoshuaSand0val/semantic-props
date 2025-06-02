(function () {
	// Return in any incompatible environment (such as Node.js):
	if (typeof window === "undefined") return;

	/** Toggles `light` or `dark` class matching `--color-scheme`. */
	function color(container: Element): void {
		/** Container computed `--color-scheme` value. */
		const scheme: string = getComputedStyle(container).getPropertyValue("--color-scheme");

		container.classList.toggle("light", "light" === scheme);
		container.classList.toggle("dark", "dark" === scheme);
	}

	/** Performs observation of scripted containers. */
	function observe(): void {
		for (const container of document.querySelectorAll("scripted")) {
			color(container);
		}
	}

	// Observe scripted containers:
	matchMedia("(prefers-color-scheme: dark)").addEventListener("change", observe);
	document.addEventListener("DOMContentLoaded", observe);
	observe();
})();