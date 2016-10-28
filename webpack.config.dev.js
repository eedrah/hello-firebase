var webpack = require('webpack')
var merge = require('merge-and-concat')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      title: 'Eedrah',
      filename: 'index.html',
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      baseHref: '/'
    })
  ]
})
