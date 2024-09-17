/**
 * Represents Semantic Props CSS ruleset.
 * @param props CSS properties to set by string.
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
		stylesheet.insertRule(":where(.--semantic) {}")
	] as CSSStyleRule;

	// Return stylesheet function:
	return (props: { [key: string]: string }): CSSStyleRule => {
		// Insert CSS declarations for Semantic Props:
		for (const [prop, value] of Object.entries(props)) {
			rule.style.setProperty(prop, value);
		}

		// Return Semantic Props:
		return rule;
	};
})();