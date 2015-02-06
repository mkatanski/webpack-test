module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};