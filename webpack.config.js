var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var postLoaders = require('./webpack.postloaders');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './src/index.jsx' // Your appʼs entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss() {
        return [require('precss'), require('autoprefixer')]
    },
    module: {
        loaders: loaders,
        postLoaders: postLoaders
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
        stats: {
            colors: true,
            chunks: false
        },
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};