const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const bundleFileName = 'vodsearch-bundle';
const dirName = './src/dist';

module.exports = (env, argv) => {
    return {
        mode: argv.mode === "production" ? "production" : "development",
        entry: ['./src/styles/App.scss'],
        output: {
            filename: bundleFileName + '.js',
            path: path.resolve(__dirname, dirName)
        },
        module: {
            rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: bundleFileName + '.css'
            })
        ]
    };
};