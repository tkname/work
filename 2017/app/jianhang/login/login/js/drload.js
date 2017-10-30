$(function(){
		// $(".page-index").css("height",$(window).height());
    var zt1=$(".jz1").html();
    var ztt=true;
    //下拉加载更多

	var swiper_h=$(".swiper-container").height();

	var in_main=document.getElementById("inmain-header");
	var i=0;
	var sc_value=10;
	 $(window).scroll(function() {
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(scrollTop);
		if(scrollTop==0){sc_value=0}
		if(scrollTop>sc_value){
			$(".footer").hide();
			$(".in-maalone").css("padding-top","0")
		}
		else{
			$(".footer").show();
			$(".in-maalone").css("padding-top","1.466667rem")


		}
		sc_value=scrollTop;
		if(scrollTop>=swiper_h){
			$(".inmain-header").css({"position":"fixed","top":0,"left":0,"z-index":"9"})
			$(".in-maalone").css("padding-top","1.466667rem")
		}else{
			$(".inmain-header").css({"position":"relative","top":0,"left":0,"z-index":"9"})
			$(".in-maalone").css("padding-top","0")

		}

	})
	

	$('.page-index').dropload({
	    scrollArea : window,
	    loadDownFn : function(me){
	    	console.log(1111);
		    if(ztt){
			    ztt=false;
			    var zt1html="";
		  		// $(".loading").show();  	
		    	setTimeout(function(){
		  			// $(".loading").hide();  	
			    	for(var i=0;i<2;i++){
			    		zt1html+=zt1;
			    	}
			        $(".in-maalone").append(zt1html);
			    ztt=true;
			    me.resetload();
		    	},300)
		    }
	    }
	});

})