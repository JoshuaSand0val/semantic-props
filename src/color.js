// Color: Dynamically applies color classes to --semantic class.

// Watch for preferred color scheme changes on all --semantic containers.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
	for (const container of document.querySelectorAll(".--semantic")) {
		// Reset all color classes on container.
		container.classList.remove("--light-color", "--dark-color");
		// Add appropriate class based on preferred colors.
		container.classList.add(event.matches ? "--dark-color" : "--light-color");
	}
});