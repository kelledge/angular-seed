var config = require('../config');
var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require("browser-sync");

gulp.task('fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream());
});
