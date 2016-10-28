var path = require('path')
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')
var UnusedFilesWebpackPlugin = require("unused-files-webpack-plugin").default

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ["react-hot", "babel?presets[]=react&presets[]=es2015"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css', 'postcss' ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [ 'url' ],
        query: { limit: 8192 }
      }
    ]
  },
  plugins: [
    new UnusedFilesWebpackPlugin({
        pattern: 'src/**/*.*'
    }),
    new BellOnBundlerErrorPlugin()
  ],
  progress: true
}
