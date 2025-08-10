module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "script",
  },
  rules: {
    // Formatting handled by Prettier. Only code-quality rules here.
    "prefer-const": "error",
    "no-var": "error",
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**", "**/*.test.js", "**/*.spec.js"],
      env: { jest: true },
    },
  ],
};
