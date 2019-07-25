/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        src: ['./src/index.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom'],
    },

    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src'),
        port: 3001,
    },

    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            src: path.resolve(__dirname, './src/'),
        },
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}
