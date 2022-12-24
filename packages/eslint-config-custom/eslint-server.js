module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "arrow-body-style": "error",
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "comma-dangle": "off",
    "comma-spacing": "error",
    "comma-style": "error",
    "curly": ["error", "multi-line", "consistent"],
    "dot-location": ["error", "property"],
    "eqeqeq": "error",
    "handle-callback-err": "off",
    "indent": "off",
    "import/exports-last": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
          "unknown"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "keyword-spacing": "error",
    "max-nested-callbacks": ["error", { "max": 2 }],
    "max-statements-per-line": ["error", { "max": 2 }],
    "max-params": ["error", { "max": 4 }],
    "no-console": "warn",
    "no-empty-function": "warn",
    "no-floating-decimal": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      { "max": 2, "maxEOF": 1, "maxBOF": 0 }
    ],
    "no-nested-ternary": "warn",
    "no-shadow": ["error", { "allow": ["err", "resolve", "reject"] }],
    "no-trailing-spaces": ["error"],
    "no-var": "error",
    "no-void": "warn",
    "no-duplicate-imports": "error",
    "object-curly-spacing": ["error", "always"],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "vars-on-top": "off",
    "yoda": "error"
  },
};
