import chroma from "chroma-js";

/** Semantic Props for color. */
export let props: Record<string, string> = {};

/** Semantic Props color palette. */
const colors: Record<string, chroma.ChromaInput> = {
	blue: "oklch(0.6 0.15 240)",
	brown: "oklch(0.6 0.05 50)",
	coral: "oklch(0.7 0.2 40)",
	cyan: "oklch(0.7 0.15 180)",
	green: "oklch(0.6 0.2 150)",
	indigo: "oklch(0.4 0.2 270)",
	lime: "oklch(0.7 0.15 120)",
	magenta: "oklch(0.6 0.2 330)",
	neutral: "oklch(0.5 0.01 260)",
	orange: "oklch(0.6 0.15 50)",
	pink: "oklch(0.8 0.1 10)",
	purple: "oklch(0.4 0.15 300)",
	red: "oklch(0.5 0.2 30)",
	violet: "oklch(0.4 0.15 290)",
	yellow: "oklch(0.8 0.15 90)"
};

// Assign color Semantic Props aliases:
Object.assign(colors, {
	primary: colors.neutral,
	secondary: colors.neutral,
	accent: colors.blue
});

// Assign colors weights 100 to 900 by 50:
for (let weight = 100; weight <= 900; weight += 50) {
	for (const [prop, color] of Object.entries(colors)) {
		/** Color channel in OKLCH color space. */
		let [l, c, h] = chroma(color).oklch();

		/** Percentage of color weight range. */
		const percentage: number = 1 - (weight - 100) / (900 - 100);

		// Weight lightness and chroma channels:
		l = 0.15 + (0.99 - 0.15) * percentage;
		c = Math.sin(l * Math.PI) * c;

		// Assign color weight Semantic Props:
		props[`${prop}${weight}`] = chroma(`oklch(${l} ${c} ${h})`).hex();
	}
}