/** Runs callback passing in stylesheet for Semantic Props. */
export default (callback: Function) => {
	// Return if not in a client environment:
	if (typeof window === "undefined") return;

	// Create stylesheet to use for Semantic Props:
	const stylesheet = document.createElement("style");
	document.head.prepend(stylesheet);

	// Run callback with stylesheet:
	callback(stylesheet);
};