// Semantic Props used for color.

import fallback from "./colors.module.scss";
import semantic from "./semantic.js";

/** Color Semantic Props. */
const props: { [key: string]: string } = fallback;

/** Semantic Props reference color names. */
const colors: string[] = [
	"--theme-color",
	"--primary-color",
	"--secondary-color",
	"--success-color",
	"--danger-color",
	"--warning-color",
	"--info-color"
];

// Define Semantic Props colors:
// --[prop]-color-[light]-[dark] syntax.
for (const prop of colors) {
	// Break if not in a client environment:
	if (typeof window === "undefined") break;

	// Define weighted props (0 through 12) (100% to 0% lightness):
	for (let l: number = 0; l <= 12; l++) {
		/** Calculated color lightness channel. */
		const light: string = 100 * (1 - (l / 12)) + "%";

		// Define weighted relative color props if supported:
		if (CSS.supports("color", "hsl(from white h s l)")) {
			props[`${prop}-${l}`] = `hsl(from var(${prop}) h s ${light})`;
		}

		// Define light-dark color props:
		for (let d: number = 0; d <= 12; d++) {
			props[`${prop}-${l}-${d}`] = `var(${prop}-${l})`;
			if (l !== d && CSS.supports("color", "light-dark(white, black)")) {
				props[`${prop}-${l}-${d}`] = (
					`light-dark(var(${prop}-${l}), var(${prop}-${d}))`
				);
			}
		}
	}
}

// Define Semantic Props styles:
semantic(props);