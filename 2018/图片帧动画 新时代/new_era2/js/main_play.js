
$(function(){
	var animationArray=[];
	var videoIndex=0;
	var ua = window.navigator.userAgent.toLowerCase(); 


	//请求数据
	rq(function(array){
		//初始化
		var loader = new createjs.LoadQueue();
		var manifest =array;
		mLength=manifest.length;
		//加载完成
		loader.on("complete", handleComplete, this);
		//加载完一个执行
		loader.on("fileload", fileloadHandler, this);
		loader.on("progress", progressHandler, this);
		//放入加载列表
		loader.loadManifest(manifest);
	})

	//音频控制
	$(".musicbox").click(function(){
		var state=bgMp3.paused;
		if(state){
			bgMp3.play();
			$(".musicbox").addClass("musicRotate");
		}else{
			bgMp3.pause();
			$(".musicbox").removeClass("musicRotate");
		}
	})

	//加载完成
	function handleComplete(){

		endTime=new Date().getTime();

		console.log((endTime- startTime)/1000+"秒");

		setTimeout(function(){

			$(".loading").addClass("none");
			$(".play").removeClass("none");
			$(".title-top").addClass("fade");
			$(".title-bottom").addClass("fade2");

			$(".logo-m").addClass("fade4");
			$(".logo-line1,.logo-line2,.logo-line3").addClass("scale");


			setTimeout(function(){
				$(".logo-text").addClass("fade-in");
	            $(".animation-play,.logo-play,.logo-play-bg,.logo-text").removeClass("none");
	            $(".logo-play-bg").removeClass("none").addClass("scale-box");
	            play_state=true;
			},7000)


			bgMp3=new Audio(soundArray.music);
			console.log(imgs.music);
			bgMp3.loop=true;

	        if (ua.match(/MicroMessenger/i)) {
	        	console.log(1);
				shareFn();
				wx.ready(function(){
					bgMp3.play();
					audioPlay();
				})
	        }else{
	        		console.log(222);
					bgMp3.play();
					audioPlay();
	        }

	        //音频动画是否执行
	        function audioPlay(){
				var state=bgMp3.paused;
				if(state){
					$(".musicbox").removeClass("musicRotate");
				}else{
					$(".musicbox").addClass("musicRotate");
				}
	        }

	        

		},100)
	}


	document.body.addEventListener('touchmove' , function(e){
	    e.preventDefault();
	})

	

})