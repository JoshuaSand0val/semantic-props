// Semantic Props for pointer events.

import semantic from "./semantic.js";

// Use pointermove events to update Semantic Props:
if (typeof window !== "undefined") {
	addEventListener("pointermove", event => semantic({
		"--pointer-x": `${event.clientX}px`,
		"--pointer-y": `${event.clientY}px`
	}));
}