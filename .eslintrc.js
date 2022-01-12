module.exports = {
  root: true,
  extends: ['plugin:import/errors'],
  settings: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1754
    'import/ignore': ['react-native'],
  },
  rules: {
    'no-unused-vars': ['error'],
    'no-console': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
