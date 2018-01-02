const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('optimize', function () {
    return gulp.src('app/js/*.js')
        .pipe(babel())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});