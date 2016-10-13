/* modified from original source: http://spencerdixon.com/blog/test-driven-react-tutorial.html */
var argv = require('yargs').argv
var path = require('path')

module.exports = function(config) {
  config.set({
    // only use PhantomJS for our 'test' browser
    browsers: ['PhantomJS'],

    // just run once by default unless --watch flag is passed
    singleRun: !argv.watch,

    // which karma frameworks do we want integrated
    frameworks: ['mocha', 'chai', 'browserify'],

    // displays tests in a nice readable format
    reporters: ['spec'],

    // include some polyfills for babel and phantomjs
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.spec.js' // specify files to watch for tests
    ],
    preprocessors: {
      // these files we want to be precompiled with browserify
      // also run tests throug sourcemap for easier debugging
      './src/**/*.js': ['browserify', 'sourcemap'],
      './test/**/*.js': ['browserify']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react'],
        sourceMap: 'inline'
      },
      plugins: [
        'transform-class-properties'
      ]
      // ,
      // filename: function (file) {
      //   return file.originalPath.replace(/\.js$/, '.es5.js');
      // },
      // sourceFileName: function (file) {
      //   return file.originalPath;
      // }
    },
    browserify: {
      debug: true,
      transform: [['babelify', {presets: ["es2015"]}]],
      paths: ['./src'],
      configure: function(bundle) {
        bundle.exclude('react/lib/ReactContext')
        bundle.exclude('react/lib/ExecutionEnvironment')
      }
      // externals: {
      //   'jsdom': 'window',
      //   'cheerio': 'window',
      //   'react/lib/ExecutionEnvironment': true,
      //   'react/lib/ReactContext': 'window'
      // }
    },
    // tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-browserify',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  })
}