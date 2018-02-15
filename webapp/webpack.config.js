const path = require('path')
const webpack = require('webpack')

const stack = process.env.STACK || 'none'
const apiUrl = process.env.API_URL || 'http://localhost:4000/graphql'

const config = {

  entry: [
    './src/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, include: /src/, use: [ 'file-loader?name=[name].[ext]' ] }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'STACK': JSON.stringify(stack),
      'API_URL': JSON.stringify(apiUrl)
    }),
  ]
}

if (stack === 'none' || stack === 'development') {
  config.entry.devtool = 'source-map'
  config.entry.unshift('react-hot-loader/patch')
  config.devServer = {
    historyApiFallback: true,
    hot: true, 
    port: 3001
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config