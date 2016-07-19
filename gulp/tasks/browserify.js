var config = require('../config');
var gulp = require('gulp');
var browserify = require('browserify');
var ngAnnotate =require('browserify-ngannotate');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var glob = require('glob');
var browserSync = require('browser-sync');
var gulpif = require('gulp-if');

var logger = {
  start: function() {
    gutil.log(gutil.colors.green("Rebundling"));
  },

  end: function() {
    gutil.log(gutil.colors.green("Finished rebundling"));
  }
};

gulp.task('browserify', function() {

  var bundler = browserify({
      entries: config.sourceDir + 'js/main.js',
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: false
    });

  var transforms = [
    { name: ngAnnotate, options: {} }
  ];

  // TODO: !BUILD ISSUE! Using glob to source all project files causes watchify
  //       to not pick up new files. We will need to convert the entire project
  //       to commonJS modules to sort this out.
  config.scripts.src.forEach(function(src) {
    bundler.add(glob.sync(src));
  });

  transforms.forEach(function (transform) {
    bundler.transform(transform.name, transform.options);
  });

  bundler = watchify(bundler);
  bundler.on('update', rebundle);

  function rebundle() {
    logger.start();
    var stream = bundler.bundle();
    return stream
      .on('end', logger.end)
      .on('error', function(e) {
        gutil.log(gutil.colors.red(e.toString()));
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true}))
      .pipe(gulpif(false, uglify()))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.buildDir + 'js/'))
      .pipe(browserSync.stream());
  }

  return rebundle();
});
