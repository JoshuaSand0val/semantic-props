export default {
	plugins: {
		"@csstools/postcss-global-data": {
			files: [
				"./src/main.css"
			]
		},
		"postcss-custom-media": {},
		"autoprefixer": {}
	}
}