$(function(){

  var bannerSwiper = new Swiper('.banner-swiper', {
    autoplay:{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },//等同于以下设置

  });

  var swiper1 = new Swiper('.swiper1', {
    pagination: {
      el: '.swiper1 .swiper-pagination',
      clickable: true,
    },
  });
  
  var swiper = new Swiper('.nav-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.nav-swiper .swiper-pagination',
      clickable: true,
    },
    slideToClickedSlide: true
  });

  var tabSwiper = new Swiper('.tab-swiper', {
    touchReleaseOnEdges:true,
    touchRatio : 0.5,//触摸变慢
    on:{
        slideChange:function(){
            var index=this.activeIndex;
            console.log(index);
            $(".content-type2 .content").find("ul li").eq(index).addClass("on").siblings().removeClass("on");
        }
    }
  });

  $(".content-type2 .content").on("click","ul li",function(e){
    var index=$(this).index();
    tabSwiper.slideTo(index)
  })


  var lrSwiper = new Swiper('.lr-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    slidesPerView: 'auto',
    // centeredSlides: true
  });


})
