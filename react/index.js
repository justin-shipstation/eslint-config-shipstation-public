module.exports = {
  extends: [
    '../base/index',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};