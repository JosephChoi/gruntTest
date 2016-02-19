module.exports = function(grunt){
//    grunt.initConfig({
//        useminPrepare: {
//            html: 'app/index.html',
//            options: {
//                dest: 'build'
//            }
//        },
//        usemin: {
//            html: ['build/index.html']
//        },
//        copy: {
//            task0: {
//                src: 'app/index.html',
//                dest: 'build/index.html'
//            }
//        },
//        
//        //Rename file for busting cache on the browser
//        filerev: {
//            options: {
//                encoding: 'utf8',
//                algorithm: 'md5',
//                length: 8
//            },
//            source: {
//                files: [{
//                    src: [
//                        'build/**/*.{js,css}'
//                    ]
//                }]
//            }
//        },
//        
//        
//    });
    
    grunt.initConfig({
        
        // clean folder
        clean: {
            build : {
                src: ['build/**/*']
            },
            tmp :{
                src: ['.tmp/']
            }
        },

        copy: {
            task0: {
                expand: true,
                cwd: 'app/',
                src: '{,**/}*.html',
                dest: 'build/'
            }
        },
        
        useminPrepare: {
            html: ['app/**/*.html'],
            options: {
                root: 'app',
                dest: 'build'
            }
        },
        usemin: {
            html: ['build/**/*.html'],
            options: {
                assetsDirs: ['build']
            }
        },
//        copy: {
//            task0: {
//                src: 'app/**/*.html',
//                dest: 'build/'
//            }
//        },
        
        
        

        //Rename file for busting cache on the browser
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            source: {
                files: [{
                    src: [
                        'build/**/*.{js,css}'
                    ]
                }]
            }
        },


    });
    
    
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');
    
    grunt.registerTask('build', [
        'clean',
        'copy:task0',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]);
}