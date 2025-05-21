export default {
	plugins: {
		"postcss-import": {},
		"postcss-nesting": {},
		"postcss-advanced-variables": {},
		"@csstools/postcss-oklab-function": {},
		"@csstools/postcss-color-mix-function": {
			preserve: false
		},
		"autoprefixer": {},
		"cssnano": {
			preset: "default"
		}
	}
}