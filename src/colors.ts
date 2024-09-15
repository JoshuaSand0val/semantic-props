// Semantic Props defined for color.

import fallback from "./colors.module.scss";
import semantic from "./semantic.js";

// Define fallback colors (also reference colors):
semantic(fallback);

/** Reference color Semantic Props names. */
const colors: string[] = [
	"--theme-color",
	"--primary-color",
	"--secondary-color",
	"--success-color",
	"--danger-color",
	"--warning-color",
	"--info-color",
];

// Define color Semantic Props:
for (const prop of colors) {
	// Break if not in a client environment:
	if (typeof window === "undefined") break;

	// Define 0 through 12 lightness and light-dark props:
	for (let l: number = 0; l <= 12; l++) {
		// Redefine props in CSS relative colors if supported:
		if (CSS.supports("color", "oklch(from white l c h)")) {
			semantic({
				[`${prop}-${l}`]: `oklch(from var(${prop}) ${(l / 12).toFixed(2)} c h)`
			});
		}

		// Define light-dark props:
		for (let d = 0; d <= 12; d++) {
			semantic({
				get [`${prop}-${l}-${d}`]() {
					if (CSS.supports("color", "light-dark(white, black)")) {
						return `light-dark(var(${prop}-${l}), var(${prop}-${d}))`;
					}
					return `var(${prop}-${l})`;
				}
			});
		}
	}
}