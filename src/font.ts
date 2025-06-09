/** Semantic Props for font properties. */

export let props = {
	// Font-Family:
	bodyFamily: "system-ui, sans-serif",
	monoFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",

	// Font-Weight:
	thinWeight: 200,
	lightWeight: 300,
	regularWeight: 500,
	boldWeight: 700,
	heavyWeight: 900,

	// Letter-Spacing:
	tightestLetter: "-0.1em",
	tighterLetter: "-0.075em",
	tightLetter: "-0.05em",
	normalLetter: "normal",
	wideLetter: "0.1em",
	widerLetter: "0.2em",
	widestLetter: "0.3em",

	// Line-Height:
	shortestLine: 1.05,
	shorterLine: 1.15,
	shortLine: 1.25,
	normalLine: 1.6,
	tallLine: 2,
	tallerLine: 2.5,
	tallestLine: 3,

	// Word-Spacing:
	tightestWord: "-0.15em",
	tighterWord: "-0.125em",
	tightWord: "-0.1em",
	normalWord: "normal",
	wideWord: "0.1em",
	widerWord: "0.2em",
	widestWord: "0.3em"
};

Object.assign(props, {
	displayFamily: props.bodyFamily,
	accentFamily: props.bodyFamily
});