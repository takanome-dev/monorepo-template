module.exports = {
  ...require('eslint-config-custom/eslint-server'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist'],
};
