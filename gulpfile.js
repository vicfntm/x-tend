var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('autoprefixer');


gulp.task('sass', function () {
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('autoprefixer', function () {
    return gulp.src('./css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            flexbox: true,
            cascade: false
        }))
        .pipe(gulp.dest('./css/css'));
});

// gulp.task('autoprefixer', function () {
//   return gulp.src('./css/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer() ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css/css/'));
// });

gulp.task('mincss', function(){
  var fb = gulp.src('./css/css/*.css');
    fb.pipe(minifyCss());
    fb.pipe(gulp.dest('./css/css'));
    return fb;
});
 

gulp.task('watch', function () {
  gulp.watch('./dev/sass/**/*.scss', ['sass']);
  gulp.watch('./css/**/*.css', ['autoprefixer'] );
  gulp.watch('./css/css/**/*.css', ['mincss'] );

});




