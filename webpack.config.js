
const ENV = process.env.ENV || 'dev';
const PORT = 8888;
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const folders = {
	src: path.join(__dirname, './app'),
	dest: path.join(__dirname, './htdocs'),
	nodeModules: path.resolve(__dirname, './node_modules')
};

console.log('\r\n\r\n ============================\r\n\r\n');
console.log(`ENV: ${ENV} | PORT ${PORT}`);
console.log('\r\n\r\n ============================\r\n\r\n');

module.exports = {

	mode: (ENV === 'dev') ? 'development' : 'production',

	devtool: (ENV === 'dev') ? 'source-map' : 'cheap-module-source-map',

	stats: 'errors-only',

	entry: {
		'app': './app/index.jsx',
	},

	output: {
		path: folders.dest,
		publicPath: '/',
		pathinfo: (ENV === 'dev'), // show comments in bundles
		filename:
			(ENV === 'build' || ENV === 'prod')
				? 'bundles/[name]/[name].min.js?[hash]'
				: 'bundles/[name]/[name].js?[hash]',
		chunkFilename:
			(ENV === 'build' || ENV === 'prod')
				? 'chunks/[name]/[name].min.js?[hash]'
				: 'chunks/[name]/[name].js?[hash]',
	},

	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react','stage-2']
						}
					},
					{
						loader: 'eslint-loader'
					}
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.styl$/,
				loaders:
					[
						'style-loader',
						'css-loader?sourceMap',
						// 'postcss-loader',
						'stylus-loader'
					]
			},
		]
	},

	resolve: {
		extensions: ['.js','.jsx'],
		modules: [
			'node_modules',
			folders.src
		],
		alias: {
			'node_modules': folders.nodeModules,
			'app': folders.src
		}
	},

	devServer: {
		port: PORT,
		noInfo: true,
		contentBase: folders.dest,
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: '/index.html' },
			]
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './app/index.html',
			filename: './index.html',
			chunks: ['app'],
			chunksSortMode: function (a, b) {
				var order = ['app'];
				return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
			}
		})
	],


};