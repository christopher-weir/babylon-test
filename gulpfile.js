'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var html2js = require('gulp-html2js');


var defaultAssets = {
    sass: [
        './app/modules/*/sass/*.scss',
        './app/modules/*/sass/*.sass'
    ],
    lib: [
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ],
    app: [
        './app/modules/core/app/config.js',
        './app/modules/core/app/init.js',
        './app/modules/core/*.js',
        './app/modules/core/app/routes.js',
        './app/modules/!(core)/*.js',
        './app/modules/*/!(app)/*.js'
    ],
    views: [
        'app/modules/*/views/*.html'
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

// merge all the template html files to a js file
gulp.task('buildTemplates', [ 'buildLib' ], function() {
    return gulp
        .src(
            defaultAssets.views
        )
        .pipe(
            html2js(
                'template.js',{
                    name: 'templates-main',
                    useStrict: true
                }
            )
        )
        .pipe(
            concat('template.js')
        )
        .pipe(
            gulp.dest('./public/js' )
        );
});



// Build the app files
gulp.task('buildApp', ['buildLib','buildTemplates'], function() {

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


// sass task
gulp.task('sass', function() {

    return gulp
        .src('./app/modules/core/sass/app.sass')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});


// start a basic server
gulp.task('webserver', ['sass', 'buildLib', 'buildApp', 'buildTemplates'], function() {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            open: false
        }));
});





// Watch Files For Changes
gulp.task('watch', ['webserver'], function() {

    // watch all client sass
    gulp.watch(
        defaultAssets.app, [
            'buildApp'
        ]
    );

    // watch all client sass
    gulp.watch(
        defaultAssets.sass, [
            'sass'
        ]
    );

    // watch all client views
    gulp.watch(
        defaultAssets.views, [
            'buildTemplates'
        ]
    );
});



gulp.task('default', [
    'buildLib',
    'buildTemplates',
    'buildApp',
    'sass',
    'webserver',
    'watch'
]);
