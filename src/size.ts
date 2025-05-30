/** Toggles size classes on Semantic Props containers. */
function size(): void {
	/** Semantic Props container sizes. */
	const sizes: string[] = ["watch", "phone", "tablet", "laptop", "desktop"];

	/** All Semantic Props containers. */
	const semantic: HTMLCollection = document.getElementsByClassName("semantic");

	for (const element of semantic) {
		/** Semantic Props container computed style value. */
		const style = getComputedStyle(element);

		// Toggle size classes via boolean props:
		for (const size of sizes) {
			const prop: string = style.getPropertyValue(`--${size}`);
			element.classList.toggle(size, "true" === prop);
		}
	}

	requestAnimationFrame(size);
}

if (typeof window !== "undefined") {
	requestAnimationFrame(size);
}