(() => {
	// Return if not in a client environment:
	if (typeof window === "undefined") return;

	// Create stylesheet to use for pointer-event:
	const stylesheet = document.createElement("style");
	document.head.prepend(stylesheet);

	// Add pointermove event to update Semantic Props:
	document.addEventListener("pointermove", event => {
		stylesheet.textContent = `:where(.--semantic) {
			--pointer-x: ${event.clientX}px;
			--pointer-y: ${event.clientY}px;
		}`
	});
})();