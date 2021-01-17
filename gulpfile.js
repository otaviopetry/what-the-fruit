const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function style () {
    return gulp.src('./src/sass/styles.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
}

function scripts () {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist'))
}

function copyHtml () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
}

function handleImages () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'));
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });

    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./src/*', handleImages);
    gulp.watch('./src/js/**/*.js', scripts).on('change', browserSync.reload);
    gulp.watch('./src/**/*.html', copyHtml).on('change', browserSync.reload);
}

exports.watch = watch;