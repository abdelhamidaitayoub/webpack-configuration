const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // rule of style : I'll add minifiling in production mode
      {
        test: /\.s[ac]ss/,
        use: [
          // Inject CSS into the DOM.
          'style-loader',
          // interprets @import and url() like import/require() and will resolve them.
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
