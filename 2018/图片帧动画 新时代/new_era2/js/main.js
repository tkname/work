$(function(){
	var animationArray=[];
	swiper1();
	var videoIndex=0;
	var ua = window.navigator.userAgent.toLowerCase(); 

	var divArray=[
		[".title",".font-desc",".line",".font-cn",".font-en"]
	];
	console.log(divArray[0]);

	var mySwiper = new Swiper('.swiper-container', {
		direction: "vertical",//可选选项，自动滑动
		followFinger:false,
		initialSlide:0,
		onSlideChangeEnd:function(swiper){

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
			canvasVideo(swiper.activeIndex+1);
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
    var scale = 750/1206;

	//canvas 视频
	function canvasVideo(index){

		var canvas;
		var stage;
		var count =1;
		
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
			imgScale=winWidth/375;
		}else{
			imgScale=winHeight/603;
		}


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
		createjs.Ticker.addEventListener("tick",function(event){

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



})