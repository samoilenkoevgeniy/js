const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'dev';

const optionsLiveReload = {};

const config = {
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
	],
	devtool: NODE_ENV === 'dev' ? 'source-map' : null
};

const appConfig = Object.assign({}, config, {
	name: 'app',
	entry: './src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './bundles')
	}
});

const gameConfig = Object.assign({}, config, {
	name: 'game',
	entry: './src/js/game.js',
	output: {
		filename: 'bundle_game.js',
		path: path.resolve(__dirname, './bundles')
	}
});

module.exports = [
	appConfig, gameConfig
];