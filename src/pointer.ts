import stylesheet from "./stylesheet.js";

// Add pointermove event to update Semantic Props:
stylesheet((sheet: HTMLStyleElement) => {
	document.addEventListener("pointermove", event => {
		sheet.textContent = `:where(.--semantic) {
			--pointer-x: ${event.clientX}px;
			--pointer-y: ${event.clientY}px;
		}`;
	});
});