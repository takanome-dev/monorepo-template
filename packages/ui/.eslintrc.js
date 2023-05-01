module.exports = {
  root: true,
  extends: ['custom'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/*.js', 'dist', 'node_modules'],
};
