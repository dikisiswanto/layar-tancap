/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /\.style\.css$/i,
      },
      {
        test: /\.style\.css$/i,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new dotenv(),
  ],
  resolve: {
    alias: {
      Services: path.resolve(__dirname, 'src/scripts/services'),
      Pages: path.resolve(__dirname, 'src/scripts/pages'),
      Components: path.resolve(__dirname, 'src/scripts/components'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Utils: path.resolve(__dirname, 'src/scripts/utils'),
      Assets: path.resolve(__dirname, 'src/images/icon'),
    },
  },
};
