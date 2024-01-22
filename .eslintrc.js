/**
 * The following dependencies are required.
 *
 * devDependencies : {
 *   "@typescript-eslint/eslint-plugin": "^6.19.0",
 *   "@typescript-eslint/parser": "^6.19.0",
 *   "eslint": "^8",
 *   "eslint-config-next": "^14.0.4",
 *   "eslint-plugin-simple-import-sort": "^10.0.0",
 *   "typescript": "5.0.4",
 * }
 */

module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  /**
   * '@typescript-eslint/parser' tells ESLint to use the @typescript-eslint/parser package you installed to parse your source files.
   * This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
   * https://typescript-eslint.io/getting-started#details
   */
  parser: '@typescript-eslint/parser',
  plugins: [
    /**
     * '@typescript-eslint' tells ESLint to load the @typescript-eslint/eslint-plugin package as a plugin.
     * This allows you to use typescript-eslint's rules within your codebase.
     * https://typescript-eslint.io/getting-started#details
     */
    '@typescript-eslint',
    /** https://github.com/lydell/eslint-plugin-simple-import-sort */
    'simple-import-sort',
  ],
  rules: {
    /** https://eslint.org/docs/latest/rules/eqeqeq */
    eqeqeq: ['error', 'always'],
    /* https://eslint.org/docs/latest/rules/multiline-comment-style */
    'multiline-comment-style': ['error', 'starred-block'],
    /* https://eslint.org/docs/latest/rules/no-console */
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    /* https://eslint.org/docs/latest/rules/no-lonely-if */
    'no-lonely-if': 'error',
    /* https://eslint.org/docs/latest/rules/no-undef-init */
    'no-undef-init': 'error',
    /* https://eslint.org/docs/latest/rules/no-unneeded-ternary */
    'no-unneeded-ternary': 'error',
    /* https://eslint.org/docs/latest/rules/no-useless-computed-key */
    'no-useless-computed-key': 'error',
    /* https://eslint.org/docs/latest/rules/no-useless-return */
    'no-useless-return': 'error',
    /* https://eslint.org/docs/latest/rules/no-var */
    'no-var': 'error',
    /* https://eslint.org/docs/latest/rules/prefer-const */
    'prefer-const': 'error',
    /* https://eslint.org/docs/latest/rules/yoda */
    yoda: 'error',

    /**
     * Import order
     * https://github.com/lydell/eslint-plugin-simple-import-sort
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    /** https://typescript-eslint.io/rules/array-type */
    '@typescript-eslint/array-type': 'error',
    /** https://typescript-eslint.io/rules/consistent-type-imports */
    '@typescript-eslint/consistent-type-imports': 'error',
    /** https://typescript-eslint.io/rules/no-explicit-any */
    '@typescript-eslint/no-explicit-any': 'warn',
    /** https://typescript-eslint.io/rules/no-import-type-side-effects */
    '@typescript-eslint/no-import-type-side-effects': 'error',
    /** https://typescript-eslint.io/rules/no-inferrable-types */
    '@typescript-eslint/no-inferrable-types': 'error',
    /** https://typescript-eslint.io/rules/no-unused-vars */
    '@typescript-eslint/no-unused-vars': 'error',
    /** https://typescript-eslint.io/rules/prefer-function-type */
    '@typescript-eslint/prefer-function-type': 'error',
    /** https://typescript-eslint.io/rules/sort-type-constituents */
    '@typescript-eslint/sort-type-constituents': 'error',
  },
};
