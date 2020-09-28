const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    publicPath: "./dist",
    contentBase: "./dist",
    hot: true,
    watchContentBase: true,
  },
};
