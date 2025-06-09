interface props {
	/** Semantic Props for the CSS z-index property. */
	z: Record<string, number>
}

export const props: props = {
	z: {
		bottom: -1000,
		relative: 1000,
		absolute: 2000,
		sticky: 3000,
		fixed: 4000,
		top: 5000
	}
};