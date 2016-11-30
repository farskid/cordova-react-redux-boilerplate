let path = require('path')
let webpack = require('webpack')
let autoprefixer = require('autoprefixer')
let postCSS = require('postcss')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractCSS = new ExtractTextPlugin('style.css')

console.log(`Mode: ${process.env.NODE_ENV}`)

module.exports = {
  devtool: 'eval-source-map', //cheap-module-eval-source-map (Production)
  entry: './www/index.js',
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    filename: 'bundle.js',
    publicPath: process.env.NODE_ENV == 'production' ? './www/dist' : 'http://localhost:3200/dist',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.optimize.DedupePlugin(),
    extractCSS
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: extractCSS.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['> 0%']
    })
  ]
}
