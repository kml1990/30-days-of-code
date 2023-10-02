const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // import bundle analyzer plugin

module.exports = {
    mode: 'development',
    entry: { // source files
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: { // options related to how webpack emits results
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', 
        clean: true, // clean the output directory before emit
        assetModuleFilename: '[name][ext]', // customize asset filenames
    },
    devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
    devServer: { // configuration for webpack-dev-server
        static: {
            directory: path.resolve(__dirname, 'dist'), // where dev server will look for static files
        },
        port: 3000, // port to run dev-server
        open: true, // open browser automatically
        hot: true, // enable HMR on the server
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    },
    module: { // define how modules are processed
        rules: [ // array of rules for modules
            {
                test:/\.scss$/, // any files with scss extension
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            },
            {
                test: /\.js$/, // any files with js extension
                exclude: /node_modules/, // exclude node_modules
                use: { // use babel-loader to transpile js files
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ], // add preset-env to support modern js
                    },
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // any files with png, svg, jpg, jpeg, gif extension
                type: 'asset/resource', // emit the asset to output folder
            }
        ]
    },
    plugins: [ // array of plugins to apply to build chunk
        new HtmlWebpackPlugin({ // plugin for inserting scripts into html
            title: 'Webpack 5 App', // title to use for generated HTML document
            filename: 'index.html', // name of html file to be created
            template: path.resolve(__dirname, 'src/template.html'), // template file
        }),
        new BundleAnalyzerPlugin(), // add bundle analyzer plugin
    ]
}