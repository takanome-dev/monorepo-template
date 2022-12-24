/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  //! you may not need this plugin if you are not using tailwindcss
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
