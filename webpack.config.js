const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack')
const mode = process.env.NODE_ENV || 'development';

const VENDOR_LIBS = [
    "axios",
    "bootstrap",
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk",
]
module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
    },
    mode,
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all',
                }
            }
        },
        runtimeChunk: {
            name: 'manifest',
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000,
    },
}