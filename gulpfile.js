// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const cmq = require('gulp-combine-media-queries');
const csscomb = require('gulp-csscomb');
const plumber = require('gulp-plumber');

// webpackの設定ファイルの読み込み
const webpackConfig = require('./webpack.config');


//pug
gulp.task('pug', () => {
    return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        // Sassのコンパイルを実行
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(cmq())
        .pipe(csscomb())
        // cssフォルダー以下に保存
        .pipe(gulp.dest('./dist/assets/css'))
});

//browser-sync
gulp.task('browser-sync',()=> {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('bs-reload', ()=> {
    browserSync.reload();
});

// webpack
gulp.task('webpack', ()=> {
    // ☆ webpackStreamの第2引数にwebpackを渡す☆
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('dist'));
});

// webpack
gulp.task('default',['browser-sync'], ()=> {
    gulp.watch('src/pug/**/*.pug',['pug']);
    gulp.watch('src/**/*.js',['webpack']);
    gulp.watch('src/**/*.scss',['sass']);
    gulp.watch('dist/**/*.html',['bs-reload']);
    gulp.watch('dist/**/*.js',['bs-reload']);
    gulp.watch('dist/**/*.css',['bs-reload']);
});
