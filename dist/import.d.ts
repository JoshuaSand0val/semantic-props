/**
 * Activates Semantic Props elements, adding custom property classes.
 * @type {Function}
 * @preserve
 */ declare function o(): void;

/**
 * Creates scoped CSS styles. Defines referenced Semantic Props.
 * @param styles CSS styles object to create.
 * @returns Scoped CSS class name.
 */
declare const style: (styles: {
    [key: string]: string;
}) => string;

export { o as default, style };
