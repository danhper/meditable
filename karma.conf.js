'use strict'

const assign = require('object-assign')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
    ],
    files: [
      'test/**/*-test.js'
    ],
    webpack: assign(require('./webpack.config'), {devtool: 'inline-source-map'}),
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      'test/*-test.js': ['webpack', 'sourcemap'],
      'test/**/*-test.js': ['webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha']
  })
}
