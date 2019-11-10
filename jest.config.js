module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
    '!**/*.config.js',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/dist/**'
  ]
}
