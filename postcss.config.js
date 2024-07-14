export default {
	plugins: {
		"postcss-import": {},
		"postcss-preset-env": {
			features: {
				"custom-media-queries": {
					preserve: true
				}
			}
		},
		"cssnano": {
			preset: "default"
		}
	}
}