// Add scroll event that activates Semantic Props on elements:
if (typeof window !== "undefined") {
	document.addEventListener("scroll", () => {
		// Get all Semantic Props elements:
		const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".--semantic");

		// Set scroll Semantic Props styles:
		for (const el of elements) {
			// Calculate element scroll X and Y percentages:
			const scrollXPercentage = el.scrollLeft / (el.scrollWidth - el.clientWidth) || 0;
			const scrollYPercentage = el.scrollTop / (el.scrollHeight - el.clientHeight) || 0;

			// Set element Semantic Props styles:
			el.style.setProperty("--scroll-x-percentage", scrollXPercentage.toFixed(2));
			el.style.setProperty("--scroll-y-percentage", scrollYPercentage.toFixed(2));
		}
	}, true);
}