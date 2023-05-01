const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.loadHTML = () => ({
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
});

exports.generateHTML = ({ template } = {}) => ({
  plugins: [new HtmlWebpackPlugin({ template })],
});
