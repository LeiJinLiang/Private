var path = require('path')
var webpack = require('webpack')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

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
        new webpack.NoEmitOnErrorsPlugin(),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module : {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            }
        ]
    }
}