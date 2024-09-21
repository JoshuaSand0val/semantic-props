import type { Properties } from "csstype";

/** Type for Semantic Props value name. */
type prop = `--${string}`;

/** Type for Semantic Props value. */
type value = string | number | (string | number)[] | ((update: Function) => void);

/** Type for Semantic Props value declarations. */
type declarations = { [key: prop]: value };

/** All defined Semantic Props. */
const semantic: declarations = {};

/**
 * Defines Semantic Props object.
 * @param props Semantic Props to set.
 */
export default (props: declarations): void => {
	Object.assign(semantic, props);
};

/**
 * Creates scoped CSS styles. Defines referenced Semantic Props.
 * @param styles CSS styles object to create.
 * @returns Scoped CSS class name.
 */
export const style = (() => {
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
		stylesheet.insertRule(":root {}")
	] as CSSStyleRule;

	/** All declared Semantic Props. */
	const declaredProps: prop[] = [];

	/** All scoped class names created. */
	const classes: string[] = [];

	// Return Semantic Props style function:
	return (styles: Properties) => {
		/** CSS styles object stringified.  */
		const cssText = JSON.stringify(styles);

		/** Scoped class name based on hash of CSS styles object. */
		const className: string = `--semantic-${[...cssText].reduce((hash, char) => {
			return 0 | (31 * hash + char.charCodeAt(0))
		}, 0)}`;

		// Return class name if styles already defined:
		if (classes.includes(className)) return className;

		/** Returns matched Semantic Props in string. */
		const matchedProps = (string: string): prop[] => {
			const vars = (string.match(/var\(--[a-z0-9-_]+/gi) ?? []) as string[];
			return (Object.keys(semantic) as prop[]).filter(
				prop => vars.some(string => string === `var(${prop}`)
			);
		};

		/** Semantic Props used in CSS styles object. */
		const props: prop[] = matchedProps(cssText);

		// Match and insert Semantic Props CSS declarations:
		for (const prop of props) {
			// Continue if Semantic Props already declared:
			if (declaredProps.includes(prop)) continue;

			/** Semantic Props value. */
			const value: value = semantic[prop]!;

			// Insert CSS declaration for static Semantic Props:
			if (typeof value !== "function") {
				rule.style.setProperty(prop, `${value}`);
				props.push(...matchedProps(`${value}`));
				continue;
			}

			// Update CSS declaration for live Semantic Props:
			value((newValue: Exclude<value, Function>) => {
				rule.style.setProperty(prop, `${newValue}`);
				props.push(...matchedProps(`${newValue}`));
			});

			// Push new Semantic Props into array:
			declaredProps.push(prop);
		}

		/** Scoped CSS style rule. */
		const scoped = stylesheet.cssRules[
			stylesheet.insertRule(`.${className} {}`)
		] as CSSStyleRule;

		// Insert declarations for CSS styles object:
		for (const [prop, value] of Object.entries(styles)) {
			scoped.style.setProperty(prop, value);
			scoped.style[prop] = value;
		}

		// Push new class name into array:
		classes.push(className);

		// Return scoped class:
		return className;
	};
})();