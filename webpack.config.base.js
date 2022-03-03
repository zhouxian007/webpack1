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
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"], // 将图片文件编译为文件路径
      },
       {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader","stylus-loader"], // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader","less-loader"],
        
      },
      {
        test: /\.scss$/i,
        use:[
          'style-loader',
          'css-loader',
          {
            loader:"sass-loader",
            options:{
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ],
  },
};