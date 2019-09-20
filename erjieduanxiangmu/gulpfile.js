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

var browserSync = require('browser-sync');
gulp.task('run', ()=>{
    browserSync.init({
        server : "./"
    });

    // 检测当前项目的所有文件是否有变化
    gulp.watch('*').on('change', browserSync.reload);
    gulp.watch('src/less/*.less').on('change', function(){
        gulp.src(['src/less/*.less', ]) 
        .pipe(less())
        .pipe(gulp.dest('dest/bulid/css'));
        browserSync.reload
    });
});
