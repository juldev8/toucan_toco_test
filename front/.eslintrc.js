module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:testcafe/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "testcafe",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "no-unused-expressions": "off",
    "no-param-reassign": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/no-children-prop": "off",
    "no-useless-constructor": "off",
    "class-methods-use-this": "off",
    "click-events-have-key-events": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "key-spacing": ["error", { afterColon: true }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};
