var config = require('../config');
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var browserSync = require("browser-sync");

gulp.task('styles', function() {
  return gulp.src(config.styles.src)
    .pipe(concatCss('app.css'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream());
});
