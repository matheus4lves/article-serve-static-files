const { merge } = require("webpack-merge");
const path = require("path");

const commonConfig = merge([
  {
    entry: ["./app/assets/scripts/index.js"],
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle.js",
    },
  },
]);

const configs = {
  development: merge([]),
  production: merge([]),
};

module.exports = (_, argv) => merge([commonConfig, configs[argv.mode], { mode: argv.mode }]);
