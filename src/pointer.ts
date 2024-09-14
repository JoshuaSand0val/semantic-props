// Semantic Props for pointer events.

import semantic from "./semantic.js";

// Use pointermove events to update Semantic Props:
addEventListener("pointermove", event => semantic({
	"--pointer-x": `${event.clientX}px`,
	"--pointer-y": `${event.clientY}px`
}));