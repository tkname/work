$(function(){
	var zt=false;
	
    //判断是pc还是移动端
    var hasTouch = 'ontouchstart' in window,
    touchstart = hasTouch ? 'touchstart' : 'mousedown',
    touchmove = hasTouch ? 'touchmove' : 'mousemove',
    touchend = hasTouch ? 'touchend' : 'mouseup',
    touchcancel = hasTouch ? 'touchcancel' : 'mouseup';

    $(".yzm").on('click', function(event) {
		if(zt){return false;}
		$(".mask").show();
		$(".step-layer").show();
	});

    //验证码倒计时
    wait = 60;
    var yzm = document.getElementById("yzm");
    getwait = $.cookie('wait');
    if (getwait > 0) {
        wait = $.cookie('wait');
        yz(yzm)
    }
    function yz(o) {
    	zt=true;
        if (wait == 0) {
            $(".yzm-send a").attr("onclick", "yz(this)");
            o.innerHTML = "获取验证码";
            wait = 60;
            zt=false;
            $(".yzm-send").hide();
            return;
        } else {
        	if(zt){
	            $(".yzm-send").show();
        	}
            $(".yzm-send a").attr("onclick", null);
            o.innerHTML = wait + "s";
            wait--;
            $.cookie('wait', wait, { expires: 1 });
            wait = $.cookie('wait');

        }
        setTimeout(function () { yz(o) }, 1000)
    }

	
	    // silder js 登陆页面 滑块
    var oBtn = $("#btn")[0];
    var oW,oLeft;
    var oSlider=$("#slider")[0];
    var oTrack=$("#track")[0];
    var oIcon=$("#icon")[0];
	var flag=1;
	var he,re,button;

    oBtn.addEventListener(touchstart,function(e){
        console.log(2222)
	    he=$(".slider").width();
	    re=parseInt($(window).width()-he);
	    button=$(".button").width();

		if(flag==1){
			console.log(e);
            var touches = hasTouch ? e.touches[0] : e;
			oW = touches.clientX - oBtn.offsetLeft;
			oBtn.className="button";
			oTrack.className="track";
		}
    },false);
 
    oBtn.addEventListener(touchmove, function(e) {
		if(flag==1){
            var touches = hasTouch ? e.touches[0] : e;
			oLeft = touches.clientX - oW;
			if(oLeft < 0) {
				oLeft = 0;
			}else if(oLeft > document.documentElement.clientWidth - oBtn.offsetWidth-re) {
				oLeft = (document.documentElement.clientWidth - oBtn.offsetWidth-re);
			}
			oBtn.style.left = oLeft + "px";
			oTrack.style.width=oLeft+button*2/3+ 'px';			
		}        
    },false);
    oBtn.addEventListener(touchend,function() {
        if(oLeft>=(oSlider.clientWidth-oBtn.clientWidth)){
            oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth-re);
            oTrack.style.width= (document.documentElement.clientWidth - oBtn.offsetWidth-re);
			flag=0;			
            $(".yzts").show();      
            setTimeout(function(){
                $(".mask,.step-layer").hide();
                yz($(".yzm")[0]);
            },500)
        }else{
            oBtn.style.left = 0;
            oTrack.style.width= 0;
        }
    },false);
})