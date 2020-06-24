const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        publicPath: "/", 
    },

    devtool: "source-map",
    watchOptions: {
        poll: 500,
        ignored: /node_modules/
    },
    devServer: {
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        historyApiFallback:true,
        // If external server communication is required
        // proxy: [{
        //     context: ["/api"],
        //     target: "http://localhost:8080"
        // }],
        stats: {
            hash: false,
            version: false,
            chunks: false,
            modules: false,
            children: false,
            colors: true
        }
    }
});