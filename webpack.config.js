var webpack = require('webpack'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	autoprefixer = require('autoprefixer'),
    path = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        main: './src/scripts/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
		loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
     plugins: [
        new ExtractTextPlugin("[name].css"),
        new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 3000,
	      server: { baseDir: ['./'] }
	    })
    ],
    postcss: [
    	autoprefixer({
      		browsers: ['last 5 versions']
    	})
  	]
};