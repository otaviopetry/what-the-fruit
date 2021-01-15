const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./src/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './public/'
        }
    });
    
    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('/src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;