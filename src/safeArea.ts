/** Semantic Props for display safe-areas. */

export const props = {
	safeTop: "env(safe-area-inset-top)",
	safeRight: "env(safe-area-inset-right)",
	safeBottom: "env(safe-area-inset-bottom)",
	safeLeft: "env(safe-area-inset-left)",

	safe: "var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left)",
	safeX: "0 var(--safe-right) 0 var(--safe-left)",
	safeY: "var(--safe-top) 0 var(--safe-bottom) 0",

	safeHeader: "var(--safe-top) var(--safe-right) 0 var(--safe-left)",
	safeBody: "var(--safe-x)",
	safeFooter: "0 var(--safe-right) var(--safe-bottom) var(--safe-left)"
};