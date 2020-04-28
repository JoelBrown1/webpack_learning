const path = require("path");

module.exports = {
    mode: "development",
    entry: "/source/index.sj",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js", 
        publicpath: ""
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};