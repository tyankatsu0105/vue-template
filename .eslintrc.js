module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/prettier'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-indent": ["error", 'tab'],
    "vue/html-self-closing": ["error", {
      "html": {
        "normal": "never",
      }
    }],
    "vue/no-multi-spaces": "error",
    "vue/no-confusing-v-for-v-if": "error",
    "vue/attributes-order": "error",
    "vue/max-attributes-per-line": [2, {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
