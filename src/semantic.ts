/** Type for Semantic Props object keys. */
export type props = {
	[key: string]: string | ((update: Function) => void)
};

/**
 * Represents Semantic Props CSS ruleset.
 * @param props CSS properties to set by string or update function.
 * @returns Semantic Props CSS style rule.
 * @preserve
 */
export default (() => {
	// Return undefined function if not in a client environment:
	if (typeof window === "undefined") return () => undefined!;

	/** Style element for Semantic Props. */
	const style: HTMLStyleElement = document.createElement("style");
	document.head.prepend(style);

	/** Stylesheet for Semantic Props. */
	const stylesheet: CSSStyleSheet = style.sheet!;

	/** Semantic Props CSS style rule. */
	const rule = stylesheet.cssRules[
		stylesheet.insertRule(".--semantic {}")
	] as CSSStyleRule;

	// Return stylesheet function:
	return (props: props): CSSStyleRule => {
		// Define styles for Semantic Props:
		for (const [prop, value] of Object.entries(props)) {
			// Insert CSS declaration for static Semantic Props:
			if (typeof value === "string") {
				rule.style.setProperty(prop, value);
			}

			// Update CSS declaration for live Semantic Props:
			if (typeof value === "function") {
				value((newValue: string) => rule.style.setProperty(prop, newValue));
			}
		}

		// Return Semantic Props:
		return rule;
	};
})();