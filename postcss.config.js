export default {
	plugins: {
		"postcss-import": {},
		"postcss-custom-media": {
			preserve: false
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