const config = require('@nunt/design/tailwind.config.js');

module.exports = {
  darkMode: config.darkMode,
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './node_modules/@nunt/**/**/*.js'
    ],
  },
  theme: config.theme,
  corePlugins: config.corePlugins,
  variants: config.variants,
  plugins: config.plugins
};
