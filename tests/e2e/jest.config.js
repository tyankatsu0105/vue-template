module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  preset: 'jest-puppeteer',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  verbose: true,
  transformIgnorePatterns: ['node_modules'],
  setupTestFrameworkScriptFile: require.resolve('./config/setup.js')
};
