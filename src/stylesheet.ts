/**
 * (Client) Defines given Semantic Props if found inside document stylesheets.
 * @returns (Client) If Semantic Props are found inside document stylesheets.
 */
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

	/** CSS text of all stylesheets in document (without whitespace). */
	const cssText: string = [...document.styleSheets].map(({ cssRules }) => (
		[...cssRules].map(({ cssText }) => cssText))
	).toString().replace(/\s/g, "");

	// Return stylesheet function:
	return (props: { [key: string]: string | ((update: Function) => void) }): boolean => {
		/** All passed Semantic Props found in document stylesheets. */
		const cssTextProps: string[] = Object.keys(props).filter(prop => {
			return cssText.includes(`var(${prop})`);
		});

		// Return false if no passed Semantic Props were found:
		if (cssTextProps.length === 0) return false;

		// Define styles for found Semantic Props:
		for (const prop of cssTextProps) {
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

		// Return true that Semantic Props were found:
		return true;
	};
})();