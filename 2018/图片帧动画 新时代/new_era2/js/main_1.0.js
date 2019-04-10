$(function(){
	var animationArray=[];
	swiper1();
	var videoIndex=1;

	var mySwiper = new Swiper('.swiper-container', {
		direction: "vertical",//可选选项，自动滑动
		followFinger:false,
		initialSlide:0,
		onSlideChangeEnd:function(swiper){
			clearTimeout(TimeName);
			$(".swiper"+videoIndex+" .video").find("img").attr("src","images/page"+videoIndex+"/H5-0"+videoIndex+"/H5-0"+videoIndex+"1.jpg");
	        createVideo($(".swiper"+(swiper.activeIndex+1)+" .video"),160,swiper.activeIndex+1);
			
			videoIndex=swiper.activeIndex+1;


			// $(".touch-top").hide();
			animationArray[swiper.activeIndex].restart();

			if(swiper.activeIndex==0){
				$(".swiper-slide").eq(swiper.activeIndex+1).find("div").css("opacity","0");
			}else if(swiper.activeIndex==6){
				$(".swiper-slide").eq(swiper.activeIndex-1).find("div").css("opacity","0");
			}else{
				$(".swiper-slide").eq(swiper.activeIndex-1).find("div").css("opacity","0");
				$(".swiper-slide").eq(swiper.activeIndex+1).find("div").css("opacity","0");
			}

			if(swiper.activeIndex==1){
				$(".swiper-slide").eq(swiper.activeIndex).find(".title2 div,.title2,.txt2-div,.txt-box,.txt-box div").css("opacity","1");
			}
			if(swiper.activeIndex==2){
				$(".swiper-slide").eq(swiper.activeIndex).find(".titles,.titles div").css("opacity","1");
			}
			if(swiper.activeIndex==4){
				$(".swiper-slide").eq(swiper.activeIndex).find(".txt").css("opacity","1");
			}
			$(".video").css({"opacity":"1"})
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

		setTimeout(function(){

			$(".loading").addClass("none");
			$(".swiper-container").removeClass("none");
			// bgMp3=new Audio(soundArray.bg);
			// bgMp3.loop=true;

	   //      if (ua.match(/MicroMessenger/i)) {
				// shareFn();
				// wx.ready(function(){
				// 	bgMp3.play();
				// 	audioPlay();
				// })
	   //      }else{
				// 	bgMp3.play();
				// 	audioPlay();
	   //      }

	   //      //音频动画是否执行
	   //      function audioPlay(){
				// var state=bgMp3.paused;
				// if(state){
				// 	$(".musicbox").removeClass("musicRotate");
				// }else{
				// 	$(".musicbox").addClass("musicRotate");
				// }

	   //      }


			mySwiper.slideTo(4, 0, false);
	        createVideo($(".swiper5 .video"),160,3);
			// 第一个页面的动画
			console.log(22);
			animationArray[4].restart();
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
		// var txt=fontAnima('.swiper2 .txt-box .txt', 'lines' );
		// var title2=fontAnima('.swiper2  .title2', 'chars, words' );

		// var sw3_title1=fontAnima('.swiper3 .title1', 'chars, words' );
		// var sw3_title2=fontAnima('.swiper3 .title2', 'chars, words' );
		// var sw3_title3=fontAnima('.swiper3 .title3', 'chars, words' );
		// var sw3_title4=fontAnima('.swiper3 .title4', 'chars, words' );



    	var t1 = new TimelineMax({repeatDelay:1,paused: true});
    	console.log(t1);
		t1.fromTo($(".swiper1 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper1 .title"),0.8,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},0.8)
		  .fromTo($(".swiper1 .font-desc"),0.8,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.2)
		  .fromTo($(".swiper1 .line"),0.8,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},2)
		  .fromTo($(".swiper1 .font-cn"),0.8,{opacity: '0',scale:".3"},{opacity: '1',scale:"1",ease: Back.easeOut.config(1.7)},1.6)
		  .fromTo($(".swiper1 .font-en"),0.8,{opacity: '0',y:-100},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},1.4)
		  animationArray.push(t1);

    	var t2 = new TimelineMax({repeatDelay:1,paused: true});
		t2.fromTo($(".swiper2 .title"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},0.8)
			.fromTo($(".swiper2 .text1"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.2)
			.fromTo($(".swiper2 .text2"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.3)
			.fromTo($(".swiper2 .text3"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.4)
			animationArray.push(t2);

    	var t3 = new TimelineMax({repeatDelay:1,paused: true});
		t3.fromTo($(".swiper3 .title"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},0.8)
			.fromTo($(".swiper3 .text1"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.2)
			.fromTo($(".swiper3 .text2"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.3)
			.fromTo($(".swiper3 .text3"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.4)
			.fromTo($(".swiper3 .text4"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.5)
			animationArray.push(t3);

    	var t4 = new TimelineMax({repeatDelay:1,paused: true});
		t4.fromTo($(".swiper4 .title"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},0.8)
			.fromTo($(".swiper4 .text1"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.2)
			.fromTo($(".swiper4 .text2"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.3)
			.fromTo($(".swiper4 .text3"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.4)
			.fromTo($(".swiper4 .text4"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.5)
			animationArray.push(t4);

    	var t5 = new TimelineMax({repeatDelay:1,paused: true});
		  t5.fromTo($(".swiper5 .title"),0.8,{opacity: '0',x:300},{opacity: '1',x:0,ease: Back.easeOut.config(1.7)},0.8)
		  .fromTo($(".swiper5 .font-desc"),0.8,{opacity: '0',x:300},{opacity: '1',x:0,ease: Back.easeOut.config(1.7)},0.9)
		  .fromTo($(".swiper5 .line"),0.8,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},2)
		  .fromTo($(".swiper5 .font-cn"),0.8,{opacity: '0',x:300},{opacity: '1',x:0,scale:"1",ease: Back.easeOut.config(1.7)},1)
		  .fromTo($(".swiper5 .font-en"),0.8,{opacity: '0',x:300},{opacity: '1',x:0,ease: Back.easeOut.config(1.7)},1.1)
		
			.fromTo($(".swiper5 .text1"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.2)
			.fromTo($(".swiper5 .text2"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,ease: Back.easeOut.config(1.7)},1.3)
			.fromTo($(".swiper5 .text3"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.4)
			.fromTo($(".swiper5 .text4"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.5)
			.fromTo($(".swiper5 .text5"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.6)
			.fromTo($(".swiper5 .text6"),0.6,{opacity: '0',y:100},{opacity: '1',y:0,scale:"1",ease: Back.easeOut.config(1.7)},1.7)
			animationArray.push(t5);
	}


	// 视频动画
	var TimeName;
	function createVideo(el,num,index){
		var i=1;
    	var state=true;

		ctTime();
		function ctTime(){
			if(i>=num){
				i=num;
				state=false;
			}else if(i==0){
				i=1;
				state=true;
			}
			el.find("img").attr("src","images/page"+index+"/H5-0"+index+"/H5-0"+index+""+i+".jpg");

			if(state){
				i++;
			}else{
				i--;
			}
			TimeName=setTimeout(function(){
				ctTime();
			},32)
		}
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