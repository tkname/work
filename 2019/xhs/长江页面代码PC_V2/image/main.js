$(function(){

    jQuery(".m-slide").slide({ titCell:".tab li", mainCell:".img",effect:"fold", autoPlay:false});

    console.log(1111)
    var bannerswiper = new Swiper('.banner-swiper', {
      effect : 'fade',
      autoplay:{
        delay: 2000,//1秒切换一次
      }
    });

    var swiper = new Swiper('.content-swiper1', {
        pagination: {
            el: '.content-swiper1 .swiper-pagination',
            clickable :true,
        },
        effect : 'fade',
        autoplay:{
          delay: 3000,//1秒切换一次
        }
    });

    var swiper2 = new Swiper('.content-swiper2', {
      pagination: {
          el: '.content-swiper2 .swiper-pagination',
          clickable :true,
      },
      navigation: {
        nextEl: '.content-type3 .swiper-button-next',
        prevEl: '.content-type3 .swiper-button-prev',
      },
      effect : 'fade',
      autoplay:{
        delay: 3000,//1秒切换一次
      }
  });



  // $(".content-type5").on("mouseenter",".nav-box ul li",function(e){
  //   var index=$(this).index();
  //   $(this).addClass("active").siblings().removeClass("active");
  // })


  // var viewSwiper = new Swiper('.view .swiper-container', {
  //   on:{
  //     slideChangeTransitionStart: function() {
  //         updateNavPosition()
  //       }
  //   }
  // })
  
  // $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
  //   e.preventDefault()
  //   if (viewSwiper.activeIndex == 0) {
  //     viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
  //     return
  //   }
  //   viewSwiper.slidePrev()
  // })
  // $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
  //   e.preventDefault()
  //   if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
  //     viewSwiper.slideTo(0, 1000);
  //     return
  //   }
  //   viewSwiper.slideNext()
  // })
  
  // var previewSwiper = new Swiper('.preview .swiper-container', {
  //   //visibilityFullFit: true,
  //   slidesPerView: 'auto',
  //   allowTouchMove: false,
  //   on:{
  //     tap: function() {
  //         console.log(1111)
  //         viewSwiper.slideTo(previewSwiper.clickedIndex)
  //     }
  //   }
  // })
  
  // function updateNavPosition() {
  //     $('.preview .active-nav').removeClass('active-nav')
  //     var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
  //     if (!activeNav.hasClass('swiper-slide-visible')) {
  //       if (activeNav.index() > previewSwiper.activeIndex) {
  //         var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
  //         previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
  //       } else {
  //         previewSwiper.slideTo(activeNav.index())
  //       }
  //     }
  // }
    
    
})