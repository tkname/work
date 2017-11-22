var fs = require("fs");

var obj={};
	obj.fileArray=[];


// 	 var jsonObj = JSON.parse(data); //字符串转json
// 	fs.writeFileSync('./test.json', JSON.stringify(obj));  //josn转字符串
function ecchDir(path){
	fs.readdir(path, function(err,files){
	files.forEach(function(file){
		fs.stat(path+file, function (err, stats) {	
			//需要配合 fs.stat使用
			if(stats.isDirectory()){
				ecchDir(path+file+"/");
			}else{
				 if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file)){
					var oArray=file.split(".");	
					var o={};
					o.id=oArray[0];
					o.src="../images/"+file;
					obj.fileArray.push(o);	
					console.log(JSON.stringify(obj)+"r\n");
					fs.writeFileSync('./data.json', JSON.stringify(obj)+"\n");
					console.log("正在生成"+file);
				 }
			}
		})
	})
})
}
ecchDir("./");
