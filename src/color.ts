/** All Semantic Props containers. */
let semantic: HTMLCollection = document.getElementsByClassName("semantic");

/** Toggles `light` or `dark` class on Semantic Props containers. */
function colorScheme(): void {
	for (const element of semantic) {
		/** Semantic Props container `--color-scheme` value. */
		const colorScheme: string = getComputedStyle(element).getPropertyValue("--color-scheme");

		// Enable `light` or `dark` class:
		if ("dark" === colorScheme) {
			element.classList.remove("light");
			element.classList.add("dark");
		}
		else {
			element.classList.remove("dark");
			element.classList.add("light");
		}
	}

	requestAnimationFrame(colorScheme);
}

requestAnimationFrame(colorScheme);