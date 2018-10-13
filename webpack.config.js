const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        app: "./index.js"
    },
    output: {
        filename: "bundle.js",
        library: "Rules",
        libraryExport: "default",
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
