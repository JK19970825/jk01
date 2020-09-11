let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
}
exports.sass = fnSass;
exports.default = fnWatch;