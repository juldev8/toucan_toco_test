/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dotenv = require("dotenv");

let env;

if (process.env.FRONT_TEST === "true") {
  env = dotenv.config({ path: path.join(__dirname, ".env.test") }).parsed;
} else {
  env = dotenv.config().parsed;
}

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`ENV_${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", publicPath: "/" }),
    new webpack.DefinePlugin(envKeys),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    historyApiFallback: true,
  },
};
