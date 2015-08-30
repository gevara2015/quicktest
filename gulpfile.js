var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    connectLivereload = require('connect-livereload'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

var componentVendor = './src/components/**/';

var path = {
    'indexHtml': './src/*.html',
    'components': {
        'html' :  componentVendor + '*.html',
        'js'   :  componentVendor + '*.js',
        'css'  :  componentVendor + '*.css',
        'sass' :  componentVendor + '*.scss'
     }
};

var destVendor = './build/';

var compiledDist = {
    'css' : destVendor +'styles'
};

/**
 * init gulp server
 * */
gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 8000,
        livereload: true
    });
});

/**
 * livereload index*/
gulp.task('indexHtml', function(){
    gulp.src(path.indexHtml)
        .pipe(connect.reload())
});

/**
 * livereload components
 * */
gulp.task('componentsHtml', function(){
    gulp.src(path.components.html)
        .pipe(connect.reload())
});

gulp.task('componentsJs', function(){
    gulp.src(path.components.js)
        .pipe(connect.reload())
});

gulp.task('componentsCss', function(){
    gulp.src(path.components.css)
        .pipe(concat('main.css'))
        .pipe(connect.reload())
        .pipe(gulp.dest(compiledDist.css))

});

/**
 * compile file
 * */
gulp.task('compile:sass', function(){
 return gulp.src(path.components.sass)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(compiledDist.css))
     .pipe(connect.reload())

});

/**
 * live reload*/
gulp.task('watch', ['componentsJs', 'componentsCss', 'componentsHtml', 'compile:sass'], function () {
    gulp.watch(path.indexHtml,       ['componentsHtml']);

    gulp.watch(path.components.html, ['indexHtml']);
    gulp.watch(path.components.js,   ['componentsJs']);
    gulp.watch(path.components.css,  ['componentsCss']);
    gulp.watch(path.components.sass, ['compile:sass']);
});


gulp.task('default',['connect', 'watch']);