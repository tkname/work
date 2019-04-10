
	var ua = window.navigator.userAgent.toLowerCase(); 
	var bgMp3;
    var play_state=false;

	
	//数据请求
	function rq(callback){
		startTime=new Date().getTime();
		$.ajax({
			url:"js/data.json?v=1",
			type:"get",
			dataType:"json",
			success:function(res){
				callback(res);
			},
			error:function(){
				alert("加载失败");
			}
		})
	}

	//图片加载
	var imgs=[],imgSun=[],imgWarm=[],imgCeo=[],soundArray=[];
	var ss_ind=0;
	var mLength;
	var boy_state=true;


	var startTime,endTime;

	function progressHandler(e){
		$(".loadbox span").text(Math.ceil(e.progress*100)+"%");
	}

	var loadIndex=0;

	function fileloadHandler(e){
		console.log();
		if(e.item.id.match("suntext")){
			imgSun.push(e.result);
		}else if(e.item.id.match("warmtext")){
			imgWarm.push(e.result);
		}else if(e.item.id.match("ceotext")){
			imgCeo.push(e.result);
		}else{
			imgs[e.item.id]=e.result;
		}

		if(e.item.ext.match("mp3")){
			soundArray[e.item.id]=e.item.src;
		}
	}



