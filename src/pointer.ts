import semantic from "./semantic.js";

// Use pointermove events to update Semantic Props:
semantic({
	"--pointer-x"(update: Function) {
		addEventListener("pointermove", e => update(`${e.clientX}px`));
	},
	"--pointer-y"(update: Function) {
		addEventListener("pointermove", e => update(`${e.clientY}px`));
	}
});