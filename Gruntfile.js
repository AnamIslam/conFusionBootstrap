'use strict';

module.exports = function(grunt){
    
    //koto somoy lagbe task e
    require('time-grunt')(grunt);

    //Automatically load required grant task
    require('jit-grunt')(grunt);

    // Je task gula kora lagbe segula define kora
    grunt.initConfig({

        sass: {
            dist: {
                files:{
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask:'true',
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};