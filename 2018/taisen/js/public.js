//数据请求
function rq(callback){
	$.ajax({
		url:"js/data.json",
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

//把url转换为对象储存
function getParam(){
    //获取地址
    var url=window.location.search;

    var param={};

    //判断路径是否有传值
    if(url.indexOf("?")!=-1){

        //去掉？获取字符串
        var str=url.substr(1);

        //字符串转换为数组
        strs=str.split("&");

        for(var i=0;i<strs.length;i++){
            //decodeURIComponent  中文转码
            param[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);

        }
    }   
    return param;
}  


//图片加载
var imgs=[],imgSun=[],imgWarm=[],imgCeo=[];
var ss_ind=0;
var mLength;
var boy_state=true;

function handleComplete(){
	setTimeout(function(){
		$(".load").addClass("none");
		$(".play").removeClass("none");
	},100)
}
function progressHandler(e){
	$(".progress").text(Math.ceil(e.progress*100)+"%");
}
var loadIndex=0;
function fileloadHandler(e){
	if(e.item.id.match("suntext")){
		imgSun.push(e.result);
	}else if(e.item.id.match("warmtext")){
		imgWarm.push(e.result);
	}else if(e.item.id.match("ceotext")){
		imgCeo.push(e.result);
	}else{
		imgs[e.item.id]=e.result;
	}
}

//聊天室
var waitTime=2700;
var saveTime=waitTime;


//聊天室时间显示  
/**
	* [chatRoom 聊天室时间加载，添加循环动画]
	* @param  {[type]} message [操作的div]
	* @param  {[type]} messageLeng  [div的长度]
*/
function chatRoom(message,messageLeng,box_crtInd){
	setTimeout(function(){
		$(".time-Prompt p span").addClass("active");
	},waitTime)
	$("body").addClass("bg-gray");
	//执行聊天室时间循环
	messageList(0,false,message,messageLeng,box_crtInd);
}

//聊天室动画添加 
/**
	* [messageList 聊天室动画添加]
	* @param  {[type]} n [当前的index]
	* @param  {[type]} time [等待的时间]
	* @param  {[type]} message [div]
	* @param  {[type]} messageLeng  [div的长度]
*/
function messageList(n,time,message,messageLeng,box_crtInd){
	if(n>=messageLeng)return false;
	messageTime(n,time,message,messageLeng,box_crtInd);
	return messageList(++n,false,message,messageLeng,box_crtInd);
}


var see_state=true;
var user=getParam();
var userName=user.nickname;
// //人物选择 
var sendImgInd;

function messageTime(n,time,message,messageLeng,box_crtInd) {
	if(time===n){ss_ind=n+2;}

	if(message.eq(n).attr("class").match("right")){
		setTimeout(function(){
			$(".input-bot").removeClass("botAni2").addClass("botAni");
			$(".page3").css("padding-bottom","7rem");
			$('body').scrollTop($('.page3').height());
		},(n+2-ss_ind)*waitTime-600)
	}

	setTimeout(function(){
		message.eq(n).addClass("active");
		if(message.eq(n).attr("class").match("right")){
			send.volume=1;
			send.currentTime=0;
			send.play();

			setTimeout(function(){
				$(".input-bot").removeClass("botAni").addClass("botAni2");
				$(".page3").css("padding-bottom","1.52rem");
				$('body').scrollTop($('.page3').height());
			},500)
			}else{
				get.currentTime=0;
				get.play();
		}
		//选择轮播 背景
		if(n==(box_crtInd-1)){
			loopMessageON(message,box_crtInd);
			boy_state=false;
		}
		if(n==message.length-1){
			setTimeout(function(){
				if(!see_state)return false;
				$(".page3").css({"overflow":"hidden","height":"100%"});
				$(".page4").removeClass("none");
				canvasBase(userName,sendImgInd);
				TweenLite.fromTo($(".page4"), 0.5, {scale:0}, {scale:1});
				setTimeout(function(){
					$(".img_save").removeClass('none');
				},800)		
				setTimeout(function(){
					$(".img_save").addClass('none');
				},3000)		

			},600)
		}
		$('body').scrollTop($('.page3').height());
	},(n+2-ss_ind)*waitTime)
}

//聊天室 选择轮播图 
/**
	* [messageList 聊天室动画添加]
	* @param  {[type]} message [div]
	* @param  {[type]} box_crtInd [聊天室轮播图最后一个的位置 box-crt3]
*/
var loop_index=0;
var loop_me;
function loopMessageON(message,box_crtInd){
	loop_me=setTimeout(function(){
	if(loop_index>2)loop_index=0;
	 message.removeClass("message-on");
	 message.eq((box_crtInd-3+loop_index)).addClass("message-on");
	 loopMessageON(message,box_crtInd);
	loop_index++;
	},1200);
}

//获取时间
function showTime() {
    var de=new Date();
    var year=de.getFullYear();
    var month=de.getMonth()+1;
    var hours=de.getHours();
    var min=de.getMinutes();    
    var weekString="日一二三四五六";
    var timeSec=de.getTime();
    var day=de.getDate();
    var mins=(min<=9)?0+""+min:min;
    var ttleg=$(".page3 .tt").length;
    var tiv=(hours<=12)?"上午":"下午";

    /*获取当前农历*/
    function showCal() {
        if (year < 100) year = "19" + year;
        return GetLunarDay(year, month, day);
    }
    var calendar = showCal();

    $(".page2 .time-before").text("丁酉年"+calendar);
    $(".page2 .time-s,.wx-right .r-time").text(hours+":"+mins);
    $(".page2 .time-text").text(month+"月"+day+"日"+" 星期"+weekString.slice(de.getDay(),de.getDay()+1));
}


//canvas 生成图片
/**
	* [messageList 聊天室动画添加]
	* @param  {[type]} userName [用户名]
	* @param  {[type]} index [boy选择]
*/

var canvas_state=false;
var	canvas = document.createElement('canvas');
var stWidth=750;
var stHeight=1050;
 
function canvasBase(userName,index){
	var boyObj=[];
	var boyBg;
	if(index==1){
		boyObj=imgSun;
		boyBg=imgs.sunbg;
		$(".page4").addClass("sun");
	}else if(index==2){
		boyObj=imgWarm;
		boyBg=imgs.warmbg;
		$(".page4").addClass("warm");
	}else{
		boyObj=imgCeo;
		boyBg=imgs.ceobg;
		$(".page4").addClass("ceo");
	}



	var random=Math.floor(Math.random()*5);
	var sc=stWidth/stHeight;
	var wid=$(window).width();
	var ra=wid/stWidth*2;

	canvas.setAttribute("width",wid*2+"px")
	canvas.setAttribute("height",wid/sc*2+"px")
	var stage = new createjs.Stage(canvas);
	var ct2=new createjs.Container();
	stage.addChild(ct2);		

	// var img =new createjs.Bitmap(boyBg);
	// img.scaleY=ra;
	// img.scaleX=ra;
	// ct2.addChild(img);
	
		//自动换行


	if(titleimg)ct2.removeChild(titleimg);
	var titleimg =new createjs.Bitmap(boyObj[random]);
	titleimg.scaleY=ra;
	titleimg.scaleX=ra;
	ct2.addChild(titleimg);

	if(textName)ct2.removeChild(textName);
	var textName=userName.replace(/[^\x00-\xff]/g,"$&\x01").replace(/.{16}\x01?/g,"$&\n").replace(/\x01/g,"");
	var text = new createjs.Text(textName,24*ra+"px Arial", "#fff");
	text.x = 192*ra;
	text.y = 328*ra;
	text.lineWidth=200;
	text.lineHeight=15*ra;
	if(userName.gblen()>16){
		text.x = 192*ra;
		text.y = 315*ra;
		text.lineHeight=28*ra;
	}
	text.textAlign="center";
	ct2.addChild(text);

	stage.update();
	var base=canvas.toDataURL();
	$(".page4 .contentImg img").attr("src",base);
}





String.prototype.gblen = function() {    
    var len = 0;    
    for (var i=0; i<this.length; i++) {    
        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {    
             len += 2;    
         } else {    
             len ++;    
         }    
     }    
    return len;    
}    






