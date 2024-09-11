import stylesheet from "./helpers/stylesheet.js";

// Use pointermove events to update Semantic Props:
stylesheet({
	"--pointer-x"(update: Function) {
		addEventListener("pointermove", e => update(`${e.clientX}px`));
	},
	"--pointer-y"(update: Function) {
		addEventListener("pointermove", e => update(`${e.clientY}px`));
	}
});