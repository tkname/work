var playingVideo = null;
var swiper_state=true;
var swiper_time;
$(function(){
    var hturl=window.location.href;
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var LEVEL;
    var cheer_state=true;
    
    if(!isiOS){
        $(".page5").addClass("video-hide");
    }else{
        //$(".play-img").css({'opacity':0});
    }
    var form=$("form");

  
    var w_w=$(window).width();
    var img_w=parseInt($(".play-img").width())
    var scale=w_w/img_w;
	var weixin=$("#weixin").get(0);
    var jmh=$("#jmh").get(0);
    var ym=$("#ym").get(0);
    var bj=$("#bj").get(0);

    var sound = $('.vo-so')
    var index = 0
    var startY=0,moveY=0;
    var scroll=0;
    $("body").show();
    $(".page1").show();

    //百度检测
    _hmt.push(['_trackEvent', 'Info-index',"index"]);

    // 时间
    var de=new Date();
    var year=de.getFullYear();
    var month=de.getMonth()+1;
    var hours=de.getHours();
    var min=de.getMinutes();    
    var weekString="日一二三四五六";
    var timeSec=de.getTime();
    var day=de.getDate();
    var mins=(min<=9)?0+""+min:min;
    var ttleg=$(".page3 .tt").length;
    var tiv=(hours<=12)?"上午":"下午";
    
    $(".page1 .time-s").text(hours+":"+mins);
    $(".page1 .time-text").text(month+"月"+day+"日"+" 星期"+weekString.slice(de.getDay(),de.getDay()+1));
    for(var i=0;i<ttleg;i++){
        var st=new Date(timeSec);
        var hours=st.getHours();
        var tiv=(hours<=12)?"上午":"下午";        
        var min=st.getMinutes();
        var mins=(min<9)?0+""+min:min;
        if(st.getDate()<day || st.getMonth()+1<month){
            tiv="昨天";
        }
        $(".page3 .tt").eq(i).text(tiv+" "+st.getHours()+":"+mins);
        timeSec-=10*60*1000;
    }

    var userImg=getParam().headimgurl;
    var userName=decodeURIComponent(getParam().nickname);
    $(".user-img").attr("src",userImg)
    $(".user-name").text(userName);

    // 屏幕页面事件
    $(".page1").on("touchstart",function(e){
        e.preventDefault();
        startY = e.originalEvent.touches[0].clientY;
    }).on("touchmove",function(e){
        e.preventDefault();
        moveY = e.originalEvent.touches[0].clientY;
    }).on("touchend",function(e){
        e.preventDefault();
        if(moveY<startY){
            $(".page1").hide();
            $(".page2").show();
            $(".page2 .tips").addClass("animation1");  
            $(".footer").show();
             $("title").text("蒋敦豪");

        }        
    })

    $(".page2 ").on("click",".left1 .text",function(){
        jmh.currentTime=1;
        jmh.play();
       
        sound.addClass('playing');
        $(".page2 .tips").removeClass("animation1").hide();
        jmh.addEventListener("ended", function () {
            $(".page2 .right1").show();
            sound.removeClass('playing');
            setTimeout(function(){
                $(".page2 .right2").show();
            },1000)
            
            setTimeout(function(){
                $(".page2").hide();
                $(".page3").show();
            },2000)
         })        
    })

    $(".page3 .p3-click").click(function(){
        $("title").text("有颜偏要靠才华群（9）");
        $(".page3").hide();
        $(".page4").show();
        $(".footer").show();
        chatAnimation();
    })

    var ym_state=true;
    $(".page4").on("click",".left8",function(){
        $(this).find(".hand").hide();
        sound.addClass('playing');
        $(".left8 .tips").removeClass("animation1").hide();              
        ym.play();
        ym.addEventListener("ended", function () {
           sound.removeClass('playing');   
           if(ym_state){
              chatAnimation2();
              ym_state=false;
           }
         })  
    }).on("click",".left13",function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;

        $("title").text("朋友圈");
        $(".page4").hide();
        $(".page5").show();
        $(".footer").hide();
        bj.play();
         var  scroll=$(".user-box").offset().top;
         var body=$("body");
         sc();    
    })
    

    $('.dd').jrumble({
        speed: 150
    });
    $('.dd').trigger('startRumble');

    //图片查看
    var zt=false,x,y,w;

    $(".line,.b-img").click(function(){
        if($(this).attr("class").match("line")){
            $(".img-box").hide();
            $(".mask").show();
            $(this).parent(".img-box").siblings(".b-img").show();
            x=$(this).parent(".img-box").siblings(".b-img").css("left");
            y=$(this).parent(".img-box").siblings(".b-img").css("top");
            w=$(this).parent(".img-box").siblings(".b-img").css("width");

            $(this).parent(".img-box").siblings(".b-img").css({"position":"fixed","z-index":999999});    
            var twweenmax=new TimelineMax();
            twweenmax.to($(this).parent(".img-box").siblings(".b-img"),0.3,{width:"100%",left:0,top:"20%"});
            $('body').on('touchmove', function(event) {
                event.preventDefault();
            });     
        }else{
            $(".mask").hide();
            $(this).css({"position":"absolute","z-index":"1"});    
            var twweenmax=new TimelineMax();
            twweenmax.to($(this),0.3,{width:w,left:x,top:y,onComplete:function(){
            $(".img-box").show();
                $(".b-img").hide();
            }});
            $("body").unbind("touchmove");            
        }
    })

    $('.play-img').on('touchstart',function(){
        $(this).siblings("video").get(0).currentTime=0;
        $(this).siblings("video").get(0).play();
        bj.pause();
        $(this).siblings("video").on("pause",function(){
            bj.play();
        })
    })

    $('.page-video').on('click',function(){
        $(this).find("video").get(0).currentTime=0;
        $(this).find("video").get(0).play();
    })

    var citylayer;
    var cityarray=["杭州","广州","北京"];

    var time_s;
    //c_fe
    $(".c_fe").on("click",".click-bt",function(){
        var index=$(this).index();
        $(".c_fe").hide();
        $(".page6").show();
        $('#poster').css({
            'background-image':'url('+$(".page6").find(".poster").eq(index).attr('src')+')'
        });
        $(".jp").show();
        citylayer=$(this).index()+1;
        $(".st-title span").text(cityarray[$(this).index()]+"站");

        if(musiczt){
            cheer.pause();
        }
        time_s=setTimeout(function(){
          $(".st-winning,.mask").show();
        },2000)
    })


    // 抽奖处理
    $(".luck-draw").on("click",function(){
        request(citylayer);
    })

    // 未中奖返回首页
    $(".st-back").click(function(){
        window.location.href=hturl;
    })

    $(".error").click(function(){
        clearTimeout(time_s)
        $(".st-winning,.mask").hide();
        $(".page6 #poster").show();
        if(musiczt){
            cheer.play();
        }
        $(".c_fe").show();
    })

    //page6 弹窗
    $(".st-winning .close").click(function(){
        $(".st-winning,.mask").hide();
    })
    $(".st-winning .close").click(function(){
        $(".st-winning,.mask").hide();
    })

    var musiczt=true;
    $(".music").click(function(){
        if(musiczt){
            cheer.pause();
            musiczt=false
        }else{
            cheer.play();
            musiczt=true;
        }
    })

    function request(add){
        $.ajax({
            url:"http://minisite.hocodo.com/apps/newVoice/api/index.php?con=Award&mod=chance",
            type:"post",
            dataType:"json",
            data:{
                add:add,
            },
            success:function(res){
                layer.closeAll();
                $(".st-winning").hide();
                if(res.code==500){
                    $(".no-winning").show();
                }else if(res.code==200){
                    LEVEL=res.data.code;
                    $(".prize").eq(res.data.code-1).show();
                }
            },
            error:function(){

            }
        })
    } 
    //中间接口调用
    form.validate({
        rules:{
            name:{required:true},
            phone:{required:true,telephone:true,number:true,maxlength:11},
            add:{required:true}
        },
        messages:{
            name:"请输入您的名字",
            phone:{
              required:'请输入手机号码',
              telephone:'请输入正确的手机号码',
              number:'请输入正确的手机号码',
              maxlength:'请输入正确的手机号码'   
            },
            add:{required:'请输入您的地址'}
        },
        submitHandler:function(){
            var d = form.find('.ba3:visible').form2json();
            d.level = LEVEL;
            layer.open({type:2});
            $.ajax({
                url:'http://minisite.hocodo.com/apps/newVoice/api/index.php?con=Award&mod=info',
                type:'POST',
                dataType:'json',
                data:d,
                success:function(res){
                    console.log(res,"request2");
                    layer.closeAll();
                    if(res.code==200){
                        layer.open({
                            content:'保存成功',
                            skin:'msg',
                            time:2,
                            end:function(){
                                window.location.reload();
                            }
                        });  
                    }else{
                        layer.open({
                            content:res.message,
                            skin:'msg',
                            time:2
                        });                        
                    }
                },
                error:function(){
                    alert('error');
                }
            })
            return false;
        }
    })

    $(".st-bt").click(function(){
        $("form").submit();
    })


     //九宫格动效
    function sc(){
        var redAnimation = new TimelineMax({ repeat: -1,repeatDelay:4 }); 
        for(var i=0;i<9;i++){   
            var BoxTimeline = new TimelineMax();
            var box=$("#img"+(i+1))//document.querySelector
            var tween1=new TweenMax(box, 1, {left:$("#"+box.attr("data-in")).css("left"),
                top:$("#"+box.attr("data-in")).css("top"),
                ease: Cubic.easeOut//Back.easeOut
            });
            var tween2=new TweenMax(box, 1,{scale:1.3})
            var tween3=new TweenMax(box, 1,{scale:1,delay:1})
            BoxTimeline.insert(tween1)
            BoxTimeline.insert(tween2)
            BoxTimeline.insert(tween3)
         
            redAnimation.insert(BoxTimeline);
        }
    }

    function chatAnimation(){
        setTimeout(function(){
            $(".conter1").show();
        },1000)
        setTimeout(function(){
            $(".left1").show();
            audioRe();
        },2000)
        setTimeout(function(){
            $(".left2").show();
            audioRe();
        },3000)
        setTimeout(function(){
            $(".left3").show();
            audioRe();
        },4000)
        setTimeout(function(){
            $(".left4").show();
            audioRe();
        },5000)
        setTimeout(function(){
            $(".right1").show();
            $('body').scrollTop($('.page4').height());
        },6000)
        setTimeout(function(){
            $(".left5").show();
            audioRe();
        },7000)
        setTimeout(function(){
            $(".left6").show();
            audioRe();
        },8000)
        setTimeout(function(){
            $(".right2").show();
            $('body').scrollTop($('.page4').height());
        },9000)        
        setTimeout(function(){
            $(".left8").show();
             $(".left8 .white").addClass("animation1"); 
            audioRe();
        },10000)        
    }

    function chatAnimation2(){
        setTimeout(function(){
            $(".left9").show();
            audioRe();
        },1000)  
        setTimeout(function(){
            $(".left10").show();
            audioRe();
        },2000)        
        setTimeout(function(){
            $(".left11").show();
            audioRe();
        },3000)        
        setTimeout(function(){
            $(".left12").show();
            audioRe();
            $(".img-tips").addClass("animation2");
        },4000)
        setTimeout(function(){
            $(".left13").show();
            audioRe();
        },5000)                     
    }

    $(".left1 img").click(function(){
    	
    })


    //把url转换为对象储存
    function getParam(){
        //获取地址
        var url=window.location.search;

        var param={};

        //判断路径是否有传值
        if(url.indexOf("?")!=-1){

            //去掉？获取字符串
            var str=url.substr(1);

            //字符串转换为数组
            strs=str.split("&");

            for(var i=0;i<strs.length;i++){

                //decodeURIComponent  中文转码
                param[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);

            }
        }   
        return param;
    }  

    //音频重置
    function audioRe() {
        createjs.Sound.play("sound");

        $('body').scrollTop($('.page4').height());
    }

})