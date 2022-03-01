const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')
module.exports = {
  mode: 'development',
  ...base,
  module: {
    rules: [
      {
        test: /\.css$/i,
       use: ["style-loader", "css-loader"],
        
      },
    ],
  },
};