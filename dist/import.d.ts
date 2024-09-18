/**
 * Activates Semantic Props elements, adding custom property classes.
 * @type {Function}
 * @preserve
 */ declare function o(): void;

/** Type for Semantic Props name. */
type prop = `--${string}`;
/**
 * Returns Semantic Props value.
 * @param prop Semantic Props value to use.
 * @return Semantic Props value.
 * @preserve
 */
declare const prop: (prop: prop) => string | undefined | Error;

export { o as default, prop };
