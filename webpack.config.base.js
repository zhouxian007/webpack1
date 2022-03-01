const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    
  entry: './src/index.js',
  output: {
 
    filename: 'index.[contenthash].js',
  },
  plugins: [
  new HtmlWebpackPlugin({
    title:'aaa',
    template:'src/assets/index.html'

  }),
  ],
};