//定义依赖和插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');//livereload

var gulp_postcss   = require('gulp-postcss');
var cssimport    = require('postcss-import');
var autoprefixer = require('autoprefixer');           // 浏览器前缀

   
var jsSrc = 'jianhang/Fight alone/js/*.js';
var jsDist = 'dist/js';

var htmlSrc = 'jianhang/Fight alone/*.html';
var htmlDist = 'dist';

var cssSrc = 'jianhang/Fight alone/css/*.css';
var cssDist = 'dist/css';

//定义名为js的任务
gulp.task('js', function () {

  // return  gulp.src(jsSrc)
  //       .pipe(concat('main.js'))
  //       .pipe(gulp.dest(jsDist))
  //       .pipe(rename({suffix: '.min'}))
  //       .pipe(uglify())
  //       .pipe(gulp.dest(jsDist))
  //       .pipe(connect.reload())

});

//定义html任务
gulp.task('html', function () {
   return gulp.src(htmlSrc)
        // .pipe(gulp.dest(htmlDist))
        .pipe(connect.reload());
});

//定义css任务
gulp.task('css', function () {

      var processors = [
        cssimport,
        autoprefixer
    ];

    gulp.src('jianhang/Fight alone/css/main.css')
        .pipe(gulp_postcss(processors))
        .on('error', errorHandler)
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('jianhang/Fight alone/css'))
        .pipe(connect.reload());

});

//定义livereload任务
gulp.task('connect', function () {
   return connect.server({
        livereload: true,
        port:8888
    });
});


//定义看守任务
gulp.task('watch', function () {

    gulp.watch('jianhang/Fight alone/*.html', ['html']);

    gulp.watch('jianhang/Fight alone/js/*.js', ['js']);

    // gulp.watch('jianhang/Fight alone/css/*.css', ['css']);

});


//定义默认任务
gulp.task('default', [ 'js', 'html','css','watch', 'connect']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
