let gulp=require("gulp");						
// let autoprefixer=require("gulp-autoprefixer");  //添加浏览器前缀
// let rename=require("gulp-rename");		  //重命名
// let flatten = require('gulp-flatten'); //不自动拷贝文件夹
// let cleanCSS = require('gulp-clean-css'); //压缩css
// let cssimport = require('gulp-cssimport'); //样式导入
// let postcss=require('gulp-postcss'); //postcss插件
// let nested=require('postcss-nested'); //支持css嵌套
// let px2rem= require('gulp-px3rem');
// let plumber= require('gulp-plumber');       //watch在碰上错误时虽然不再强制退出

let BrowserSync = require('browser-sync');//引入模块  同步刷新
// let options={matchPattern: "*.css"}; //仅支持csss


// gulp.task("cssm",function(){
// 	gulp.src("./css/main.css")
// 	  .pipe(postcss([nested]))
//       .pipe(plumber())
// 		.pipe(px2rem({
// 			baseDpr: 2,             // base device pixel ratio (default: 2)
// 			threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
// 			remVersion: true,       // whether to generate rem version (default: true)
// 			remUnit: 64,            // rem unit value (default: 75)
// 			remPrecision: 6         // rem precision (default: 6)
// 		}))      
// 		  .pipe(autoprefixer())		  //浏览器前前缀
// 		  .pipe(cleanCSS()) 		  //压缩css
// 		  .pipe(cssimport(options))	  //支持导入
// 		  .pipe(rename("main.min.css")) //重命名
// 		  .pipe(flatten())			  //不拷贝文件夹
// 		  .pipe(gulp.dest("css")); // 输出位置
// })

//添加同步刷新
gulp.task('browser-sync', function() {//注册任务
    BrowserSync({//调用API
        files: ["裁剪.html"],//监听整个项目
        server: {
            baseDir: "./" //监听当前路径
        }
    });
});

// gulp.task('watch', function(){
//   //监听文件 样式发生变化执行
//   gulp.watch([ 'css/**/*.css', '!main.min.css' ], [ 'cssm' ]);
// });


gulp.task('default', ['browser-sync'], function() { });
