const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = process.env.NODE_ENV || 'dev';
const devMode = NODE_ENV === 'dev';

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
				test: /\.s?[ac]ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'url-loader?limit=100000'
			},
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
		new LiveReloadPlugin(optionsLiveReload),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
	],
	devtool: devMode ? 'source-map' : null
};

const appConfig = Object.assign({}, config, {
	name: 'app',
	entry: path.resolve(__dirname, './src/js/app.js'),
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

const calcConfig = Object.assign({}, config, {
	name: 'calc',
	entry: [
		'./src/js/calc.js',
		'./src/styles/calc.scss',
	],
	output: {
		filename: 'bundle_calc.js',
		path: path.resolve(__dirname, './bundles')
	}
});

module.exports = [
	appConfig, gameConfig, calcConfig
];