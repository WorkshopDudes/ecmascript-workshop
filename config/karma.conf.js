var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            // phantomjs needs this to support bind()
            '../node_modules/phantomjs-polyfill/bind-polyfill.js',
            'polyfills.js',
            // only specify one entry point and require all tests in here
            {
                pattern: 'tests.bundle.js', watched: false
            }
        ],
        frameworks: ['mocha', 'chai', 'sinon'],
        preprocessors: {
            // add webpack as preprocessor
            'polyfills.js': ['webpack'],
            'tests.bundle.js': ['webpack']
        },
        reporters: ['spec'],
        webpack: {
            resolve: {
                modulesDirectories: ['node_modules'],
                extensions: ['','.js']
            },
            module: {
                loaders: [
                    {test: /\.js/, exclude: /node_modules/, loader: 'babel'},
                    {test: /\.js/, exclude: /node_modules/, loader: 'eslint'}
                ]
            },
            // by default, watch for changes - override with '--single-run' when running karma
            watch: true,
            eslint:{
                configFile: '.eslintrc.yml'
            }
        },
        colors: true,
        logLevel: config.LOG_INFO,
        webpackServer: {
            noInfo: true
        }
    });
};
