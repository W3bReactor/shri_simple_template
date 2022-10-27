/* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const config = {
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
    about: './src/pages/About.jsx',
    home: './src/pages/Home.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveOnlyStats: false,
      open: false,
    }),
    new MiniCssExtractPlugin(),
    new LodashModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.ejs$/, /\.m?jsx$/, /\.ejsx$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    usedExports: true,
    concatenateModules: true,
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  mode: production ? 'production' : 'development',
  target: 'web',
  devServer: {
    contentBase: './dist',
    port: 3001,
    hot: true,
    overlay: true,
  },
  resolve: {
    extensions: ['*', '.html', '.css', '.js', '.jsx'],
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
    alias: {
      'react-is': path.resolve(__dirname, 'node_modules/react-is'),
    },
  },
};

module.exports = config;
