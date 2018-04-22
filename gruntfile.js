module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            allFiles: [
                'src/*.js',
                'src/spas/*.js',
                'src/spas/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        karma: {
            single: {
                singleRun: true,
                files: [{
                    src: 'node_modules/expect.js/index.js'
                }, {
                    src: 'test/**/*.js'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/**/*.js', 'src/*.js', '!src/libs/**/*.js'],
                dest: 'dist/assets/app.min.js'
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['libs/**'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['views/**'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['assets/img/**'],
                        dest: 'dist/'
                    },
                ]
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/assets/app.min.css': ['src/assets/**/*.css']
                }
            }
        },
        watch: {
            files: ['src/**/*.js', 'src/*.js'],
            tasks: ['uglify'],
            options: {
                livereload: true
            },
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: "src",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).

    grunt.registerTask('default', ['jshint', 'connect', 'watch']);
    grunt.registerTask('dist', ['jshint', 'uglify', 'cssmin', 'copy']);
    grunt.registerTask('test', ['karma']);

};