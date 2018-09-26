const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        app: "./index.js"
    },
    output: {
        filename: "bundle.js",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
