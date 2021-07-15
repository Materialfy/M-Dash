/* eslint-disable no-undef */
module.exports = {
	root: true,
	// this section will be used to determine which APIs are available to us
	// (i.e are we running in a browser environment or a node.js env)
	env: {
		//node: true,
		browser: true,
	},
	extends: [
		// use the recommended rule set for both plain javascript and vue, this changes warning level
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:vuetify/base',
		//'prettier/vue',
		//'plugin:prettier/recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'template-curly-spacing': 'off',
		'indent': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
		'sourceType': 'module',
	},
}
