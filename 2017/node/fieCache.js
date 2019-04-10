var fs = require("fs");

//md5 调用插件
var crypto = require('crypto');
function md5(text){
	return crypto.createHash("md5").update(text).digest("hex");
}

//文件类型
var fileType=["jpg","png","js","css","gif","mp4","mp3"];

//文件 去除缓存文件
var file=["index.html","css/main.scss","js/main.js","js/public.js"];

var date=new Date();
var getTime=date.getTime();

//遍历 文件
file.forEach(function(fileName){
	//读取文件内容
	fs.readFile(fileName,'utf-8',function(err,data){
		var fileSpt=fileName.split(".");
		var loopFile=[];
		var type=fileSpt[fileSpt.length-1];

		if(type=="scss" || type=="css"){
			loopFile.push(fileType[0],fileType[1],fileType[3],fileType[4]);
		}else if(type=="js"){
			loopFile.push(fileType[0],fileType[1],fileType[4],fileType[5]);
		}else if(type=="html"){
			loopFile=fileType;
		}
		//循环  添加时间戳
		loopFile.forEach(function(index){
			file=data.replace(new RegExp("\\."+index+"","g"),"."+index+"?v="+getTime);
			data=file;


		})

		//文件写入			
		fs.writeFile(fileName,data,"utf-8",function(res){
			console.log("写入文件成功",fileName,data);
		});

	})	
})
