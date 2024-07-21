/** Adds semantic color classes based on current preferred color scheme. */
export default function color(element) {
	/** Names of custom property or class colors. @type {string[]} */
	const colors = ["--light-color", "--dark-color"];

	/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
	const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

	/** Event listener for color scheme matchMedia() event. */
	const listener = () => {
		/** Whether user has selected to prefer dark color scheme. @type {boolean} */
		const isDarkMode = darkModeQuery.matches;

		// Reset all color classes on element:
		element.classList.remove(...colors);

		// Set appropriate color class based on preferred colors:
		element.classList.add(isDarkMode ? "--dark-color" : "--light-color");
	};

	// Only add color classes if one is not already used:
	if (!colors.some(prop => element.classList.contains(prop))) {
		// Listen for preferred color scheme changes:
		darkModeQuery.addEventListener("change", listener);

		// Initially call event listener:
		listener();
	}
}