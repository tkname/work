$(function(){

	$(".user-img").attr("src",user.headimgurl);

	var video=$("#video");
	var get=$("#get")[0];
	var send=$("#send")[0];

    //百度检测代码
	_hmt.push(['_trackEvent', 'Info-index',"index"]);

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

	//点击播放
	$(".play").click(function(){
		get.play();
	    get.pause();

	    send.play();
	    send.pause();
		$(".loading").addClass("none");
		$(".page1").removeClass("none");
		video[0].play();
	})

	var sp_state=true;
	$(".page1 span").click(function(){
		if(sp_state){
			sp_state=false;
			video[0].pause();
			$(".page1").addClass("none");
			$(".page2").removeClass("none");		
	    	showTime();
			setTimeout(function(){
	    		get.play();
			},100)
			setTimeout(function(){
				$(".page2").addClass("none");		
				$(".page3").removeClass("none");	
				chatRoom(message,messageLeng,box_crtInd);
			},waitTime+1500)
		}
	});

	//视频播放完成
	video[0].addEventListener("ended",function(){
		$(".page1").addClass("none");
		$(".page2").removeClass("none");		
    	showTime();
		setTimeout(function(){
    		get.play();
		},100)
		setTimeout(function(){
			$(".page2").addClass("none");		
			$(".page3").removeClass("none");	
		},waitTime+1500)
		chatRoom(message,messageLeng,box_crtInd);

	})

	var message=$(".message-list");	
	var messageLeng=message.length-3;
	var box_crtInd=$(".box-crt3").index();




	message.click(function(){
		clearTimeout(loop_me);
		if(boy_state)return false;
		var _class=$(this).attr("class");
		var random=Math.floor(Math.random()*5);
		var fileName="sun";
		var titieName="阳光";
		if(_class.match("box-crt1")){
			fileName="sun";
			titieName="阳光";
			sendImgInd="1";
			up();
		}else if(_class.match("box-crt2")){
			fileName="warm";
			titieName="暖男";
			sendImgInd="2";
			up()
		}else if(_class.match("box-crt3")){
			fileName="ceo";
			titieName="气质";
			sendImgInd="3";
			up();
		}
		function up(){
			boy_state=true;		
			messageLeng=messageLeng+3;
			message.eq(message.length-3).find(".text img").attr("src",'images/page3/user-check/user-check'+sendImgInd+'.png');
			message.eq(message.length-2).find(".text").html('看来'+titieName+'型小鲜肉适合你！');
			message.eq(message.length-1).find(".text img").attr("src",'images/page3/'+fileName+'/boy'+(random*1+1)+'.png');
			messageList(box_crtInd,box_crtInd,message,messageLeng,box_crtInd);	
		}
	})

	// $(".see-click").click(function(){
	// 	if(!see_state)return false;
	// 	console.log(111);
	// 	console.log($(this).scrollTop());
	// 	$(".page3").css({"overflow":"hidden","height":"100%"});
	// 	$(".page4").removeClass("none");
	// 	canvasBase(userName,sendImgInd);
	// 	TweenLite.fromTo($(".page4"), 0.5, {scale:0}, {scale:1});
	// })

	//更多告白
	$(".cfBt").click(function(){
		canvasBase(userName,sendImgInd);
	})

	$(".boyBt").click(function(){
		  layer.open({
		    title: [
		      '',
		      'background-color: #000000; color:#000;'
		    ]
		    ,content: 'tyson泰森食品官方旗舰店，使用￥泰森旗舰店￥抢先预览（长按复制整段文案，打开手机淘宝即可进入活动内容）'
		    ,btn:[]
		    ,yes:function(){
		    }
		    ,success:function(){

		    }
		  });
	});


})

