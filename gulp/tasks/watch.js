var config = require('../config');
var gulp = require('gulp');

// TODO: Copy-pasted. Centralize in gulp/config.js
var allScripts = [].concat.apply([],[config.scripts.src, config.scripts.gulp]);

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.views.watch, ['views']);
  gulp.watch(allScripts, ['lint']);
});
