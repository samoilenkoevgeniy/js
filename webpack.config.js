const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const entries = [
	'./src/js/app.js'
];

const NODE_ENV = process.env.NODE_ENV || 'dev';

const optionsLiveReload = {};

module.exports = {
	entry: entries,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './bundles')
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader",
				})
			},
			{
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'url-loader?limit=100000'
			},
			// font-awesome
			{
				test: /font-awesome\.config\.js/,
				use: [
					{loader: 'style-loader'},
					{loader: 'font-awesome-loader'}
				]
			},
		]
	},

	plugins: [
		new LiveReloadPlugin(optionsLiveReload)
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: "jquery",
		// 	"window.jQuery": "jquery"
		// }),
		// new webpack.DefinePlugin('NODE_ENV'),
		// new ExtractTextPlugin('bundle.css')
	],

	watch: NODE_ENV === 'dev',
	watchOptions: {
		aggregateTimeout: 100
	},
	devtool: NODE_ENV === 'dev' ? 'source-map' : null
};