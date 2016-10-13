module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ['jasmine', 'browserify'],
    reporters: ['spec'],
    browsers: ['Chrome'],
    // customContextFile: './src/index.html',
    files: [
      './src/**/*.js',
      './test/**/*.spec.js'
    ],
    preprocessors: {
      './src/**/*.js': ['browserify'],
      './test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', {presets: ['es2015'], plugins: ['transform-class-properties']}]
      ],
      paths: ['./src'],
      configure: function(bundle) {
        bundle.exclude('react/lib/ReactContext')
        bundle.exclude('react/lib/ExecutionEnvironment')
      }
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react'],
        sourceMap: 'inline'
      },
      plugins: [
        'transform-class-properties'
      ]
    },
    plugins: [
      // tell karma all the plugins we're going to be using to prevent warnings
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-browserify',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  })
}