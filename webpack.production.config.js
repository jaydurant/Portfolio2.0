var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'cheap-module-source-map', 
	entry: __dirname + '/app/js/app.jsx',
	output: {
		path: __dirname + '/app/prod/',
		filename: 'app.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader:'babel',
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("css!postcss!sass"),
			},
			{
				test: /(\.jpg|\.png|\.svg)$/,
				loader:'file',
			}

		]
	},

	resolve: {
		extensions: ['','.js','.jsx']
	},

	postcss: [
		autoprefixer({ broswers: ['last 2 versions','ie > 7']}), 
	],

	plugins: [
		new webpack.BannerPlugin("Coded by Jason Durant"),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("style.min.css")
	],
};