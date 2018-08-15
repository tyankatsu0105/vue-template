module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    page: true,
    browser: true,
    jestPuppeteer: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off'
  }
}