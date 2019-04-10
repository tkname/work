"use strict"

var gulp = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
var cssimport    = require('postcss-import');
var px2rem       = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');           // 浏览器前缀
var mqpacker     = require('css-mqpacker');                // MQ 包装器
var csswring     = require('csswring');                    // css minify
var nested       = require('postcss-nested');              // 支持css嵌套
var rename       = require('gulp-rename');                 // 文件重命名
var minimist     = require('minimist');
var mixin        = require('postcss-mixins');
var connect      = require('gulp-connect');



// var version      = require('./version-plugin.js');
var jsSrc="js/*.js";
var htmlSrc="*.html";


//定义名为js的任务
gulp.task('js', function () {
  return  gulp.src(jsSrc)
        // .pipe(connect.reload())

});

//定义名为js的任务
gulp.task('html', function () {
  return  gulp.src(htmlSrc)
        // .pipe(connect.reload())
});

gulp.task('postcss', function(){
  var processors = [
    cssimport,
    nested,
    mqpacker,
	 // mixin,
    autoprefixer,
    px2rem({ remUnit: 75 })
  ];
  return gulp.src('css/main.css')
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename('main.min.css'))
          .pipe(gulp.dest('css'))
        .pipe(connect.reload())
});


gulp.task('version', function(){
  var options = minimist(process.argv.slice(2), {
    string: 'd',
    default: {d: Date.now()}
  });
  return gulp.src('index.html')
    .pipe(version({
      _v: options.d
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  gulp.watch('css/*.css', ['postcss']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('*.html', ['html']);
});

//定义livereload任务
gulp.task('connect', function () {
   return connect.server({
        livereload: true
    });
});


gulp.task('default', ['postcss','js','html', 'watch','connect']);
gulp.task('dev', ['postcss', 'watch']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}

