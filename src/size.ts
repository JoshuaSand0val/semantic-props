// Semantic Props for sizing padding, margin, ect.

import range from "./helpers/range.js";
import stylesheet from "./stylesheet.js";

stylesheet({
	/* Size Scaling Ratio: */
	"--size-scale-ratio": 1.618,

	/* Base Sizes: */
	"--3xs-size": "calc(var(--2xs-size) / var(--size-scale-ratio))",
	"--2xs-size": "calc(var(--xs-size) / var(--size-scale-ratio))",
	"--xs-size": "calc(var(--sm-size) / var(--size-scale-ratio))",
	"--sm-size": "calc(var(--md-size) / var(--size-scale-ratio))",
	"--md-size": "1.618rem",
	"--lg-size": "calc(var(--md-size) * var(--size-scale-ratio))",
	"--xl-size": "calc(var(--lg-size) * var(--size-scale-ratio))",
	"--2xl-size": "calc(var(--xl-size) * var(--size-scale-ratio))",
	"--3xl-size": "calc(var(--2xl-size) * var(--size-scale-ratio))",

	/* Responsive Size: */
	"--responsive-size": range("var(--3xs-size)", "var(--xl-size)", "var(--inline-3xs-to-xl)")
});