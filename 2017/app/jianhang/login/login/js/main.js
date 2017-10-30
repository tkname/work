$(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,//可选选项，自动滑动
		pagination : '.swiper-pagination',		
	})

	$(".inmain-header").on('touchstart', '.healist', function() {
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		if(index==0){
			$(".in-maalone").show();
			$(".group").hide();
		}else{
			$(".in-maalone").hide();
			$(".group").show();
		}
	})

	// 首页事件触发
	$(".page-index").on("click",".alonelist .bt",function(){
		$('body').on('touchmove', function(event) {
    		event.preventDefault();
		});
		$(".page-index .mask").show();
		$(".in-layer").show();
	}).on("click",".in-layer .layer-close",function(){
		$("body").unbind("touchmove");
		$(".page-index .mask").hide();
		$(".in-layer").hide();	
	}).on("click",".group-bt",function(){

		window.location.href="group-wait.html";
	});

	// 详情页事件触发
	$(".page-details").on('touchstart', '.datenav .navlis ', function(event) {
		var ind=$(this).index();
		$(this).addClass('on').siblings().removeClass("on");
		$(".datelist .deta").eq(ind).show().siblings().hide();
	}).on('click', '.deta-footer .text', function(event) {
		$('body').on('touchmove', function(event) {
    		event.preventDefault();
		});
		$(".mask").show();
		$(".in-layer").show();        
	}).on("touchstart",".in-layer .layer-close",function(){
		$("body").unbind("touchmove");
		$(".mask").hide();
		$(".in-layer").hide();	
	});

	// 支付事件
	$(".in-layer .layer-list").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		setTimeout(function(){
			window.location.href="pay.html";
		},300)
	});

	// 状态事件触发
	$(".page-state").on("click",".statelist",function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	// 支付成功事件
	$(".page-step").on('touchstart', '.select-bt', function(event) {
		 $(".page-step .mask,.page-step .step-layer").show();
	}).on('touchstart', '.step-layer .close', function(event) {
		 $(".page-step .mask,.page-step .step-layer").hide();
	}).on('touchstart', '.juanr', function(event) {
		$(".juand").addClass('on-bj');
		$(this).find("span").html("已经使用");
	});

	var check=$(".page-pay .check .ipt");
	//拼单流程 支付 
	check.click(function(){
		if($(this).is(":checked")){
			$(".page-pay .check .no-check").hide();
			$(".page-pay .check .checked").show();
			$(this).prop("checked",true);
		}else{
			$(".page-pay .check .no-check").show();
			$(".page-pay .check .checked").hide();
			$(this).prop("checked",false);
		}
	});

	$(".fx-bt").click(function(){
		$(".fx-mask").show();
		$('body').on('touchmove', function(event) {
    		event.preventDefault();
		});
	})
	$(".fx-mask").click(function(){
		$(".fx-mask").hide();
		$("body").unbind("touchmove");
	})

	// 导航栏事件
	$(".footer").on('click', '.ftlist', function(event) {
		var ind=$(this).index();
		var url;
		if(ind==0){
			url="index.html";
		}else if(ind==1){
			url="ac.html"
		}else{
			url="order-state.html";
		}
		window.location.href=url;
	});

	// 登陆页面
	$(".page-login").on('touchstart', '.icon-se', function(event) {
		var ps=$(".lg-pass .ipt").attr("type");
		if(ps=="password"){
			$(".lg-pass .ipt").attr("type","text");
			$(".icon-se").removeClass('icon-biyan').addClass('icon-faxian');
		}else{
			$(".lg-pass .ipt").attr("type","password");
			$(".icon-se").addClass('icon-biyan').removeClass('icon-faxian');
		}
	}).on('click', '.selector', function(event) {
		event.preventDefault();
		/* Act on the event */
	});

	// 弹窗关闭
	$(".step-layer").on('touchstart', '.close', function(event) {
		$(".mask").hide();
		$(".step-layer").hide();
	});

})
