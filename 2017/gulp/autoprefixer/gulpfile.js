var gulp=require("gulp");
var postcss=require("gulp-postcss");
var autoprefixer=require("autoprefixer"); //处理浏览器私有前缀  浏览器前缀

gulp.task("default",function(){
	// var processors=[postcss];
	return gulp.src("css/*.css")
		.pipe(postcss([autoprefixer]))
		.pipe(gulp.dest('./css/newcss/'))  //制定文件夹复制一份css样式
})

