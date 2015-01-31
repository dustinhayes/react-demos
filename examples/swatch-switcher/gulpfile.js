var gulp = require('gulp');

var source = require('vinyl-source-stream');

var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


var browserifyConfig = (watchify.args.debug = true, watchify.args);
var bundler = watchify(browserify('./src/index.js', browserifyConfig));
bundler.transform(reactify);

var bundle = function () {
    console.log('bundling...');

    return bundler.bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest('dist/'));
};
bundler.on('update', bundle);
gulp.task('js', bundle);


gulp.task('default', ['js']);