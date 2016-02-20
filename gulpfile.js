'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');


var defaultAssets = {
    less: [
        ''
    ],
    lib: [
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ],
    app: [
        './app/modules/core/app/config.js',
        './app/modules/core/app/init.js',
        './app/modules/core/*.js',
        './app/modules/!(core)/*.js',
        './app/modules/*/!(app)/*.js'
    ],
    views: [
        'modules/*/client/views/**/*.html'
    ]
};



// Build the Lib files
gulp.task('buildLib', function() {

    return gulp
        .src(
            defaultAssets.lib
        )
        .pipe(
            concat('lib.js')
        )
        .pipe(
            gulp.dest('./public/js')
        );
});



// Build the app files
gulp.task('buildApp', ['buildLib'], function() {

    return gulp
        .src(
            defaultAssets.app
        )
        .pipe(
            concat('app.js')
        )
        .pipe(
            gulp.dest('./public/js')
        );
});


// start a basic server
gulp.task('webserver', ['buildLib', 'buildApp'], function() {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            open: false
        }));
});



gulp.task('default', [
    'buildLib',
    'buildApp',
    'webserver'
]);
