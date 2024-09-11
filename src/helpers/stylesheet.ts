/** Defines input Semantic Props into stylesheet. */
export default (() => {
	// Return undefined function if not in a client environment:
	if (typeof window === "undefined") return () => undefined;

	/** Style element for Semantic Props. */
	const style: HTMLStyleElement = document.createElement("style");
	document.head.prepend(style);

	/** Stylesheet for Semantic Props. */
	const stylesheet: CSSStyleSheet = style.sheet!;

	/** Semantic Props CSS style rule. */
	const rule = stylesheet.cssRules[
		stylesheet.insertRule(":where(.--semantic) {}")
	] as CSSStyleRule;

	// Return stylesheet function:
	return (props: { [key: string]: string | ((update: Function) => void) }) => {
		// Define styles for Semantic Props:
		for (const prop of Object.keys(props)) {
			/** Value of Semantic Props prop. */
			const value = props[prop];

			// Insert CSS rule for static Semantic Props:
			if (typeof value === "string") {
				rule.style.setProperty(prop, value);
			}

			// Update CSS rule for live Semantic Props:
			if (typeof value === "function") {
				value((newValue: string) => rule.style.setProperty(prop, newValue));
			}
		}
	};
})();