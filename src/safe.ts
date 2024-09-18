// Semantic Props for display safe areas.

import semantic from "./semantic.js";

semantic({
	"--safe-top": "env(safe-area-inset-top)",
	"--safe-right": "env(safe-area-inset-right)",
	"--safe-bottom": "env(safe-area-inset-bottom)",
	"--safe-left": "env(safe-area-inset-left)",

	"--safe": "var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left)",
	"--safe-x": "0 var(--safe-right) 0 var(--safe-left)",
	"--safe-y": "var(--safe-top) 0 var(--safe-bottom) 0",

	"--safe-header": "var(--safe-top) var(--safe-right) 0 var(--safe-left)",
	"--safe-main": "var(--safe-x)",
	"--safe-footer": "0 var(--safe-right) var(--safe-bottom) var(--safe-left)"
});