'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var bless = require('gulp-bless');


var paths = {
	'source-sass': './sass/*.sass',
	'transpiled-css': './css',
};

gulp.task('sass', [], function () {
  return gulp.src(paths['source-sass'])
    .pipe(sass().on('error', sass.logError))
    //.pipe(uglify())
    .pipe(concat('all.min.css'))
    .pipe(bless())
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(gulp.dest(paths['transpiled-css']));
});

gulp.task('sass:watch', function () {
  gulp.watch([paths['source-sass']], ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);