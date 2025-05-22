export default {
	plugins: {
		"postcss-import": {},
		"postcss-nesting": {},
		"postcss-advanced-variables": {},
		"@csstools/postcss-trigonometric-functions": {
			preserve: false
		},
		"@csstools/postcss-oklab-function": {},
		"@csstools/postcss-relative-color-syntax": {
			preserve: false
		},
		"autoprefixer": {},
		"cssnano": {
			preset: "default"
		}
	}
}