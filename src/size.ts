(function () {
	if (typeof window === "undefined") return;

	/** All Semantic Props containers. */
	const semantic: HTMLCollection = document.getElementsByClassName("semantic");

	/** Semantic Props container sizes. */
	const sizes: string[] = ["watch", "phone", "tablet", "laptop", "desktop"];

	/** Toggles size classes on Semantic Props containers. */
	function size(): void {
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

	size();
})();