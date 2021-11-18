const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
  },
};
