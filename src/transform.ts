/** Semantic Props for CSS transform property values. */

interface props {
	/** Semantic Props for scaling the X axis. */
	scaleX: Record<string, `scaleX(${number})`>
	/** Semantic Props for scaling the Y axis. */
	scaleY: Record<string, `scaleY(${number})`>
	/** Semantic Props for scaling the X+Y axis. */
	scale: Record<string, `scale(${number})`>
}

export const props: props = {
	scaleX: {
		smallest: "scaleX(0.8)",
		smaller: "scaleX(0.9)",
		small: "scaleX(0.95)",
		large: "scaleX(1.05)",
		larger: "scaleX(1.1)",
		largest: "scaleX(1.2)",
	},

	scaleY: {
		smallest: "scaleY(0.8)",
		smaller: "scaleY(0.9)",
		small: "scaleY(0.95)",
		large: "scaleY(1.05)",
		larger: "scaleY(1.1)",
		largest: "scaleY(1.2)",
	},

	scale: {
		smallest: "scale(0.8)",
		smaller: "scale(0.9)",
		small: "scale(0.95)",
		large: "scale(1.05)",
		larger: "scale(1.1)",
		largest: "scale(1.2)"
	}
};