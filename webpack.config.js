const Dotenv = require('dotenv-webpack');
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildDirectory = path.resolve(__dirname, "./build/");
const sourceDirectory = path.resolve(__dirname, "./src/");
const entryFile = sourceDirectory + "/ts/index.tsx";
const indexFile = sourceDirectory + "/index.html";

module.exports = {

  entry: entryFile,

  output: {
    filename: "bundle.[hash].js",
    path: buildDirectory,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "tslint-loader",
        enforce: "pre"
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
          plugins: ["react-hot-loader/babel"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|woff)$/i,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: indexFile }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // If global variable is logging is necessary
    // new webpack.DefinePlugin({
    //     __DEV__: process.env.NODE_ENV === "development"
    // }),
  ],

  stats: {
    hash: false,
    version: false,
    chunks: false,
    modules: false,
    children: false,
    colors: true
  }
};