
function init(){
	var imglist=document.getElementsByClassName("img");

	for(var i=0;i<imglist.length;i++){
		imglist[i].onClick=function(){
			console.log(this);
		}
		console.log(imglist[i]);
	}
}