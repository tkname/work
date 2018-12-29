'use strict';
const dir = "lanhu"
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
    , spriter     = require('gulp-css-spriter')
    , cleanCSS    = require('gulp-clean-css')
    , browserSync = require('browser-sync').create()
    , reload      = browserSync.reload
    , md5         = require('md5')
    , dev         = './'+ dir
    , page        = '*'
    , data = {}//require(dev+'/res/data.js');
var verStr = '?v='+md5(Date.parse(new Date())).substr(0,6);


gulp.task('sass', ()=>{
    var processors = [
        autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        })
        //px2rem({remUnit:100})
    ]
    return gulp.src(dev+'/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(sourcemaps.write())
        
        .pipe(base64({
            options: {
                extensions: ['png','jpg'], maxImageSize: 80 * 1024
            }
        }))
        /*.pipe(spriter({
            spriteSheet:dev+'/res/images/sprite.png',
            pathToSpriteSheetFromCSS:'../images/sprite.png'
        }))*/
        .pipe(postcss(processors))
        .pipe(rev({verStr:verStr}))
        // .pipe(cleanCSS())
        .pipe(gulp.dest(dev+'/res/styles'))
        .pipe(reload({stream:true}))
})

gulp.task('pug', ()=>{
    return gulp.src([dev+'/pug/'+page+'.pug'])
        .pipe(template({
            data:JSON.stringify(data)
        }))
        .pipe(pug({pretty:true}))
        .pipe(replace(/<head>/, '<!DOCTYPE html>\n<html lang="en">\n<head>'))
        .pipe(replace(/\?v=/g, verStr))
        .pipe(replace(/\%TIME%/g, new Date()))
        .pipe(replace(/@/g, 'res/images/'))
        .pipe(replace(/\.png/g, ".png"+verStr))
        // .pipe(replace(/\.jpg/g, ".jpg"+verStr))
        .pipe(replace(/<\/body>/, '</body>\n</html>'))
        .pipe(rev())
        .pipe(gulp.dest(dev))
        .pipe(reload({stream:true}))
})

gulp.task('serve', ['sass'], ()=>{
    browserSync.init({
        server: dev
    });
    gulp.watch(dir + '/res/scripts/**/**', ['pug']);
    gulp.watch(dir + '/scss/*.scss', ['sass']);
    gulp.watch(dir + '/pug/*.pug', ['pug']);
});
