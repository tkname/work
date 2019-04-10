$(function(){
	var animationArray=[];
	swiper1();

	var mySwiper = new Swiper('.swiper-container', {
		direction: "vertical",//可选选项，自动滑动
		followFinger:false,
		initialSlide:0,
		onSlideChangeEnd:function(swiper){
			console.log(swiper.activeIndex);
			$(".touch-top").hide();
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
			if(swiper.activeIndex==6){
				$(".swiper-slide").eq(swiper.activeIndex).find(".txt").css("opacity","1");
			}
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
			bgMp3=new Audio(soundArray.bg);
			bgMp3.loop=true;

	        if (ua.match(/MicroMessenger/i)) {
				shareFn();
				wx.ready(function(){
					bgMp3.play();
					audioPlay();
				})
	        }else{
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
			// 第一个页面的动画
			animationArray[0].restart();
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
		var txt=fontAnima('.swiper2 .txt-box .txt', 'lines' );
		var title2=fontAnima('.swiper2  .title2', 'chars, words' );

		var sw3_title1=fontAnima('.swiper3 .title1', 'chars, words' );
		var sw3_title2=fontAnima('.swiper3 .title2', 'chars, words' );
		var sw3_title3=fontAnima('.swiper3 .title3', 'chars, words' );
		var sw3_title4=fontAnima('.swiper3 .title4', 'chars, words' );



    	var t1 = new TimelineMax({repeatDelay:1,paused: true});
    	console.log(t1);
		t1.fromTo($(".swiper1 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper1 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper1 .top-des"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(1.7)},0.7)
		  .fromTo($(".swiper1 .title"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},0.8)
		  .fromTo($(".swiper1 .cn-des"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},1.2)
		  .fromTo($(".swiper1 .en-des"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(1.7)},0.6)
		  .fromTo($(".swiper1 .nav-center"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},1)
		  .fromTo($(".swiper1 .nav-bg2"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(1.7)},1.1)
		  .fromTo($(".swiper1 .nav-bg3"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},1.2)
		  .fromTo($(".swiper1 .nav-bg4"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},1.3)
		  .fromTo($(".swiper1 .nav-bg5"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(1.7)},1.4)
		  .fromTo($(".swiper1 .nav-bg1"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},1.5)
		  .fromTo($(".swiper1 .nav-bg2 .nav"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},1.7)
		  .fromTo($(".swiper1 .nav-bg3 .nav"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},1.8)
		  .fromTo($(".swiper1 .nav-bg4 .nav"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},1.9)
		  .fromTo($(".swiper1 .nav-bg5 .nav"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},2)
		  .fromTo($(".swiper1 .nav-bg1 .nav"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(1.7)},2.1)
		  .fromTo($(".swiper1  .btn-box"),0.6,{opacity: '0',y:"100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7)},2.3)
		  .fromTo($(".swiper1  .btn-txt"),0.6,{opacity: '0',y:"100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(1.7),onComplete:function(){
		  	$(".touch-top").show();
		  }},2.6);
		  animationArray.push(t1);


    	var t2 = new TimelineMax({paused: true});
		t2.fromTo($(".swiper2 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper2 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper2 .title"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%"},0.9)
		  // .fromTo($(".swiper2 .txt"),0.6,{opacity: '0',y:"100%"},{opacity: '1',y:"0%"},1.3)
		 .staggerFrom(txt.text.lines, 0.5, {
				// delay:1.0,
				autoAlpha:0,
			    opacity: 0,
			    rotationX: -120,
			    force3D: true,
			    transformOrigin: 'top center -150'
			}, 0.1)
		  .fromTo($(".swiper2 .people"),0.6,{opacity: '0',scale:.33},{opacity: '1',scale:1,},1.5)
		  .fromTo($(".swiper2 .bubble-bg1"),0.6,{opacity: '0',x:"40%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.7)
		  .fromTo($(".swiper2 .bubble-bg2"),0.6,{opacity: '0',x:"-40%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper2 .bubble-bg3"),0.6,{opacity: '0',x:"20%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper2 .bubble-bg4"),0.6,{opacity: '0',x:"-40%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper2 .bubble-bg5"),0.6,{opacity: '0',x:"40%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.1)
		  // .fromTo($(".swiper2 .title2"),0.6,{opacity: '0',x:"40%",},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.3)
		  .staggerFrom(title2.text.chars, 0.6, {
		        scale: 4,
		        autoAlpha: 0,
		        rotationX: -180,
		        transformOrigin: '100% 50%',
		        ease: Back.easeOut
		    }, 0.02)
		  .fromTo($(".swiper2 .txt2"),0.6,{opacity: '0',transform:"perspective(400px) rotateY(-45deg)"},{opacity: '1',transform:"perspective(400px) rotateY(0deg)",ease: Back.easeOut.config(3)},3.2)
		  .fromTo($(".swiper2 .txt3"),0.6,{opacity: '0',transform:"perspective(400px) rotateY(-45deg)"},{opacity: '1',transform:"perspective(400px) rotateY(0deg)",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},3.2)
		  // .fromTo($(".swiper2 .txt3"),0.6,{opacity: '0', rotationY: 180, transformOrigin: "0% 0%",yoyo: true},{opacity: '1',rotationY: 0, transformOrigin: "0% 0%",yoyo: true,ease: Back.easeOut.config(3)},2.7)
		  animationArray.push(t2);

    	var t3 = new TimelineMax({repeatDelay:1,paused: true});
		t3.fromTo($(".swiper3 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper3 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper3 .title"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},0.9)
		  .fromTo($(".swiper3 .txt"),0.6,{opacity: '0',y:"100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},1.3)
		  .fromTo($(".swiper3 .qiu"),0.6,{opacity: '0',transform:" scale(.3)"},{opacity: '1',transform:" scale(1)",ease: Back.easeOut.config(3)},1.5)
		  .staggerFrom(sw3_title1.text.chars, 0.6, {
		  		delay:0,
		        scale: 4,
		        autoAlpha: 0,
		        rotationX: -180,
		        transformOrigin: '100% 50%',
		        ease: Back.easeOut
		    }, 0.02)

		  .staggerFrom(sw3_title4.text.chars, 0.6, {
		        scale: 4,
		        autoAlpha: 0,
		        rotationX: -180,
		        transformOrigin: '100% 50%',
		        ease: Back.easeOut
		    }, 0.02)
		  .staggerFrom(sw3_title3.text.chars, 0.6, {
		        scale: 4,
		        autoAlpha: 0,
		        rotationX: -180,
		        transformOrigin: '100% 50%',
		        ease: Back.easeOut
		    }, 0.02)
		  .staggerFrom(sw3_title2.text.chars, 0.6, {
		        scale: 4,
		        autoAlpha: 0,
		        rotationX: -180,
		        transformOrigin: '100% 50%',
		        ease: Back.easeOut
		    }, 0.02)

		  .fromTo($(".swiper3 .txt1"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.5)
		  // .fromTo($(".swiper3 .title1"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",},1.7)
		  .fromTo($(".swiper3 .txt4"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},3.1)
		  // .fromTo($(".swiper3 .title4"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",},1.8)
		  .fromTo($(".swiper3 .txt3"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},3.7)
		  // .fromTo($(".swiper3 .title2"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",},1.9)
		  .fromTo($(".swiper3 .txt2"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},4.3)
		  // .fromTo($(".swiper3 .title3"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",},2)
		  animationArray.push(t3);

    	var t5 = new TimelineMax({repeatDelay:1,paused: true});
		t5.fromTo($(".swiper5 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper5 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper5 .title-box"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},0.9)
		  .fromTo($(".swiper5 .title-box span"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)},1.4)
		  .fromTo($(".swiper5 .nav-center"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(3)},1.5)


		  .fromTo($(".swiper5 .user-bg1 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper5 .user-bg1 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper5 .user-bg1 .line-right"),0.6,{opacity: '0',x:"1"},{opacity: '1',x:"0",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper5 .user-bg1 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.0)
		  .fromTo($(".swiper5 .user-bg1 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)

		  .fromTo($(".swiper5 .user-bg2 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.7)
		  .fromTo($(".swiper5 .user-bg2 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper5 .user-bg2 .line-right"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper5 .user-bg2 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper5 .user-bg2 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)


		  .fromTo($(".swiper5 .user-bg3 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper5 .user-bg3 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper5 .user-bg3 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper5 .user-bg3 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)
		  .fromTo($(".swiper5 .user-bg3 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.4)

		  .fromTo($(".swiper5 .user-bg4 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper5 .user-bg4 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper5 .user-bg4 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper5 .user-bg4 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)
		  .fromTo($(".swiper5 .user-bg4 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},2.5)
		  animationArray.push(t5);


    	var t4 = new TimelineMax({repeatDelay:1,paused: true});
		t4.fromTo($(".swiper4 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper4 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper4 .title-box"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},0.9)
		  .fromTo($(".swiper4 .title-box span"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)},1.4)
		  .fromTo($(".swiper4 .nav-center"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(3)},1.5)


		  .fromTo($(".swiper4 .user-bg1 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper4 .user-bg1 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper4 .user-bg1 .line-right"),0.6,{opacity: '0',x:"1"},{opacity: '1',x:"0",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper4 .user-bg1 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.0)
		  .fromTo($(".swiper4 .user-bg1 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)

		  .fromTo($(".swiper4 .user-bg2 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.7)
		  .fromTo($(".swiper4 .user-bg2 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper4 .user-bg2 .line-right"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper4 .user-bg2 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper4 .user-bg2 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)


		  .fromTo($(".swiper4 .user-bg3 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper4 .user-bg3 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper4 .user-bg3 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper4 .user-bg3 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)
		  .fromTo($(".swiper4 .user-bg3 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.4)

		  .fromTo($(".swiper4 .user-bg4 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper4 .user-bg4 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper4 .user-bg4 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper4 .user-bg4 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)
		  .fromTo($(".swiper4 .user-bg4 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},2.5)
		  animationArray.push(t4);


    	var t6 = new TimelineMax({repeatDelay:1,paused: true});
		t6.fromTo($(".swiper6 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper6 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper6 .title-box"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},0.9)
		  .fromTo($(".swiper6 .title-box span"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)},1.4)
		  .fromTo($(".swiper6 .nav-center"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(3)},1.5)


		  .fromTo($(".swiper6 .user-bg1 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper6 .user-bg1 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper6 .user-bg1 .line-right"),0.6,{opacity: '0',x:"1"},{opacity: '1',x:"0",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper6 .user-bg1 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.0)
		  .fromTo($(".swiper6 .user-bg1 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)

		  .fromTo($(".swiper6 .user-bg2 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.7)
		  .fromTo($(".swiper6 .user-bg2 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper6 .user-bg2 .line-right"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper6 .user-bg2 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper6 .user-bg2 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)


		  .fromTo($(".swiper6 .user-bg3 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper6 .user-bg3 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper6 .user-bg3 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper6 .user-bg3 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.2)
		  .fromTo($(".swiper6 .user-bg3 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.4)

		  .fromTo($(".swiper6 .user-bg4 "),0.6,{opacity: '0',scale:"2"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},1.9)
		  .fromTo($(".swiper6 .user-bg4 .user-img"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper6 .user-bg4 .line-left"),0.6,{opacity: '0',x:"-50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.1)
		  .fromTo($(".swiper6 .user-bg4 .txt"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.3)
		  .fromTo($(".swiper6 .user-bg4 .des"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},2.5)
		  animationArray.push(t6);


    	var t7 = new TimelineMax({repeatDelay:1,paused: true});
		t7.fromTo($(".swiper7 .bg"), 0.6, {opacity: '0'},{opacity: '1'})
		  .fromTo($(".swiper7 .logo"),0.6,{opacity: '0'},{opacity: '1'},0.6)
		  .fromTo($(".swiper7 .title-bg"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},0.9)
		  .fromTo($(".swiper7 .title-bg .title"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)},1.4)
		  .fromTo($(".swiper7 .des"),0.6,{opacity: '0',y:"100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},1.6)
		  .fromTo($(".swiper7 .arc-bg"),0.6,{opacity: '0',scale:2},{opacity: '1',scale:1,ease: Back.easeOut.config(3)},1.8)
		  .fromTo($(".swiper7 .cloud"),0.6,{opacity: '0',scale:.3},{opacity: '1',scale:1,ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper7 .des-bg5"),1,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",onComplete:function(e){
		  }},2.6)
		  .fromTo($(".swiper7 .des-bg1"),0.6,{opacity: '0',y:"50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.7)
		  .fromTo($(".swiper7 .des-bg4"),0.6,{opacity: '0',x:"50%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.8)
		  .fromTo($(".swiper7 .des-bg3"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},2.9)
		  .fromTo($(".swiper7 .des-bg2"),0.6,{opacity: '0',y:"-50%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3),onComplete:function(){
		  	$(".touch-top").show();
		  }},3)

		  animationArray.push(t7);

    	var t8 = new TimelineMax({repeatDelay:1,paused: true});
		t8.fromTo($(".swiper8 .bg"), 0.6, {opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)})
		  .fromTo($(".swiper8 .logo"),0.6,{opacity: '0'},{opacity: '1',ease: Back.easeOut.config(3)},0.6)
		  .fromTo($(".swiper8 .btn1"),0.6,{opacity: '0',x:"-100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},0.8)
		  .fromTo($(".swiper8 .btn-txt1"),0.6,{opacity: '0',x:"100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3),ease:Back.easeInOut},1.1)

		  .fromTo($(".swiper8 .btn2"),0.6,{opacity: '0',x:"-100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},1.5)
		  .fromTo($(".swiper8 .btn-txt2"),0.6,{opacity: '0',x:"100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3),ease:Back.easeInOut},1.8)

		  .fromTo($(".swiper8 .btn3"),0.6,{opacity: '0',x:"-100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2)
		  .fromTo($(".swiper8 .btn-txt3"),0.6,{opacity: '0',x:"100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3),ease:Back.easeInOut},2.3)

		  .fromTo($(".swiper8 .btn4"),0.6,{opacity: '0',x:"-100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3)},2.5)
		  .fromTo($(".swiper8 .btn-txt4"),0.6,{opacity: '0',x:"100%"},{opacity: '1',x:"0%",ease: Back.easeOut.config(3),ease:Back.easeInOut},2.8)

		  .fromTo($(".swiper8 .gold"),0.6,{opacity: '0',scale:"0"},{opacity: '1',scale:"1",ease: Back.easeOut.config(3)},3.2)

		  .fromTo($(".swiper8 .clound"),0.6,{opacity: '0',y:"-100%"},{opacity: '1',y:"0%",ease: Back.easeOut.config(3)},3.4)
		  .fromTo($(".swiper8 .price-bg"),0.6,{opacity: '0',y:"300%"},{opacity: '1',y:"0%"},4.2)

		  .fromTo($(".swiper8 .cn-txt"),0.6,{opacity: '0',y:"-300%"},{opacity: '1',y:"0%"},4.2)
		  .fromTo($(".swiper8 .qrcode"),1.2,{opacity: '0',scale:".33"},{opacity: '1',scale:"1",onComplete:function(){
		  	// $(".touch-top").show();
		  }},4.6)
		  animationArray.push(t8);
	}
})