var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry : [
        'webpack-hot-middleware/client',
        './main.js'
    ],
    output : {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module : {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}