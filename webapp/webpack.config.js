const path = require('path')

const config = {
  entry: [
    'react-hot-loader/patch',
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
  }
}

module.exports = config