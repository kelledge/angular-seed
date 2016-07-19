var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {
  runSequence(['fonts', 'images', 'styles', 'views', 'lint'], 'browserify', 'watch', cb);
});
