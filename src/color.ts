(function () {
	if (typeof window === "undefined") return;

	/** HTML `:root` document element. */
	const root: HTMLElement = document.documentElement;

	/** Media-Query matching for user preferring dark scheme. */
	const prefersDark = matchMedia("(prefers-color-scheme: dark)");

	// Toggle `light` or `dark` class based on preferred color-scheme:
	prefersDark.addEventListener("change", () => {
		root.classList.toggle("light", !prefersDark.matches);
		root.classList.toggle("dark", prefersDark.matches);
	});
})();