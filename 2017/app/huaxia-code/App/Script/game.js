$(function() {
	// $("body").addClass("bg");
	var w_hei = $(window).height();
	var w_wid = $(window).width();
	$(function() {
		//		alert($(window).height());
		$(".waik").width($(window).width());
		$(".waik").height($(window).height());
		var audio = $("#audio")[0];
		var jp_left = w_wid - $(".jp_c").width() / 2;
		//$(".yao_sj").css("top", w_hei - 140 * 2 + "px");//手机摇摇图居中
		$(".jp_c").css("top", w_hei + 140 + "px").css("left", jp_left + "px"); //奖品层居中
		//app
		$('.app')
			.click(function() {
				/***************新改动***************/
				$('.leiji-cs').hide();
				/***************end********************/
				kai();
			});

		if(!window.DeviceMotionEvent) {
			$(".ts-wz").show();
		} else {
			$(".gg-top").css("top", $(".gg-top").offset().top + $(".ts-wzs").height);
		}

		$(".ts-wzs").click(function() {
			$(".gg-top").hide();
			$(".clipped-box").hide();
			$('.leiji-cs').hide();
			is_init();
			kai();
		})
		$(".ts-wz").click(function() {
			$('.leiji-cs').hide();
			is_init();
			kai();
		})

	});

	if(window.DeviceMotionEvent) {
		var isyao = true;
		var isy = true;
		var speed = 14;
		var speed2 = 2;
		var x = y = z = lastX = lastY = lastZ = 0;
		var m = n = lastM = lastN = 0;
		window.addEventListener('devicemotion', function() {

			var acceleration = event.accelerationIncludingGravity;
			x = acceleration.x;
			y = acceleration.y;
			if(Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
				if(isyao) {
					if(isy) {
						$(".gg-top").hide();
						$(".clipped-box").hide();
						$('.leiji-cs').hide();
						is_init();
						kai();
					}
				}
				isyao = false;

			}
			lastX = x;
			lastY = y;
		}, false);
	}

	if (window.DeviceOrientationEvent) {
		//2017/6/26新增重力感应金币
		window.addEventListener('deviceorientation', function(event) {
			var alpha = event.alpha,
				beta = event.beta,
				gamma = event.gamma;

			$('.golden').css({'transform': 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)'}, 
			{'webkit-transform': 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)'});
			
		}, false);
	}



	iszhong = false;

	function kai() {
		if(w_hei <= 510) {
			an_hei = 60;
		} else {
			an_hei = 84;
		}
		$(".ts-wz ").hide();
		$(".asm-log").show();
		$("body").removeClass("light-bg").addClass("bg");
		$(".gg-top,.yao-top").hide();
		$(".ha").hide();
		$(".gold1 img,.gold2 img,.gold3 img,.gold4 img,.gold5 img,.gold6 img").hide();

		audio.play();
		$(".x-top,.x-bottom").show();

		$(".sj_cheng").removeClass("sj_act shake");
		$(".jp_c").hide();
		$('.ka-bt').hide();

		$(".sj_shang span").hide();
		$(".shang-iimg").removeClass("shang-iimgdh");
		$(".xia-iimg").removeClass("xia-iimgdh");

		$(".div-top,.div-bottom").show();

		$(".logo_img:not(:animated)").animate({
			opacity: 1
		}, 200).delay(700).animate({
			opacity: 0
		}, 500, function() {
			$(this).stop();
		});

		$(".bg-top:not(:animated)").animate({
			top: "-=" + an_hei + "px"
		}, 200).delay(700).animate({
			top: "+=" + an_hei + "px"
		}, 500, function() {
			$(this).stop();
		});
		$(".bg-bottom:not(:animated)").animate({
			bottom: "-=" + an_hei + "px"
		}, 200).delay(700).animate({
			bottom: "+=" + an_hei + "px"
		}, 500, function() {
			$(".ha").show();
			$(".gold1 img,.gold2 img,.gold3 img,.gold4 img,.gold5 img,.gold6 img").show();

			$(this).stop();
			$(".sj_cheng").addClass("sj_act");
			$(".div-top,.div-bottom").hide();
			$(".x-top,.x-bottom").hide();
			if(iszhong) {
				sthing();
			} else {
				ggsthing();
				//ka_jp("20160800004");
			}

		});

		$(".div-top:not(:animated)").animate({
			height: "+=" + an_hei + "px"
		}, 200).delay(700).animate({
			height: "-=" + an_hei + "px"
		}, 500, function() {
			$(this).stop();
		});

		$(".div-bottom:not(:animated)").animate({
			height: "+=" + an_hei + "px"
		}, 200).delay(700).animate({
			height: "-=" + an_hei + "px"
		}, 500, function() {
			$(this).stop();
		});

	}

	function no_jp() {
		$("body").removeClass("bg").addClass("light-bg");
		$(".sj_cheng,.leiji-cs").hide();
		$(".sj_cheng").hide();
		$('.yao-weizhong-info').addClass("ka-bt");
		$(".yao-wz-tit").addClass("ft-sh");
		isyao = true;
	}

	function zhong_jp() {
		isy = false;
		$(".sj_cheng,.leiji-cs").hide();
		$(".sj_cheng").hide();
		$('.yao-zhong-info').addClass("ka-bt");
		$('.foot-gr span').show();
		setTimeout(function() {
			gold();
			return
		}, 1000);
		isyao = true;
	}

	function ka_jp(ind) {
		$(".sj_cheng,.leiji-cs").hide();
		$(".sj_cheng").hide();

		//$('.yao-ka-info').eq(ind).addClass("ka-bt");
		//$(".ka-ti").eq(ind).addClass("ft-sh");
		//$(".yao-ka-info").eq(ind).addClass("lx-dh");
		$("#" + ind).addClass("ka-bt");
		$("#" + ind).addClass("lx-dh");
		$("#" + ind + " .ka-ti").addClass("ft-sh");
		isyao = true;
	}

	var CState = false;
	//随机事件
	function sthing() {

		if(CState) return;
		CState = true;

		$.ajax({
			type: "POST",
			contentType: "application/json",
			dataType: "json",
			url: "Dorun.aspx",
			data: "{name:bb}",
			success: function(json) {
				CState = false;
				if(json.isok === "1") //中红包
				{
					$(".zj-price").html(json.pprice);
					zhong_jp();
				} else if(json.isok === "11") //中积分
				{
					$(".yao-zhong-info .yao-wz-img").attr("src", "../images/zj3.png");
					$(".zj-price").html(json.pprice);
					zhong_jp();
				} else if(json.isok === "2") //中卡
				{
					ka_jp(json.pid);
				} else {
					$(".yao-wz-tit span").html(json.msg);
					no_jp();
				}
				iszhong = false;
			},
			error: function(json) {
				alert("网络繁忙");
			}
		});

		//var arr = [0, 1];
		//var out = [];
		//var temp = (Math.random() * arr.length) >> 0;
		//out.push(arr.splice(temp, 1));
		//if (out == 0) {
		//    no_jp();
		//} else if (out == 1) {
		//    zhong_jp();
		//    iszhong = false;
		//}
	}

	//广告随机事件
	function ggsthing() {

		//$("body").removeClass("bg");

		var out = (Math.random() * $(".gg-top").length) >> 0;
		//out = Math.random() * arr.length >> 0;
		$(".sj_cheng,.leiji-cs").hide();
		$(".sj_cheng").hide();
		$(".gg-top").hide();
		//alert(out);
		$(".gg-top:eq(" + out + ")").show();
		isyao = true;
	}

	function is_init() {
		$(".sj_cheng").show();
		$('.yao-weizhong-info').removeClass("ka-bt");
		$('.yao-weizhong-info').removeClass("ft-sh");
		$('.yao-weizhong-info').removeClass("fd-sty");
		$('.yao-zhong-info').removeClass("fd-sty");
		$('.yao-hd-info').removeClass("fd-sty");
		$('.yao-ka-info').removeClass("fd-sty");
	}

	var newLight = $("<img class = 'lighting' src='images/lighting.png'>");
	newLight.appendTo($('.sj_shang'));

});