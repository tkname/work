$(function(){

  var swiper = new Swiper('.nav-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
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
  });


  //瀑布流
      //瀑布流布局
      var box = $('.gs .content ul')[0];
      var items = box.children;
      console.log(items[0].offsetWidth,items);
      // 定义每一列之间的间隙 为10像素
      var gap = 10; //宽度 距离
      var gah = 16; //高度 距离
  
      window.onload = function() {
          // 一进来就调用一次
          waterFall();
          // 封装成一个函数
          function waterFall() {
              // 1- 确定列数  = 页面的宽度 / 图片的宽度
              var pageWidth = getClient().width;  //容器宽度
              var itemWidth = items[0].offsetWidth; //元素宽度
              var columns = parseInt(pageWidth / (itemWidth + gap)); //几列
              var arr = [];
              for (var i = 0; i < items.length; i++) {
                  if (i < columns) {
                      // 2- 确定第一行
                      items[i].style.top = 0;
                      items[i].style.left = (itemWidth + gap) * i + 'px';
                      arr.push(items[i].offsetHeight);
  
                  } else {
                      // 其他行
                      // 3- 找到数组中最小高度  和 它的索引
                      var minHeight = arr[0];
                      var index = 0;
                      for (var j = 0; j < arr.length; j++) {
                          if (minHeight > arr[j]) {
                              minHeight = arr[j];
                              index = j;
                          }
                      }
                      // 4- 设置下一行的第一个盒子位置
                      // top值就是最小列的高度 + gap
                      items[i].style.top = arr[index] + gah + 'px';
                      // left值就是最小列距离左边的距离
                      items[i].style.left = items[index].offsetLeft + 'px';
  
                      // 5- 修改最小列的高度 
                      // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                      arr[index] = arr[index] + items[i].offsetHeight + gah;
                  }
              }
          }
          // 页面尺寸改变时实时触发
          window.onresize = function() {
              waterFall();
          };
      };
      // clientWidth 处理兼容性
      function getClient() {
          return {
              width: $(window).width(),
            //   height: 618
          }
      }
      // scrollTop兼容性处理
      function getScrollTop() {
          return window.pageYOffset || document.documentElement.scrollTop;
      }
})
