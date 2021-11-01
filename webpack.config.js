const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    performance:{
        maxAssetSize: 30000000,
        maxEntrypointSize: 100000000
    },
    entry: './src/main.tsx',

    output: {
        filename:'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname + '/webpackDist'),
    },

    resolve:{
        extensions: ['.ts', '.tsx','.js','.css','.json'],
        alias:{
            '@':path.resolve(__dirname+'/src'),
            '@img':path.resolve(__dirname+'/src/img'),
            '@component':path.resolve(__dirname+'/src/component'),
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css'
        }),
        new CopyPlugin({
            patterns:[{
                from:path.resolve(__dirname + '/public'),
                to:'./',
                globOptions:{
                    ignore:['**/index.html']
                }
            }],
        }),
        new CleanPlugin.CleanWebpackPlugin(),
        // new CompressionWebpackPlugin()
    ],

    module:{
        rules:[
            {
                test:/\.(js|ts|tsx)$/,
                exclude:/node_modules/,
                use:['babel-loader','ts-loader'],
            },
            {
                test:/\.(css|less)$/,
                exclude:/node_modules/,
                use:[
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       {
                           loader:'postcss-loader',
                           options:{
                               postcssOptions:{
                                  plugins:[
                                    require("postcss-preset-env"),
                                    require("tailwindcss"),
                                  ],
                               },
                           }
                       },
                    //    'postcss-loader',
                       'less-loader',
                    ],
            },
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                exclude:/node_modules/,
                loader:'file-loader',
                options:{
                    outputPath:'img/'
                }
            }
        ]
    },

    optimization:{
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
            chunks: 'all'
        },
        minimize:true,
        minimizer:[
            new UglifyjsPlugin({
                sourceMap: true,
            }),
            new TerserWebpackPlugin({
                sourceMap: true,
                parallel: true,
              }),
        ],
    },
     
    devtool: 'source-map'
}