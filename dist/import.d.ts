import { Properties } from 'csstype';

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
declare const style: (styles: Properties) => string;

export { o as default, style };
