module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {

            js: {
                src: [
                     'bower_components/modernizer/modernizr.js',
                     'bower_components/soundcloud.min.js',
                     'components/eliasInstagramModule.js',
                     'bower_components/angular-mailchimp.js',
                     'node_modules/jquery-mousewheel/jquery.mousewheel.js',



                     'js/app.js',
                     'routes.js',
                     'services.js',
                     'components/**/*.js',
                     'home/home.js',
                     'collection/collection.js',
                     'social/social.js',
                     'stockists/stockists.js',
                     'committee/committee.js',
                     'about/about.js',
                     'contact/contact.js'
                    ],
                dest: 'js/concat.js'
            }
        },
        // uglify: {
        //   options: {
        //     report: 'min',
        //     mangle: false,
        //     compress: true
        //   },
        //   js: {
        //         files: {
        //             'app.min.js': ['concat.js']
        //         }
        //     }
        // },
        watch: {
                js: {
                  files: [
                    'bower_components/angular/angular.min.js',
                     'bower_components/modernizer/modernizr.js',
                     'node_modules/jquery-mousewheel/jquery.mousewheel.js',


                    //  'bower_components/jquery/jquery.js',
                    //  'bower_components/angular-touch/angular-touch.min.js',
                    //  'bower_components/angular-sanitize/angular-sanitize.min.js',
                    //  'bower_components/angular-route/angular-route.min.js',
                    //  'bower_components/angular-resource/angular-resource.min.js',
                    //  'bower_components/angular-animate/angular-animate.min.js',
                    //  'bower_components/angular-touch/angular-touch.js',
                    //  'bower_components/video.js/dist/video-js/video.dev.js',
                    //  'bower_components/soundcloud.min.js',
                    //  'components/eliasInstagramModule.js',
                    //  'bower_components/angular-mailchimp.js',




                      'js/app.js',
                      'routes.js',
                      'services.js',
                      'components/**/*.js',
                      'home/home.js',
                      'collection/collection.js',
                      'social/social.js',
                      'stockists/stockists.js',
                      'committee/committee.js',
                      'about/about.js',
                      'contact/contact.js'

                  ],
                  // tasks: ['concat', 'uglify']
                tasks: ['concat']
                }
        }
        // compress: {
        //     dist: {
        //       options: {
        //         archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        //       },
        //       files: [{
        //         src: [ 'index.html' ],
        //         dest: '/'
        //       }, {
        //         src: [ 'js/**' ],
        //         dest: 'js/'
        //       }, {
        //         src: [ 'data/**' ],
        //         dest: 'data/'
        //       }, {
        //         src: [ 'app.min.js' ],
        //         dest: '/'
        //       }]
        //     }
        //   }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:js']);

        // grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
// , 'compress:js'
