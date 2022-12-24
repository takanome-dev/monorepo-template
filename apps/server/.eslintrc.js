module.exports = {
  ...require('eslint-config-custom/eslint-server'),  
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist'],
};
