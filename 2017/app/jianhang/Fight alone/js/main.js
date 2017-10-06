$(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,//可选选项，自动滑动
		pagination : '.swiper-pagination',		
	})

	// 首页事件触发
	$(".page-index").on("click",".alonelist .bt",function(){
		$('body').on('touchmove', function(event) {
    		event.preventDefault();
		});
		$(".page-index .mask").show();
		$(".in-layer").show();
	}).on("touchstart",".in-layer .layer-close",function(){
		$("body").unbind("touchmove");
		$(".page-index .mask").hide();
		$(".in-layer").hide();	
	}).on('touchstart', '.healist', function() {
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		if(index==0){
			$(".in-maalone").show();
			$(".group").hide();
		}else{
			$(".in-maalone").hide();
			$(".group").show();
		}
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
		window.location.href="pay.html";
	});
})