'use strict';
//Main files
const gulp = require('gulp');
//Transpiler
const babel = require('gulp-babel');
//Concat all files into one
const concat = require('gulp-concat');
//Minified the code
const uglify = require('gulp-uglify');

gulp.task('optimize', function () {
    return gulp.src('app/js/*.js')
        .pipe(babel())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});