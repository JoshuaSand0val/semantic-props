/** Semantic Props for display safe-areas. */
export const safe: Record<string, string> = {
	top: "env(safe-area-inset-top)",
	right: "env(safe-area-inset-right)",
	bottom: "env(safe-area-inset-bottom)",
	left: "env(safe-area-inset-left)"
};

Object.assign(safe, {
	x: `0 ${safe.right} 0 ${safe.left}`,
	y: `${safe.top} 0 ${safe.bottom} 0`
});

Object.assign(safe, {
	header: `${safe.top} ${safe.right} 0 ${safe.left}`,
	body: safe.x,
	footer: `0 ${safe.right} ${safe.bottom} ${safe.left}`
});