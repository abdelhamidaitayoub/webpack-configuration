const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].js',
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  module: {
    rules: [
      // rule of style : I'll add minifiling in production mode
      {
        test: /\.s[ac]ss/,
        use: [
          // extract CSS file.
          MiniCssExtractPlugin.loader,
          // interprets @import and url() like import/require() and will resolve them.
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
