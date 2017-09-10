var gulp=require("gulp");
var postcss=require("gulp-postcss");
// var use=require("postcss-use");
var autoprefixer=require("autoprefixer");

gulp.task("default",function(){
	var processors=[autoprefixer];
	return gulp.src("css/*.css")
		.pipe(postcss([use({modules:processors})]))
		.pipe(gulp.dest('./css/newcss/'))  
})

