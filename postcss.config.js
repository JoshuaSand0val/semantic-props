export default {
	plugins: {
		"postcss-extend-rule": {
			onUnusedExtend: "throw"
		},
		"postcss-nesting": {},
		"postcss-advanced-variables": {},
		"@csstools/postcss-trigonometric-functions": {},
		"@csstools/postcss-relative-color-syntax": {},
		"@csstools/postcss-oklab-function": {},
		"autoprefixer": {},
		"cssnano": {
			preset: "default"
		}
	}
}