'use strict';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
  // The standard entry point and output config
  entry: {
    home: "./ui/pages/home/index.js",
    subpage: "./ui/pages/subpage/index.js"
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    host: '0.0.0.0',
    publicPath: '/build'
  }
}
