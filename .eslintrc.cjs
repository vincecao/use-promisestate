module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', "simple-import-sort", "jest-dom"],
  parser: '@typescript-eslint/parser',
  rules: {
    "react/function-component-definition": [2, { "namedComponents": "function-declaration" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
