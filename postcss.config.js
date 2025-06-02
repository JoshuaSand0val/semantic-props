export default {
	plugins: {
		"postcss-custom-media": {
			preserve: true
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