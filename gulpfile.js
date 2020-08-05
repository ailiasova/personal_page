const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync');

let config = {
  server: {
    baseDir: 'app',
  },
  notify: false,
  host: 'localhost',
  port: 3000,
};

gulp.task('scss', function(){
  return gulp.src('app/style/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/style/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync(config);
});

gulp.task('code', function() {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
  gulp.watch('app/style/main.scss', gulp.parallel('scss'));
});


gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch'));
