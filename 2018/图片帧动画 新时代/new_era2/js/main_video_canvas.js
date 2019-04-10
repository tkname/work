
$(function(){
	var video=$("#video")[0];
	var animationArray=[];
	swiper1();
	var videoIndex=0;
	var ua = window.navigator.userAgent.toLowerCase(); 

	var divArray=[
		[".title",".font-desc",".line",".font-cn",".font-en"]
	];

	var animation=[0.003203,0.042401,0.099086,0.154589,0.210636,0.266788,0.322335,0.379033,0.435707,0.49147,0.547311,0.602668,0.658137,0.714216,0.769512,0.824493,0.880602,0.937583,0.997954,1.051657,1.107396,1.163816,1.218851,1.274416,1.33038,1.387236,1.442718,1.498287,1.55427,1.610732,1.666992,1.73552,1.827196,1.903718,1.959876,2.057929,2.116011,2.174254,2.229677,2.285122,2.342033,2.397304,2.454268,2.511495,2.567263,2.625941,2.682866,2.739679,2.795816,2.85186,2.908616,2.963995,3.020999,3.077813,3.133698,3.19263,3.247978,3.304332,3.359545,3.415159,3.470895,3.528537,3.583887,3.639098,3.696196,3.751318,3.807867,3.864167,3.919384,3.975279,4.031785,4.087915,4.146202,4.201924,4.257325,4.313939,4.36957,4.425528,4.481695,4.538273,4.594818,4.653354,4.709993,4.766317,4.822503,4.877925,4.933527,4.991193,5.047682,5.104984,5.161519,5.218413,5.274137,5.329211,5.384896,5.440471,5.507733,5.5636,5.621111,5.676305,5.732205,5.801102,5.861151,5.925339,5.986967,6.04321,6.098772,6.154844,6.210302,6.266298,6.323023,6.358];

	console.log(divArray[0]);

	var mySwiper = new Swiper('.swiper-container', {
		direction: "vertical",//可选选项，自动滑动
		followFinger:false,
		initialSlide:0,
		onSlideChangeEnd:function(swiper){

          // $("#video").css("z-index","999")
          video.play();

			if(videoIndex>swiper.activeIndex){
				removeVideo(swiper.activeIndex+1);
				$(".swiper-slide").eq(swiper.activeIndex+1).find("div").css("opacity","0");
				if(swiper.activeIndex!=0){
					$(".swiper-slide").eq(swiper.activeIndex-1).find("div").css("opacity","0");
				}
			}else{
				removeVideo(swiper.activeIndex-1);
				$(".swiper-slide").eq(swiper.activeIndex-1).find("div").css("opacity","0");
				if(swiper.activeIndex!=4){
					$(".swiper-slide").eq(swiper.activeIndex+1).find("div").css("opacity","0");
				}
			}



			$(".video").css({"opacity":"1"})
			videoIndex=swiper.activeIndex;
			animationArray[swiper.activeIndex].restart();
			createjs.Ticker.removeAllEventListeners("tick");
			// canvasVideo(swiper.activeIndex+1);
			// if(swiper.activeIndex!=0){
			// 	// $("body").click();
			// 	video.play()
			// }

		}
	})
	var bgMp3;

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
			$(".swiper-container").removeClass("none");
			bgMp3=new Audio(soundArray.music);
			console.log(imgs.music);
			bgMp3.loop=true;

	        if (ua.match(/MicroMessenger/i)) {
	        	console.log(1);
				shareFn();
				wx.ready(function(){
					bgMp3.play();
					audioPlay();

					// video = document.getElementById('videoCanvas');
					// video.src = 'video/video1.mp4';
					// video.play();
					$("#video")[0].pause();
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

			mySwiper.slideTo(0, 0, false);

			// 第一个页面的动画
			animationArray[0].restart();
			canvasVideo(1);

		},100)
	}

	// swiper animation
	function swiper1(){

		function fontAnima(cl,an){

			var el={};
			var $quote = $(cl),
			mySplitText = new SplitText($quote, { type: 'words' }),
			splitTextTimeline = new TimelineLite();

			TweenLite.set($quote, { perspective: 400 });

			kill();

			mySplitText.split({ type:an});

			function kill() {
			    splitTextTimeline.clear().time(0);
			    mySplitText.revert();
			}

			el["line"]=splitTextTimeline;
			el["text"]=mySplitText;

			return el;
		}

    	var t1 = new TimelineMax({repeatDelay:1,paused: true});
		  t1.fromTo($(".swiper1 .title"),1.5,{opacity: '0'},{opacity: '1'},0.8)
		  .fromTo($(".swiper1 .font-desc"),1.5,{opacity: '0',y:100},{opacity: '1',y:0},1.2)
		  .fromTo($(".swiper1 .line"),1.5,{opacity: '0'},{opacity: '1'},2)
		  .fromTo($(".swiper1 .font-cn"),1.5,{opacity: '0',scale:".3"},{opacity: '1',scale:"1"},2)
		  .fromTo($(".swiper1 .font-en"),1.5,{opacity: '0',y:-100},{opacity: '1',y:"0%"},1.2)
		  animationArray.push(t1);

    	var t2 = new TimelineMax({repeatDelay:1,paused: true});
		t2.fromTo($(".swiper2 .title"),1.5,{opacity: '0'},{opacity: '1'},0.8)
			.fromTo($(".swiper2 .text1"),2,{opacity: '0',y:50},{opacity: '1',y:0},1.2)
			.fromTo($(".swiper2 .text2"),2,{opacity: '0',y:50},{opacity: '1',y:0},2.2)
			.fromTo($(".swiper2 .text3"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},3.2)
			.fromTo($(".swiper2 .logo"),2,{opacity: '0'},{opacity: '1'},3.4)
			animationArray.push(t2);

    	var t3 = new TimelineMax({repeatDelay:1,paused: true});
		t3.fromTo($(".swiper3 .title"),1.5,{opacity: '0'},{opacity: '1'},0.8)
			.fromTo($(".swiper3 .text1"),2,{opacity: '0',y:50},{opacity: '1',y:0},1.2)
			.fromTo($(".swiper3 .text2"),2,{opacity: '0',y:50},{opacity: '1',y:0},2.2)
			.fromTo($(".swiper3 .text3"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},3.2)
			.fromTo($(".swiper3 .text4"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},4.2)
			.fromTo($(".swiper3 .logo"),2,{opacity: '0'},{opacity: '1'},4.4)
			animationArray.push(t3);

    	var t4 = new TimelineMax({repeatDelay:1,paused: true});
		t4.fromTo($(".swiper4 .title"),1.5,{opacity: '0'},{opacity: '1'},0.8)
			.fromTo($(".swiper4 .text1"),2,{opacity: '0',y:50},{opacity: '1',y:0},1.2)
			.fromTo($(".swiper4 .text2"),2,{opacity: '0',y:50},{opacity: '1',y:0},2.2)
			.fromTo($(".swiper4 .text3"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},3.2)
			.fromTo($(".swiper4 .text4"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},4.2)
			.fromTo($(".swiper4 .logo"),2,{opacity: '0'},{opacity: '1'},4.3)
			animationArray.push(t4);

    	var t5 = new TimelineMax({repeatDelay:1,paused: true});
		  t5.fromTo($(".swiper5 .title"),1.5,{opacity: '0',x:300},{opacity: '1',x:0},0.8)
		  .fromTo($(".swiper5 .font-desc"),1.5,{opacity: '0',x:300},{opacity: '1',x:0},0.9)
		  .fromTo($(".swiper5 .line"),1.5,{opacity: '0'},{opacity: '1'},3)
		  .fromTo($(".swiper5 .font-cn"),1.5,{opacity: '0',x:300},{opacity: '1',x:0,scale:"1"},1)
		  .fromTo($(".swiper5 .font-en"),1.5,{opacity: '0',x:300},{opacity: '1',x:0},1.1)
		
			.fromTo($(".swiper5 .text1"),2,{opacity: '0',y:50},{opacity: '1',y:0},2.2)
			.fromTo($(".swiper5 .text2"),2,{opacity: '0',y:50},{opacity: '1',y:0},2.3)
			.fromTo($(".swiper5 .text3"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},2.4)
			.fromTo($(".swiper5 .text4"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},2.5)
			.fromTo($(".swiper5 .text5"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},2.6)
			.fromTo($(".swiper5 .text6"),2,{opacity: '0',y:50},{opacity: '1',y:0,scale:"1"},2.7)
			.fromTo($(".swiper5 .logo"),2,{opacity: '0'},{opacity: '1'},3)

			animationArray.push(t5);
	}



	var winWidth=window.innerWidth;
   	var winHeight=window.innerHeight;

	//canvas 视频
	function canvasVideo(index){

		var canvas;
		var stage;
		var count =1;

		var imgWidth=index==0?750:400;
		var imgHeight=index==0?1206:640;
    	

    	var scale = imgWidth/imgHeight;

		var speed=4;
		var add=0;

		$canvas=$("<canvas></canvas>");
		$canvas.css({
			"width":winWidth+"px",
			"height":winHeight+"px",
		})
		$canvas.attr({
			width:winWidth*2+"px",
			height:winHeight*2+"px",
			id:"video"
		})

		$canvas.appendTo($(".swiper"+index+""));

		canvas = $canvas[0];

		if(winWidth/winHeight>=scale){
			imgScale=winWidth/(imgWidth/2);
		}else{
			imgScale=winHeight/(imgHeight/2);
		}
		console.log(imgScale);

			video = document.getElementById('videoCanvas');
			video.src = 'video/video'+index+'.mp4';
			video.setAttribute('webkit-playsinline',true);  //IOS内连方式播放视频
			video.setAttribute('playsinline',true);//IOS微信浏览器内连方式播放视频
			video.setAttribute('x5-video-player-type','h5');//Android微信浏览器启用h5播放器
			video.currentTime=0.1;
			video.play();

		stage = new createjs.Stage(canvas);

		bitmap = new createjs.Bitmap(imgs.bg);
		bitmap.x=0;
		bitmap.y=0;
		bitmap.scaleX=imgScale;
		bitmap.scaleY=imgScale;

		stage.addChild(bitmap);

		var state=true;
		var fristState=true;
		createjs.Ticker.framerate = 18;

		var fpsArray=[];
		var moveFps=0;
		var pushState=true;
		var fpsArrayLength;
		var s=0;
		var v=0;
		var sState=true;

		createjs.Ticker.addEventListener("tick",function(event){

			if(index==0){

				if(state){
					count++;
				}else{
					count--;
				}

				console.log(index);
				if(index==1){
					if(fristState){
						var minValue=1;
					}else{
						var minValue=55;
					}
				}else{
					var minValue=1;
				}

				bitmap.image=imgs["H5-0"+index+""+count+""];

				if(count>=115){	
					count=115;
					state=false;
					fristState=false;
				}else if(count<=minValue){
					count=minValue;
					state=true;
				}

			}else{
				// console.log(video);
				if(moveFps!= video.currentTime && pushState){
					fpsArray.push(video.currentTime);
					s=fpsArray.length;
				}

				// console.log(moveFps,video.currentTime);
				if(moveFps==video.currentTime && video.currentTime>0.2){
					pushState=false;

					console.log(s);
					if(sState){
						s--;
					}else{
						s++;
					}

					if(s>=fpsArray.length){	
						s=fpsArray.length-1;
						sState=false;
					}else if(s<=0){
						s=5;
						sState=true;
					}
					video.currentTime=fpsArray[s];
				}


				
				moveFps=video.currentTime;
				


				bitmap.image=video;
			}

			// update the stage:
			stage.update(event);

		});

	}



	function removeVideo(index){
		$(".swiper-slide").eq(index).find("canvas").remove();
	}




	// //全屏算法
	!function(){
	    // 图片的比例
	   	var winWidth=window.innerWidth;
	   	var winHeight=window.innerHeight;

	    var scale = 750/1206;
	    // 根据图片比例，位置
	    function fullimg(){
	      var $fullimg = $(".video img");
	      $fullimg.each(function(i){
	        if(winWidth/winHeight>=scale){
	          goalWidth = winWidth;
	          goalHeight = Math.ceil(winWidth/scale);
	        }else{
	          goalHeight = winHeight;
	          goalWidth = Math.ceil(winHeight*scale);
	        }
	        $(this).css({
	            width: goalWidth,
	            height: goalHeight,
	            // margin:  Math.ceil(-goalHeight/2) +"px 0 0 "+ Math.ceil(-goalWidth/2) +"px"
	        }).show();
	      });
	    }
	    $(window).resize(function(){
	      fullimg();
	    }).trigger('resize');
	}();



	// $("body").click(function(){
	// 	video.play();
	// })

	// $("body").click();



})