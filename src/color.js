/** Adds semantic color classes based on current preferred color scheme. */
export default function color(element) {
	/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
	const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

	/** Event listener for color scheme matchMedia() event. */
	const listener = () => {
		/** Whether user has selected to prefer dark color scheme. @type {boolean} */
		const isDarkMode = darkModeQuery.matches;

		// Reset all color classes on element:
		element.classList.remove("--light-color", "--dark-color");

		// Set appropriate color class based on preferred colors:
		element.classList.add(isDarkMode ? "--dark-color" : "--light-color");
	};

	// Watch for preferred color scheme changes:
	darkModeQuery.addEventListener("change", listener);

	// Initially call event listener:
	listener();
}