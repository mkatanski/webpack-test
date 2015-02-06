var webpack = require('webpack');
module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin('main', null, false)],
    module: {
        noParse: [],
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};