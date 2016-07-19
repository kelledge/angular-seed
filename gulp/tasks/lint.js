var config = require('../config');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var remember = require('gulp-remember');

// TODO: Copy-pasted. Centralize in gulp/config.js
var allScripts = [].concat.apply([],[config.scripts.src, config.scripts.gulp]);

// TODO: This will not handled removed files properly
gulp.task('lint', function() {
  return gulp.src(allScripts)
    .pipe(cached('lint'))
    .pipe(eslint())
    .pipe(remember('lint'))
    .pipe(eslint.format());
});
