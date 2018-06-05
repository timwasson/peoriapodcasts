var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('buildhtml', function buildHTML() {
  return gulp.src('assets/index.pug')
  .pipe(pug({
    //filename: 'index.pug'
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
  
  gulp.watch("assets/sass/*.scss", ['sass']);
  gulp.watch("assets/*.pug", ['buildhtml']);
  gulp.watch("dist/**/*.html").on("change", browserSync.reload);
  
});
