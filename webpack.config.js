const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
 
  devServer: {
    static: "./dist"
  },
  entry: './src/index.js',
  output: {
 
    filename: 'index.[contenthash].js',
  },
  plugins: [
  new HtmlWebpackPlugin({
    title:'aaa',
    template:'src/assets/index.html'

  }),
  new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder:false,
    }),
  ],
  
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       // use: ["style-loader", "css-loader"],
  //       use:[
  //         {
  //           loader: MiniCssExtractPlugin.loader,
  //           options:{
  //             publicPath:'../',
  //             hmr:process.env.NODE_ENV ==='development',
  //           },
  //         },
  //         'css-loader',
  //       ]
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};