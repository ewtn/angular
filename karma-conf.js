module.exports = function(config) {
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
        basePath : '',

        // files to include, ordered by dependencies
        files : [
            // include relevant Angular files and libs
            'public/components/angular/angular.js',
            'public/components/angular-route/angular-route.js',
            'public/components/angular-mocks/angular-mocks.js',
            'public/components/angular-animate/angular-animate.js',

            // include js files
            'app/app.module.js',
            'app/**/*.controller.js',
            'app/**/*.directive.js',
            'app/**/*.filter.js',
            'app/**/*.service.js',
            'app/**/*.mock.js',

            // include unit test specs
            'app/**/*.spec.js'
        ],
        // files to exclude
        exclude : [],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch : false,

        // testing framework, be sure to install the karma plugin
        frameworks: ['jasmine'],

        // browsers to test against, be sure to install the correct karma browser launcher plugin
        browsers : ['PhantomJS'], // , 'Firefox', 'Chrome'

        // progress is the default reporter
        reporters: ['progress', 'coverage'],

        // map of preprocessors that is used mostly for plugins
        preprocessors: {
            'app/**/*.controller.js': ['coverage'],
            'app/**/*.service.js': ['coverage']
        },

        // list of karma plugins
        plugins : [
            //'karma-junit-reporter',
            //'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        // add plugin settings
        coverageReporter: {
            reporters: [{
                // type of file to output, text outputs to console
                type : 'text',
                dir: 'build/coverage/',
                file: 'coverage.txt'
            },{
                // xml with line number information
                type : 'cobertura',
                dir: 'build/coverage/',
                file: 'coverage.xml'
            }]
        }
    });
};