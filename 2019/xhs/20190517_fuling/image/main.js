$(function(){

    console.log(1111)
    var swiper = new Swiper('.content-swiper1', {
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },
        // effect : 'fade',
        autoplay:{
          delay: 3000,//1秒切换一次
        }
    });

  $(".content-type2").on("mouseenter","ul li",function(e){
    $(this).animate({
      height:"405px"
    },300)
  }).on("mouseleave","ul li",function(){
    $(this).animate({
      height:"250px"
    },300)
  })


  $(".content-type5").on("mouseenter",".nav-box ul li",function(e){
    var index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
  })


  var viewSwiper = new Swiper('.view .swiper-container', {
    on:{
      slideChangeTransitionStart: function() {
          updateNavPosition()
        }
    }
  })
  
  $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == 0) {
      viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
      return
    }
    viewSwiper.slidePrev()
  })
  $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
      viewSwiper.slideTo(0, 1000);
      return
    }
    viewSwiper.slideNext()
  })
  
  var previewSwiper = new Swiper('.preview .swiper-container', {
    //visibilityFullFit: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    on:{
      tap: function() {
          console.log(1111)
          viewSwiper.slideTo(previewSwiper.clickedIndex)
      }
    }
  })
  
  function updateNavPosition() {
      $('.preview .active-nav').removeClass('active-nav')
      var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
      if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > previewSwiper.activeIndex) {
          var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
          previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
        } else {
          previewSwiper.slideTo(activeNav.index())
        }
      }
  }
    
    
})