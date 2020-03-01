const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const postcssFlexbugsFixer = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')
const CopyPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin
const WebpackLaravelMixManifest = require('webpack-laravel-mix-manifest')

const OUTPUT_FOLDER = 'public'
const ENTRY_FOLDER = 'resources'

const getStyleLoaders = (cssOptions, preProcessor) => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
		},
		{
			loader: require.resolve('css-loader'),
			options: cssOptions,
		},
		{
			loader: require.resolve('postcss-loader'),
			options: {
				ident: 'postcss',
				plugins: () => [
					postcssFlexbugsFixer,
					postcssPresetEnv({
						autoprefixer: {
							flexbox: 'no-2009',
						},
						stage: 3,
					}),
				],
			},
		},
	]
	if (preProcessor) {
		if (Array.isArray(preProcessor)) {
			for (let i = 0; i < preProcessor.length; i++) {
				const element = preProcessor[i]

				if (typeof element === 'string') {
					loaders.push(require.resolve(element))
				} else {
					loaders.push(
						Object.assign(element, {
							loader: require.resolve(element.loader),
						}),
					)
				}
			}
		} else {
			loaders.push(require.resolve(preProcessor))
		}
	}
	return loaders
}

const config = {
	entry: {
		app: [`./${ENTRY_FOLDER}/js/index.jsx`],
	},
	node: {
		fs: 'empty',
	},
	output: {
		path: path.resolve(__dirname, OUTPUT_FOLDER),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: [path.resolve(__dirname, './node_modules')],
				use: [require.resolve('babel-loader')],
				enforce: 'pre',
				resolve: {
					extensions: ['.js', '.jsx'],
				},
			},
			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				loader: getStyleLoaders({ importLoaders: 2 }),
				sideEffects: true,
			},
			{
				test: /\.module\.css$/,
				use: getStyleLoaders({
					importLoaders: 2,
					modules: true,
					getLocalIdent: getCSSModuleLocalIdent,
				}),
			},
			{
				test: /\.eot|ttf|woff2?$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							name: './img/[name].[ext]',
						},
					},

					'img-loader',
				],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, OUTPUT_FOLDER),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${ENTRY_FOLDER}/index.html`,
		}),
		new CopyPlugin([
			{ from: `${ENTRY_FOLDER}/img/menu_items`, to: 'img/menu_items' },
		]),
	],

	optimization: {},
}

module.exports = (env, argv) => {
	if (argv.mode === 'production') {
		config.output.filename = '[name].[hash].js'

		// Plagins
		config.plugins.unshift(
			new CleanWebpackPlugin([`${OUTPUT_FOLDER}/img`], {
				root: __dirname,
				verbose: true,
				dry: false,
			}),
		)

		const prodPlugins = [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
			}),
			// new BundleAnalyzerPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css',
				chunkFilename: '[name].chunk.css',
			}),
			new WebpackLaravelMixManifest(),
		]

		config.plugins = [...config.plugins, ...prodPlugins]

		config.optimization.minimize = true
	} else {
		config.devtool = 'inline-source-map'

		const devPlugins = [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].chunk.css',
			}),
		]

		config.plugins = [...config.plugins, ...devPlugins]
	}

	return config
}
