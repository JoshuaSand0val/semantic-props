export default {
	plugins: {
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