// Color: Dynamically applies color classes to --semantic class.

// Only attempt to execute client-side:
if (typeof window !== "undefined") {
	/** Event listener for color scheme matchMedia() event. */
	const listener = () => {
		/** Whether user has selected to prefer dark color scheme. @type {boolean} */
		const dark = matchMedia("(prefers-color-scheme: dark)").matches;

		// Set appropriate color class on --semantic containers.
		for (const container of document.querySelectorAll(".--semantic")) {
			// Reset all color classes on container.
			container.classList.remove("--light-color", "--dark-color");
			// Add class based on preferred colors.
			container.classList.add(dark ? "--dark-color" : "--light-color");
		}
	};

	// Watch for preferred color scheme changes on all --semantic containers.
	matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);

	// Initially call event listener:
	addEventListener("DOMContentLoaded", listener);
}