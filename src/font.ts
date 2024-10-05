// Semantic Props for styling fonts.

import range from "./helpers/range.js";
import stylesheet from "./stylesheet.js";

import "./scale.js";

stylesheet({
	/* Font Families: */
	"--font": "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif",
	"--monospace-font": "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
	"--display-font": "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
	"--brand-font": "Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif",

	/* Line Heights: */
	"--font-leading": 1.6,
	"--display-font-leading": 1.2,

	/* Font Weights: */
	"--regular-font": 400,
	"--thin-font": 200,
	"--bold-font": 600,
	"--heavy-font": 900,

	/* Font Scaling Ratio: */
	"--font-scale-ratio": range(1.125, 1.333, "var(--inline-3xs-to-xl)"),

	/* Absolute Font Sizes: */
	"--2xs-font": "max(var(--xs-font) / var(--font-scale-ratio), 0.5625rem)", /* 9px */
	"--xs-font": "max(var(--sm-font) / var(--font-scale-ratio), 0.6875rem)", /* 11px */
	"--sm-font": "max(var(--md-font) / var(--font-scale-ratio), 0.8125rem)", /* 13px */
	"--md-font": range("0.875rem", "1.125rem", "var(--inline-3xs-to-2xl)"),
	"--lg-font": "calc(var(--md-font) * var(--font-scale-ratio))",
	"--xl-font": "calc(var(--lg-font) * var(--font-scale-ratio))",
	"--2xl-font": "calc(var(--xl-font) * var(--font-scale-ratio))",
	"--3xl-font": "calc(var(--2xl-font) * var(--font-scale-ratio))",
	"--4xl-font": "calc(var(--3xl-font) * var(--font-scale-ratio))",

	/* Relative Font Sizes: */
	"--smaller-font": "calc(1em / var(--font-scale-ratio))",
	"--larger-font": "calc(1em * var(--font-scale-ratio))",
});