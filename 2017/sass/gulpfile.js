var gulp=require("gulp");						
var autoprefixer=require("gulp-autoprefixer");  //添加浏览器前缀
var rename=require("gulp-rename");		  //重命名
var flatten = require('gulp-flatten'); //不自动拷贝文件夹
var cleanCSS = require('gulp-clean-css'); //压缩css
var cssimport = require('gulp-cssimport'); //样式导入
var postcss=require('gulp-postcss'); //postcss插件
var nested=require('postcss-nested'); //支持css嵌套
var px2rem= require('gulp-px3rem');
var plumber= require('gulp-plumber');       //watch在碰上错误时虽然不再强制退出
var sass= require('gulp-sass');

var BrowserSync = require('browser-sync');//引入模块  同步刷新
var options={matchPattern: "*.css"}; //仅支持csss



gulp.task("cssm",function(){
	gulp.src("./css/main.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(plumber())
		.pipe(px2rem({
			baseDpr: 2,             // base device pixel ratio (default: 2)
			threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
			remVersion: true,       // whether to generate rem version (default: true)
			remUnit: 64,            // rem unit value (default: 75)
			remPrecision: 6         // rem precision (default: 6)
		}))      
		.pipe(autoprefixer())		  //浏览器前前缀
		// .pipe(cleanCSS()) 		  //压缩css
		.pipe(postcss([nested]))
		.pipe(cssimport(options))	  //支持导入
		.pipe(rename("main.min.css")) //重命名
		.pipe(flatten())			  //不拷贝文件夹
		.pipe(gulp.dest("css")); // 输出位置
})

//添加同步刷新
gulp.task('browser-sync', function() {//注册任务
    BrowserSync({//调用API
        files: ["css/main.min.css","index.html","video.html","js/main.js"],//监听整个项目
        server: {
            baseDir: "./" //监听当前路径
        }
    });
});

gulp.task('watch', function(){
  //监听文件 样式发生变化执行
  gulp.watch([ 'css/**/*.scss', '!main.min.css' ], [ 'cssm' ]);
});


gulp.task('default', ['watch'], function() { });
