const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imageMin = require('gulp-image');
const htmlMin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

function style () {
    return gulp.src('./src/sass/styles.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream())
}

function scripts () {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

function copyHtml () {
    return gulp.src('./src/**/*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function handleImages () {
    return gulp.src('./src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images/'));
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });

    gulp.watch('./src/*', () => {
        return gulp.src('./src/vendors/*')
            .pipe(gulp.dest('./dist/vendors/'));
    });    
    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./src/images/*', handleImages);
    gulp.watch('./src/js/**/*.js', scripts).on('change', browserSync.reload);
    gulp.watch('./src/**/*.html', copyHtml).on('change', browserSync.reload);
}

exports.watch = watch;