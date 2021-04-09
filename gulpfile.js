var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.task("sass"));
});

// 初版・2刷の方へ
// gulp v4 から上記の書き方に変更されています
// 本書P.51に乗っている gulp v3 の書き方
// gulp.task('sass:watch', function() {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
