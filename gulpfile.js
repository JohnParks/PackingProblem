var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', function() {
  // place code for your default task here
});


// simple one task tasks
gulp.task('concat', function() {
	return gulp.src('./lib/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('compress', function(cb) {
	pump([
			gulp.src('lib/*.js'),
			uglify(),
			gulp.dest('dist')
		],
		cb
	);
})