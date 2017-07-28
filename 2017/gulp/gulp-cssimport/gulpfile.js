var gulp=require("gulp");
var cssimport=require("gulp-cssimport");

gulp.task("default",function(){
	return gulp.src("css/*.css")
		.pipe(cssimport())
		.pipe(gulp.dest('newcss/'))  //制定文件夹复制一份css样式
})

