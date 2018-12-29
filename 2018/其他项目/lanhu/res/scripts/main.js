$(function(){
    console.log(2222);
    //页面首页
    !(function(){
        var bannerSwiper = new Swiper('.banner-swiper',{
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    
        var detailsSwiper = new Swiper('.details-swiper',{
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 10
        });
    
        $(".main .details-swiper").on("click",".swiper-slide",function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    
    
        //语言栏 点击事件
        $(".header").on("click",".right-btnBox",function(){
            $(".mask").removeClass("none");
            $(".lang-listBox").removeClass("none");
        })
    
        //语言选择
        $(".lang-listBox").on("click",".item-list",function(){
            console.log($(this).find("img").attr("src"));
            $(".header .lang-box").find("img").attr("src",$(this).find("img").attr("src"));
            $(".header .lang-box").find("span").text($(this).find("span").text());
            $(".mask").addClass("none");
            $(".lang-listBox").addClass("none");
        })
    
        
        $(".type-table-index .nav-box").on("click","li",function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    
        $(".type-table-ranking .nav-box").on("click","li",function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })();


    //页面 安全设置
    !(function(){
        $(".safe-setting").on("click",".nav-meun li",function(){
            console.log(22222);
            $(this).addClass("active").siblings().removeClass("active");
        })
    })();

    //注册
    !(function(){
        $("#mySelect").select({
            width: "1.14rem",
            color:'#fff'
		});
    })();

    // 底部
    $(".footer").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})