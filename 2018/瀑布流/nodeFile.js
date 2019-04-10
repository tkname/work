var fs = require("fs");

var obj={};
	obj.fileArray=[];

var date=new Date();
var getTime=date.getTime();
var i=0;

// 	 var jsonObj = JSON.parse(data); //字符串转json
// 	fs.writeFileSync('./test.json', JSON.stringify(obj));  //josn转字符串
function ecchDir(path,upFile){
	fs.readdir(path, function(err,files){
		if(files){
			files.forEach(function(file){
				fs.stat(path+"/"+file, function (err, stats) {
					//需要配合 fs.stat使用
					if(stats.isDirectory()){
						ecchDir(path+"/"+file);
					}else{

						 if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG|mp4)$/.test(file)){
							var oArray=file.split(".");
							var o={};
							o.id=oArray[0];
							o.src=path+file+"?v="+getTime;
							obj.fileArray.push(o);

							// 数据生成
							if(upFile=="dataJson"){
								console.log(JSON.stringify(obj)+"r\n");
								fs.writeFileSync('data.json', JSON.stringify(obj.fileArray));
								console.log("正在生成"+path+file+"||"+newfile+"\n");
							}
							//文件重命名
							if(upFile=="reName"){
								i++;
								var newfile=i+"."+oArray[1];
								// var newfile="jinlongyu_"+file.slice(9,file.length);
								fs.rename(`${path}/${file}`,`${path}/${newfile}`)
							}

						 }
					}
				})
			})
		}

})
}
ecchDir("./","reName");
