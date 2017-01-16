const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const METADATA = {
    title: 'My template app',
    baseCss: 'assets/css/stylesheet.css',
    baseUrl: '/'
};

module.exports = {
    entry: {
        'main': './src/main.browser.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader', 'angular2-router-loader'] },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],

        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: METADATA.title,
            baseCss: METADATA.baseCss,
            metadata: METADATA,
            hash: true,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
        ]),
    ],
    devServer: {
        inline: true
    }
}