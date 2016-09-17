var webpack = require('webpack'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	autoprefixer = require('autoprefixer'),
    path = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
//var lib_dir = __dirname + './dist/libs',
//   node_dir = __dirname + './node_modules';

module.exports = {
    debug: true,
    devtool: 'source-map',
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },   
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
            // extract SASS files
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass-loader")
            }
            // {
            //     test: /\.js?$/,
            //     loader: 'babel',
            //     exclude: /node_modules/
            // }
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
	    }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    postcss: [
    	autoprefixer({
      		browsers: ['last 5 versions']
    	})
  	]
};