var config = require('../config');
var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require("browser-sync");

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream());
});
