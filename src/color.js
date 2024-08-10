/**
 * Adds semantic color classes based on current preferred color scheme.
 * @param {Element} element Element to add color classes to.
 */
export default function color(element) {
	/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
	const prefersDarkQuery = matchMedia("(prefers-color-scheme: dark)");

	/** Returns whether to prefer dark color scheme. @returns {boolean} */
	const prefersDark = () => {
		/** Enabled color schemes for element. @type {string} */
		const colorScheme = getComputedStyle(element).getPropertyValue("color-scheme");

		// Return boolean for and if preferred color scheme is enabled:
		if (/normal|(?=.*light)(?=.*dark)/.test(colorScheme)) {
			return prefersDarkQuery.matches;
		}

		// Return boolean for forced color scheme:
		return /dark/.test(colorScheme);
	};

	/** Sets appropriate color class based on preferred colors. */
	const listener = () => {
		element.classList.remove(prefersDark() ? "--light-color" : "--dark-color");
		element.classList.add(!prefersDark() ? "--light-color" : "--dark-color");
	};

	// Listen for preferred color scheme changes:
	prefersDarkQuery.addEventListener("change", listener);

	// Initially call event listener:
	listener();
}