// Semantic Props for color.

import stylesheet from "./stylesheet.js";

/** Color Semantic Props. */
const props: Parameters<typeof stylesheet>[0] = {
	"--theme-color": "oklch(95% 0.01 248)",
	"--primary-color": "oklch(70% 0.15 240)",
	"--secondary-color": "oklch(60% 0.02 240)",
	"--success-color": "oklch(70% 0.15 148)",
	"--danger-color": "oklch(60% 0.20 24)",
	"--warning-color": "oklch(90% 0.15 86)",
	"--info-color": "oklch(80% 0.15 216)"
};

/** Count of color weights (minus 0). */
const count: number = 12;

// Assign color weights:
for (const prop of Object.keys(props)) {
	for (let l = 0; l <= count; l++) {
		/** Color lightness value. */
		const lightness: string = 100 * (1 - (l / count)) + "%";

		// Assign fallback color values:
		props[`${prop}-${l}`] = `hsl(0deg, 0%, ${lightness})`;

		// Assign light-only color values:
		if (CSS.supports("color: oklch(from white l c h)")) {
			props[`${prop}-${l}`] = `oklch(from var(${prop}) ${lightness} c h)`;
		}

		// Assign light-dark color values:
		for (let d = 0; d <= count; d++) {
			props[`${prop}-${l}-${d}`] = (update: Function) => {
				/** Media Query for if user prefers dark color scheme.  */
				const prefersDarkQuery = matchMedia("(prefers-color-scheme: dark)");

				/** Updates appropriate color based on preferred colors. */
				const listener = () => {
					if (prefersDarkQuery.matches) {
						update(`var(${prop}-${d})`);
					}
					else {
						update(`var(${prop}-${l})`);
					}
				};

				// Listen for preferred color scheme changes:
				prefersDarkQuery.addEventListener("change", listener);

				// Initially call event listener:
				listener();
			};
		}
	}
}

// Define Semantic Props:
stylesheet(props);