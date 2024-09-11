/* Semantic Props used for color. */

import fallback from "./colors.module.scss";
import stylesheet from "./helpers/stylesheet";

// Define color Semantic Props.
stylesheet((() => {
	/** Output color Semantic Props. */
	const props: { [key: string]: string } = fallback;

	// Return empty if not in a client environment:
	if (typeof window === undefined) return {};

	/** Reference color Semantic Props. */
	const colorProps: string[] = [
		"--theme-color",
		"--primary-color",
		"--secondary-color",
		"--success-color",
		"--danger-color",
		"--warning-color",
		"--info-color",
	];

	// Extend fallback color props:
	for (const prop of colorProps) {
		// Redefine weighted color props in CSS relative colors if supported:
		for (let l: number = 0; l <= 12; l++) {
			if (CSS.supports("color", "oklch(from white l c h)")) {
				props[`${prop}-${l}`] = `oklch(from var(${prop}) ${Math.round(100 * (l / 12))}% c h)`;
			}
		}

		// Define light-dark color props:
		for (let l = 0; l <= 12; l++) {
			for (let d = 0; d <= 12; d++) {
				/** Light color value. */
				const light: string = props[`${prop}-${l}`]!;

				/** Dark color value. */
				const dark: string = props[`${prop}-${d}`]!;

				// Define light-dark color prop alongside fallback:
				props[`${prop}-${l}-${d}`] = light;
				if (CSS.supports("color", "light-dark(white, black)")) {
					props[`${prop}-${l}-${d}`] = `light-dark(${light}, ${dark})`;
				}
			}
		}
	}

	// Return color Semantic Props:
	return props;
})());