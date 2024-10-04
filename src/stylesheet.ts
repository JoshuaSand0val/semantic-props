/** Type for Semantic Props value name. */
type prop = `--${string}`;

/** Type for Semantic Props value. */
type value = string | number | (string | number)[] | ((update: Function) => void);

/** Type for Semantic Props value declarations. */
type declarations = { [key: prop]: value };

/**
 * Defines Semantic Props CSS styles.
 * @param props Semantic Props to set.
 */
export default (() => {
	// Return undefined function if not in a client environment:
	if (typeof window === "undefined") return () => undefined!;

	/** Stylesheet for Semantic Props. */
	const stylesheet: CSSStyleSheet = (() => {
		/** Style element for Semantic Props. */
		const style: HTMLStyleElement = document.createElement("style");
		document.head.prepend(style);

		// Return stylesheet:
		return style.sheet!;
	})();

	/** CSS style rule for Semantic Props. */
	const rule = stylesheet.cssRules[
		stylesheet.insertRule(":where(.--semantic) {}")
	] as CSSStyleRule;

	// Return Semantic Props style function:
	return (props: declarations) => {
		// Insert Semantic Props CSS declarations:
		for (const [prop, value] of Object.entries(props)) {
			// Insert CSS declaration for static Semantic Props:
			if (typeof value !== "function") {
				rule.style.setProperty(prop, `${value}`);
				continue;
			}

			// Update CSS declaration for live Semantic Props:
			value((newValue: Exclude<value, Function>) => {
				rule.style.setProperty(prop, `${newValue}`);
			});
		}
	};
})();