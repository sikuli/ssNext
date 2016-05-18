const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const production = process.env.NODE_ENV === 'production';

let plugins = [
  new ExtractPlugin('bundle.css'),
  new SassLintPlugin({
    configFile: '.sass-lint.yml',
    glob: 'res/stylesheets/**/*.s?(a|c)ss',
    failOnError: true,
  })
];
let publicPath = 'http://localhost:8080/builds/';
if (production) {
  publicPath = '/builds';
  plugins = plugins.concat([
    // Cleanup the builds/ folder before compiling our final assets
    new CleanPlugin('builds'),
    // Minify the final bundle
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
    })
  ]);
}

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'builds'),
    filename: production ? 'bundle-[hash].js' : 'bundle.js',
    publicPath // location where to find built assets from the point of view of the page.
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.scss/,
        loader: ExtractPlugin.extract('style', 'css!sass'),
        include: path.resolve(__dirname, 'res', 'stylesheets')
      }
    ]
  },
  debug: !production,
  devtool: production ? false : 'eval',
  plugins
};
