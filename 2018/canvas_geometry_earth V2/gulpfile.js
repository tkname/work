'use strict';

const dir = "Crider"
    , remUnit     = 0 //PSD宽度/10
    , fs          = require('fs')
    , gulp        = require('gulp')
    , browserSync = require('browser-sync').create()
    , reload      = browserSync.reload
    , dev         = './';
    



gulp.task('html', ()=>{
    return gulp.src(['./*.html'])
        .pipe(reload({stream:true}))
})



gulp.task('default', [ 'html'], ()=>{
    browserSync.init({
        server: dev
    });
    gulp.watch('./*.html', ['html']);
});
