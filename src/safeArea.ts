/** Semantic Props for display safe-areas. */
export const safe: Record<string, string> = {
	top: "env(safe-area-inset-top)",
	right: "env(safe-area-inset-right)",
	bottom: "env(safe-area-inset-bottom)",
	left: "env(safe-area-inset-left)"
};

safe.x = `0 ${safe.right} 0 ${safe.left}`;
safe.y = `${safe.top} 0 ${safe.bottom} 0`;

safe.header = `${safe.top} ${safe.right} 0 ${safe.left}`;
safe.body = safe.x;
safe.footer = `0 ${safe.right} ${safe.bottom} ${safe.left}`;