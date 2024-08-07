/**
 * Adds semantic color classes based on current preferred color scheme.
 * @param {Element} element Element to add color classes to.
 */
export default function color(element) {
	/** Media Query for if user prefers dark color scheme. @type {MediaQueryList}  */
	const prefersDarkQuery = matchMedia("(prefers-color-scheme: dark)");

	/** Potential element to inherit color scheme from. @type {Element|null} */
	const inherit = (() => {
		const parent = element.parentElement || document.documentElement;
		return parent.closest(".--semantic:is(.--light-color, .--dark-color)");
	})();

	/** Event listener for color scheme matchMedia() event. */
	const listener = () => {
		/** Whether to prefer dark color scheme. @type {boolean} */
		const prefersDark = inherit ? inherit.classList.contains("--dark-color") : prefersDarkQuery.matches;

		// Set appropriate color class based on preferred colors:
		element.classList.remove(prefersDark ? "--light-color" : "--dark-color");
		element.classList.add(!prefersDark ? "--light-color" : "--dark-color");
	};

	// Listen for preferred color scheme changes:
	prefersDarkQuery.addEventListener("change", listener);

	// Initially call event listener:
	listener();
}