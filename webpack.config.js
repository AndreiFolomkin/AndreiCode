let path = require('path');
let config = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx',
                            '@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
};
module.exports = config;rts = config;