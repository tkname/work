$(function(){

    console.log(1111)
    var swiper = new Swiper('.content-swiper1', {
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },
        autoplay:{

        }
    });

    var swiper2 = new Swiper('.content-swiper2', {
      pagination: {
          el: '.swiper-pagination',
          clickable :true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:{

      }
  });


  
})