const merge = require('webpack-merge');
const path = require("path");
const baseConfig = require('./webpack.config.js');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: "production",

    plugins: [
        new CleanWebpackPlugin(
            [
                path.resolve(__dirname, "./build/")
            ],
            {
                root: process.cwd()
            })
    ]
});