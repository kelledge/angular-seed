var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.buildDir
    },
    notify: false
  });
});
