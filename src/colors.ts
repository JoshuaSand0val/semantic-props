/* Semantic Props used for color. */

import fallback from "./colors.module.scss";
import stylesheet from "./helpers/stylesheet";

// Define color Semantic Props.
stylesheet((() => {
	/** Output color Semantic Props. */
	const props: { [key: string]: string } = fallback;

	// Return empty if not in a client environment:
	if (typeof window === "undefined") return {};

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
		for (let l: number = 0; l <= 12; l++) {
			// Redefine weighted color props in CSS relative colors if supported:
			if (CSS.supports("color", "oklch(from white l c h)")) {
				props[`${prop}-${l}`] = `oklch(from var(${prop}) ${Math.round(100 * (l / 12))}% c h)`;
			}

			// Define light-dark color props with fallback:
			for (let d = 0; d <= 12; d++) {
				props[`${prop}-${l}-${d}`] = `var(${prop}-${l})`;
				if (CSS.supports("color", "light-dark(white, black)")) {
					props[`${prop}-${l}-${d}`] = (
						`light-dark(var(${prop}-${l}), var(${prop}-${d}))`
					);
				}
			}
		}
	}

	// Return color Semantic Props:
	return props;
})());