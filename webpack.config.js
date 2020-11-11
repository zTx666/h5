var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require( "optimize-css-assets-webpack-plugin" ); 
const devMode = 'production';
module.exports = {
    mode: devMode,
    entry: {
        "index": "./src/js/index.js",
        "thanks":"./src/js/thanks.js"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            //绝对路径
            $: path.resolve(__dirname, './src/js/jquery-3.4.1.min.js')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        open: true,
        hot: true,
        inline: true,
        compress: true,
        port: 8000,
        host: 'localhost',
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: "/",
        watchOptions: {
            aggregateTimeout: 2000,
            poll: 1000
        }
    },
    module: {
        rules: [{
                test: /.js$/,
                use: ['babel-loader'],
            },
            {
                test: /.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/css/',
                        },
                    },
                    "css-loader"
                ]
            }, /*解析css, 并把css添加到html的style标签里*/
            {
                test: /\.(gif|png|jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5 * 1024,
                        outputPath: "/img/",
                        publicPath: '/img',
                        name: "[name].[ext]",
                        esModule: false,
                    }
                }]
            }, /*解析图片*/
            {
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            } /*解析less, 把less解析成浏览器可以识别的css语言*/ , {
                test: /.stylus$/,
                use: ['stylus-loader', 'css-loader']
            },
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            publicPath: '/',
            template: "./src/index.html",
            chunks: ['vendors', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: '/html/thanks_gift.html',
            publicPath: '../',
            template: "./src/html/thanks_gift.html",
            chunks: ['vendors', 'thanks'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new webpack.ProvidePlugin({
            $: "jQuery"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        //对生成的CSS文件进行代码压缩 mode='production'时生效
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
}