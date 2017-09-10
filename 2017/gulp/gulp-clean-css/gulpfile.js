let gulp=require("gulp");
let postcss=require("gulp-postcss");
let autoprefixer=require("autoprefixer"); //处理浏览器私有前缀  浏览器前缀
let cleanCSS = require('gulp-clean-css');

gulp.task("default",function(){
	// var processors=[postcss];
	return gulp.src("css/*.css")
		.pipe(cleanCSS())
		.pipe(postcss([autoprefixer]))
		.pipe(gulp.dest('./css/'))  //制定文件夹复制一份css样式
})

