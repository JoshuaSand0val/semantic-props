/** Toggles `light` or `dark` class on Semantic Props containers. */
function color(): void {
	/** All Semantic Props containers. */
	const semantic: HTMLCollection = document.getElementsByClassName("semantic");

	for (const element of semantic) {
		/** Semantic Props container `--color-scheme` value. */
		const scheme: string = getComputedStyle(element).getPropertyValue("--color-scheme");

		// Enable `light` or `dark` class via scheme:
		if ("dark" === scheme) {
			element.classList.remove("light");
			element.classList.add("dark");
		}
		else {
			element.classList.remove("dark");
			element.classList.add("light");
		}
	}

	requestAnimationFrame(color);
}

if (typeof window !== "undefined") {
	addEventListener("DOMContentLoaded", color);
}