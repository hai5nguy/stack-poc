const path = require('path')
const webpack = require('webpack')

// const isProd = process.env.NODE_ENV === 'production'

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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // API_URL: JSON.stringify(package.apiUrl)
    }),
  ]
}

if (process.env.NODE_ENV !== 'production') {
  config.entry.unshift('react-hot-loader/patch')
  config.devServer = {
    historyApiFallback: true,
    hot: true,
    port: 8000
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config