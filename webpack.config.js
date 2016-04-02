var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map', 
	entry: __dirname + '/app/js/app.jsx',
	output: {
		path: __dirname + '/app/js/',
		publicPath: "/assets/",
		filename: 'app.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/app/js/',
				exclude: /node_modules/,
				loader: 'eslint'
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader:'babel',
			},
			{
				test: /\.scss$/,
				loader:'style!css!resolve-url!sass?sourceMap',
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

	eslint: {
		failOnWarning: false,
		failOnError: false,
		fix: true
	},

	plugins: [
		new webpack.BannerPlugin("Coded by Jason Durant"),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	devServer:{
		contentBase: './',
		port: 3000,
		color: true,
		historyApiFallback: true,
		inline:true,
		hot: true
	}
};