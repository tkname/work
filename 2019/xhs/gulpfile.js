'use strict';

const dir = "changjiang"
    , remUnit     = 0 //PSD宽度/10
    , fs          = require('fs')
    , gulp        = require('gulp')
    , template    = require('gulp-template')
    , del         = require('del')
    , replace     = require('gulp-replace')
    , sass        = require('gulp-sass')
    , pug         = require('gulp-pug')
    , rev         = require('gulp-asset-rev')
    , postcss     = require('gulp-postcss')
    , px2rem      = require('postcss-px2rem')
    , base64      = require('gulp-base64')
    , autoprefixer= require('autoprefixer')
    , sourcemaps  = require("gulp-sourcemaps")
    , browserSync = require('browser-sync').create()
    , reload      = browserSync.reload
    , md5         = require('md5')
    , dev         = './'+ dir;
    var data ={}; //=require(dev+"/data.js")
    
    // console.log(JSON.stringify(data));

var verStr = '?v='+md5(Date.parse(new Date())).substr(0,6);

function createCopyTask(taskName, src, dest ,isReload) {
    if(isReload!==false){ isReload = true; }
    gulp.task(taskName, ()=>{
        var fn = function(isReload){
            var res = gulp.src(src)
            res = res.pipe(gulp.dest(dest))
            if (isReload)
                res = res.pipe(reload({stream: true}))
            return res;
        }
        if(false){
            return del(dest).then(function () {
                fn(isReload)
            })
        }else{
            return fn(isReload);
        }
    })
}

createCopyTask('default', './.template/**/**','./' + dir);
createCopyTask('public', './.public/scripts/**/**', dir+'/image');

gulp.task('copy',['public']);


gulp.task('sass', ()=>{
    var processors = [
        autoprefixer({
            browsers: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]            
        })
    ]
    if(remUnit>0){
        processors.unshift(px2rem({remUnit:remUnit}));
    }
    return gulp.src(dev+'/image/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(sourcemaps.write())
        // .pipe(base64({
        //     options: {
        //         extensions: ['png','jpg'], maxImageSize: 80 * 1024
        //     }
        // }))
        .pipe(postcss(processors))
        .pipe(rev({verStr:verStr}))
        .pipe(gulp.dest(dev+'/image'))
        .pipe(reload({stream:true}))
})

gulp.task('pug', ()=>{
    return gulp.src([dev+'/pug/*.pug', '!' + dir + '/pug/mixin.pug'])
        .pipe(template({
            data:JSON.stringify(data)
        }))
        .pipe(pug({pretty:true}))
        .pipe(replace(/<head>/, '<!DOCTYPE html>\n<html>\n<head>'))
        .pipe(replace(/\?v=/g, verStr))
        .pipe(replace(/\%TIME%/g, new Date()))
        .pipe(replace(/\.png/g, ".png"+verStr))
        .pipe(replace(/\.jpg/g, ".jpg"+verStr))
        .pipe(replace(/<\/body>/, '</body>\n</html>'))
        .pipe(rev())
        .pipe(gulp.dest(dev))
        .pipe(reload({stream:true}))
})


gulp.task('data',()=>{
    delete require.cache[require.resolve(dev+'/data.js')]
    data=require(dev+'/data.js')
})

gulp.task('serve', ['copy','sass', 'pug'], ()=>{
    browserSync.init({
        server: dev
    });
    // gulp.watch(dir + '/image/**/**', ['pug']);
    gulp.watch(dir + '/image/*.scss', ['sass']);
    gulp.watch(dir + '/pug/*.pug', ['pug']);
    gulp.watch('.public/**/*.pug', ['pug']);
    gulp.watch(dev+'/data.js', ['data','pug']);
});
