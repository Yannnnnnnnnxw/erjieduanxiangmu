var gulp = require('gulp');
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var concat = require('gulp-concat')
var less = require('gulp-less')
gulp.task('ys',function(){
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/bulid/js'))
})

gulp.task('ystp',function(){
    return gulp.src('src/img/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/bulid/img'))
})

// gulp.task('hb',function(){
//     return gulp.src('src/js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dest/bulid/js'))
// })

gulp.task('lc',function(){
    return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/bulid/css'))
})