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
            
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
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
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    devServer: {
        inline: true
    }
}