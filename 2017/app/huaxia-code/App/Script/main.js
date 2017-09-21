$(function(){

		var load = new createjs.LoadQueue();
  		var imgArray= ["./images/index/gold1.png","./images/index/gold2.png","./images/index/gold3.png",
  		"./images/index/gold4.png","./images/index/gold5.png","./images/index/gold6.png","./images/index/lx1.png","./images/index/lx2.png","./images/index/lx3.png"
  		,"./images/index/lx4.png","./images/index/lx5.png","./images/index/x1.png","./images/index/x2.png","./images/index/x3.png","./images/index/hand.png","./images/index/ka.png",
  		"./images/index/w.png","./images/logo.png","./images/asmkt-log.png","./images/index/ka.png","./images/zj.png","./images/zj2.png","./images/hb-yy.png","./images/cxk-ka.png",
  		"./images/banner.jpg","./images/gg-wg.jpg","./images/gg-yc.jpg","./images/gg-hb.jpg","./images/wz2.png","./images/lighting.png","./images/jb1.png","./images/jb2.png","./images/jb3.png",
  		"./images/jb4.png","./images/jb5.png","./images/zj.png"];
		
		var loader = new createjs.LoadQueue(false);
		loader.loadManifest(imgArray);
		loader.addEventListener("complete", init);

		function init(){

			setTimeout(function(){
				var lx1=new TimelineMax({repeat:-1});
				$(".lx1 img,.lx2 img,.lx3 img,.lx4 img,.lx5 img").css("opacity","1");
				lx1.fromTo(".lx1 img", 2,{y:-1000}, { y: 1000});

				var lx2=new TimelineMax({repeat:-1});
				lx2.fromTo(".lx2 img", 2,{y:-1000}, { y: 1000 },0.6);

				var lx3=new TimelineMax({repeat:-1});
				lx3.fromTo(".lx3 img", 2,{y:-1000}, { y: 1000 },1.2);

				var lx4=new TimelineMax({repeat:-1});
				lx4.fromTo(".lx4 img", 2,{y:-1000}, { y: 1000 },1.8);

				var lx5=new TimelineMax({repeat:-1});
				lx5.fromTo(".lx5 img", 2,{y:-1000}, { y: 1000 },1.0);

				function run(){
					$(".gold1 img,.gold2 img,.gold3 img,.gold4 img,.gold5 img,.gold6 img").removeClass("showh");
					dh();
					remove();
					setTimeout(function(){
						run();
					},1400)
				}
				run();		
				function dh(){
					$(".gold1 img").addClass('gl1');
					$(".gold2 img").addClass('gl2');
					$(".gold3 img").addClass('gl3');
					$(".gold4 img").addClass('gl4');
					$(".gold5 img").addClass('gl5');
					$(".gold6 img").addClass('gl6');

					$(".had").addClass('haddx');
					$(".ww").addClass('wwdh');
				}
				function remove(){
					setTimeout(function(){
						$(".gold1 img").removeClass('gl1').addClass("showh");
						$(".had").removeClass('haddx');
						$(".ww").removeClass('wwdh');
					},800)
					setTimeout(function(){
						$(".gold2 img").removeClass('gl2').addClass("showh");
					},900)

					setTimeout(function(){
						$(".gold3 img").removeClass('gl3').addClass("showh");
					},1000)

					setTimeout(function(){
						$(".gold4 img").removeClass('gl4').addClass("showh");
					},1100)

					setTimeout(function(){
						$(".gold5 img").removeClass('gl5').addClass("showh");
					},1200)

					setTimeout(function(){
						$(".gold6 img").removeClass('gl6').addClass("showh");
					},1300)
				}

			},500)
		}

})