var  path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['./main.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8181
    },
   module: {
        loaders: [
                {
                	test: /\.js$/, 
                	exclude: /node_modules/,
                	loader: 'babel-loader',
                	query: {
                  	presets: ['react', 'latest']
                  	}
                },
        ]
    } 
};