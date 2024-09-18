/** Type for Semantic Props name. */
type prop = `--${string}`;

/** Type for Semantic Props value update function. */
type updater = ((update: Function) => void);

/** Type for Semantic Props value. */
type value = string | number | (string | number)[] | updater;

/** Type for Semantic Props declarations. */
type declarations = { [key: prop]: value };

/** All Semantic Props. */
const semantic: declarations = {};

/**
 * Defines Semantic Props object.
 * @param props Semantic Props to set by string.
 */
export const define = (props: declarations): void => {
	Object.assign(semantic, props);
};

/** Returns Semantic Props value. */
export const prop = (prop: prop): string | undefined | Error => {
	// Return undefined if not in a client environment:
	if (typeof window === "undefined") return;

	// Return error if invalid Semantic Props:
	if (!Object.hasOwn(semantic, prop)) {
		return new Error(`Semantic Props "${prop}" is invalid.`);
	}

	/** Style element for Semantic Props. */
	const style: HTMLStyleElement = document.createElement("style");
	document.head.prepend(style);

	/** Stylesheet for Semantic Props. */
	const stylesheet: CSSStyleSheet = style.sheet!;

	/** Semantic Props CSS style rule. */
	const rule = stylesheet.cssRules[
		stylesheet.insertRule(".--semantic {}")
	] as CSSStyleRule;

	/** Semantic Props dependencies. */
	const dependencyProps: prop[] = [prop];

	// Loop through Semantic Props matching dependencies:
	for (const prop of dependencyProps) {
		/** Matched Semantic Props dependencies. */
		const matchedProps = `${semantic[prop]}`.match(/--[a-zA-Z0-9-_]+/g) ?? [];

		// Push any new Semantic Props:
		dependencyProps.push(...matchedProps as prop[]);
	}

	// Insert Semantic Props CSS declarations:
	for (const prop of dependencyProps) {
		if (Object.hasOwn(semantic, prop)) {
			/** Semantic Props value. */
			const value: value = semantic[prop]!;

			// Update CSS declaration for live Semantic Props:
			if (typeof value === "function") {
				value((newValue: Exclude<value, updater>) => {
					rule.style.setProperty(prop, newValue.toString());
				});
			}
			// Insert CSS declaration for static Semantic Props:
			else {
				rule.style.setProperty(prop, value.toString());
			}
		}
	}

	// Return Semantic Props reference:
	return `var(${prop})`;
};

export default define;