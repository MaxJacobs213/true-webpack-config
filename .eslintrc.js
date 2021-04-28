module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ?  ["error", { allow: ["warn", "error"] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/prefer-default-export': 'off',
    'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    'no-param-reassign': [2, { "props": false }],
    'no-new': 0,
  },
  env: {
    browser: true,
  },
  globals: {
    __DEV__: 'readonly',
  },
};
