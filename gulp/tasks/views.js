var config = require('../config');
var gulp = require('gulp');
var merge = require('merge-stream');
var templateCache = require('gulp-angular-templatecache');
var browserSync = require("browser-sync");

gulp.task('views', function() {
  var indexFile = gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream());

  var views = gulp.src(config.views.src)
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream());

  return merge(indexFile, views);
});
