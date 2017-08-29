// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber')

// 以下を追記
gulp.task('sass', function() {
  return gulp.src(['./src/sass/**/*.scss'])
  	.pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);