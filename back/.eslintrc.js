module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-catch': 'off',
    'no-undef': 'off',
  },
};
