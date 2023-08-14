module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    "parserOptions": {
        "parser": "@babel/eslint-parser",
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/recommended',
    ],
    rules: {
        "vue/multi-word-component-names": "off",
        'vue/html-indent': "off",
    }
}