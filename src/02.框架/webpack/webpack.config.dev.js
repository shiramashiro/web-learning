const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Learning',
      template: "./public/01.属性选择器.html",
      hash: true
    })
  ]
};