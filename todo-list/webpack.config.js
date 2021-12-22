const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
    }),
  ],
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};

