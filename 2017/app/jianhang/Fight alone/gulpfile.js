//定义依赖和插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');//livereload

var gulp_postcss   = require('gulp-postcss');
var cssimport    = require('postcss-import');
var autoprefixer = require('autoprefixer');           // 浏览器前缀
var px2rem        = require('gulp-px3rem');
var cssnano       = require('gulp-cssnano');         //压缩css


   
var jsSrc = 'js/*.js';
var jsDist = 'dist/js';

var htmlSrc = '*.html';
var htmlDist = 'dist';

var cssSrc = 'css/*.css';
var cssDist = 'dist/css';

//定义名为js的任务
gulp.task('js', function () {

  return  gulp.src(jsSrc)
        .pipe(connect.reload())

});

//定义html任务
gulp.task('html', function () {
   return gulp.src(htmlSrc)
        .pipe(connect.reload());
});

//定义css任务
gulp.task('css', function () {

      var processors = [
        autoprefixer
    ];

    gulp.src('css/main.css')
        // .pipe(gulp_postcss(processors))
        // .on('error', errorHandler)
	    .pipe(px2rem({
	      baseDpr: 2,             // base device pixel ratio (default: 2)
	      threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
	      remVersion: true,       // whether to generate rem version (default: true)
	      remUnit: 37.5,            // rem unit value (default: 75)
	      remPrecision: 6         // rem precision (default: 6)
	    }))
	    // .pipe(cssnano())
	    // .pipe(autoprefixer({
	    //   browsers: ['>2%'],
	    //   cascade: false
	    // }))        
        .pipe(rename('zmain.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());

});

//定义css任务
gulp.task('css2', function () {

      var processors = [
        autoprefixer
    ];

    gulp.src('css/slider.css')
        // .pipe(gulp_postcss(processors))
        // .on('error', errorHandler)
      .pipe(px2rem({
        baseDpr: 2,             // base device pixel ratio (default: 2)
        threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
        remVersion: true,       // whether to generate rem version (default: true)
        remUnit: 37.5,            // rem unit value (default: 75)
        remPrecision: 6         // rem precision (default: 6)
      }))
      // .pipe(cssnano())
      // .pipe(autoprefixer({
      //   browsers: ['>2%'],
      //   cascade: false
      // }))        
        .pipe(rename('slider.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());

});

//定义css任务
gulp.task('css3', function () {

      var processors = [
        autoprefixer
    ];

    gulp.src('css/zgr.css')
        // .pipe(gulp_postcss(processors))
        // .on('error', errorHandler)
      .pipe(px2rem({
        baseDpr: 2,             // base device pixel ratio (default: 2)
        threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
        remVersion: true,       // whether to generate rem version (default: true)
        remUnit: 37.5,            // rem unit value (default: 75)
        remPrecision: 6         // rem precision (default: 6)
      }))
      // .pipe(cssnano())
      // .pipe(autoprefixer({
      //   browsers: ['>2%'],
      //   cascade: false
      // }))        
        .pipe(rename('zgr.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());

});


//定义livereload任务
gulp.task('connect', function () {
   return connect.server({
        livereload: true,
        port:8889
    });
});


//定义看守任务
gulp.task('watch', function () {

    gulp.watch('*.html', ['html']);

    gulp.watch('js/*.js', ['js']);

    gulp.watch('css/*.css', ['css']);

    gulp.watch('css/*.css', ['css2']);

    gulp.watch('css/*.css', ['css3']);

});


//定义默认任务
gulp.task('default', [ 'js', 'html','css','css2','css3','watch', 'connect']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
