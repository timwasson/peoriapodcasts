var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass');

gulp.task('buildhtml', function buildHTML() {
  return gulp.src('assets/index.pug')
  .pipe(pug({
    //filename: 'index.pug'
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
