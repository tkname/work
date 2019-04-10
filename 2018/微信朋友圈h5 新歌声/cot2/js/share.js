
    var _title = '中国人寿新歌声演唱会来袭';
    var nameLeng=["扎西平措","李雅","郭沁","于梓贝","周深","蒋敦豪","希林娜依·高"]
    var _desc = '听说'+nameLeng[Math.floor(Math.random()*(nameLeng.length-1))]+'有话对你说，赶快入群！';

    // console.log(_desc);
    var _link = 'http://minisite.hocodo.com/apps/newVoice/tz.html';
    var _imgUrl = 'http://minisite.hocodo.com/apps/newVoice/images/share.png';
    var url = window.location.href.split("#")[0];
    var signPackage;
    var ua = window.navigator.userAgent.toLowerCase(); 

    var info = {
        appId: '',
        secret: '',
        url: url
    };


    // function loadAudio(src, callback) {
    //     var audio = new Audio(src);
    //     audio.onloadedmetadata = callback;
    //     audio.src = src;
    // }

    // var audioUrl = "sound/weixin.mp3";//音频路径


    // //调用方法
    // loadAudio(audioUrl,function(){
    //     handleComplete();
    // });



    function shareFn(){
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?",
            data: {"param": JSON.stringify(info)},
            async: false,
            success: function (data) {
                // console.dir(data);
                wx.config({
                    // debug: true,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow'
                    ]
                });
                wx.ready(function () {
                    // 在这里调用 API
                    // 2. 分享接口
                    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                    // 
                    // 
                    sc();
                }); //end of wx.ready
            }
        })

    }



    function sc(){
        _desc = '听说'+nameLeng[Math.floor(Math.random()*(nameLeng.length-1))]+'有话对你说，赶快入群！';

        wx.onMenuShareAppMessage({
            title: _title,
            desc: _desc,
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
                //alert('用户点击发送给朋友');
                sc();
            },
            success: function (res) {
                
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));

            }
        });


        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

        wx.onMenuShareTimeline({
            title: _title,
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
                // alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                sc();
            },
            cancel: function (res) {
                // alert('已取消');
            },
            fail: function (res) {
                // alert(JSON.stringify(res));

                
            }
        });        
    }