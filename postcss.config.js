export default {
	plugins: {
		"postcss-import": {},
		"postcss-preset-env": {
			"features": {
				"light-dark-function": false
			}
		},
		"cssnano": {
			preset: "default"
		}
	}
}