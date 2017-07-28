npm init //安装pakeage.json

npm install gulp --save-dev //gulp本地安装

npm install gulp-cssimport --save-dev //cssimport 安装

var gulp=require("gulp");
var cssimport=require("gulp-cssimport"); //使样式能导入 @import 'name.css'

gulp.task("default",function(){
	return gulp.src("css/*.css")
		.pipe(cssimport())           //样式能够导入其他文件
		.pipe(gulp.dest('newcss/'))  //制定文件夹复制一份css样式
})

