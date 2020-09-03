const path = require('path');
const baseRules = require('eslint-config-airbnb-base/rules/style');

const [_, ...restricted] = baseRules.rules['no-restricted-syntax'];

module.exports = {
  extends: 'airbnb',
  parserOptions: {
    sourceType: 'module',
    jsx: true,
  },
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  plugins: [
    'import',
    'jsx-a11y',
    'compat',
  ],
  rules: {
    // General
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', 110, { ignoreComments: true }],
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-debugger': 0,
    'no-console': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'no-restricted-syntax': [2,
      ...restricted.filter(
        r => !['ForOfStatement'].includes(r.selector),
      ),
    ],
    'react/jsx-pascal-case': 0,
    'no-unused-expressions': 0,
    // React
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/no-multi-comp': 0,
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'implicit-arrow-linebreak': 0,
    'react/prop-types': [1, {
      ignore: [
        // `dispatch` is typically used by Redux `@connect`
        'dispatch',
        // `data` is injected by Apollo
        'data',
        'mutate',
        // history, match, and location come from react-router
        'history',
        'match',
        'location',
      ],
    }],

    // Import
    'import/no-unresolved': [2, { commonjs: true }],

    // Compat
    'compat/compat': 2,

    // JSX-a11y
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['a'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
          'node_modules',
        ],
      },
    },
  },
};
