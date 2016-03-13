'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: './lib',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  resolve: {
    alias: {
      meditable: path.resolve('src')
    }
  }
}
