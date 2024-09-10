/** Runs callback passing in stylesheet for Semantic Props. */
export default (props: string[], callback: Function | undefined): boolean => {
	// Return false if not in a client environment:
	if (typeof window === "undefined") return false;

	/** CSS text of all stylesheets in document without whitespace: */
	const cssText: string = [...document.styleSheets].map(({ cssRules }) => (
		[...cssRules].map(({ cssText }) => cssText))
	).toString().replace(/\s/g, "");

	// Return false if Semantic Props are not found in stylesheets:
	if (props.every(prop => !cssText.includes(`var(${prop}`))) return false;

	// Only run callback if provided:
	if (typeof callback !== "undefined") {
		// Create stylesheet to use for Semantic Props:
		const stylesheet = document.createElement("style");
		document.head.prepend(stylesheet);

		// Run callback with stylesheet:
		callback(stylesheet);
	}

	// Return true that stylesheet was created:
	return true;
};