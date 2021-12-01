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
        // All the "prettier" and "vuetify" linting give errors, possibly due to version mismatches
        'plugin:vue/essential',
        'eslint:recommended',
        // 'plugin:prettier/recommended'
        // '@vue/prettier'
        // 'plugin:vuetify/base',
        //'prettier/vue',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'template-curly-spacing': 'off',
        'indent': 'off',
        // For later versions
        // 'vue/multi-word-component-names': ['error', {
        //     'ignores': ['Footer', 'Error', 'Calendar', 'Notifications', 'Settings', 'Toasts', 'apexchart', 'Dash']
        // }]
    },
    parserOptions: {
        parser: 'babel-eslint',
        'sourceType': 'module',
        'requireConfigFile': false
    },
}
