$(function(){
	var url=window.location.href.split("#")[0];
	var title="小鲜肉的诱惑";//网页标题
	var desc=" 快来测测什么型的小鲜肉最合你胃口！"; //描述
	var link="http://minisite.hocodo.com/test/taisen/tz.html"; //分享url
	var imgUrl="http://minisite.hocodo.com/test/taisen/share.jpg"; //分享图片

	//?cinemaId=304
	//后台配置
	var info={
		appId:'',
		secret:'',
		url:url
	}

	$.ajax({
		url: 'http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?',
		dataType: "json",
		type: 'GET',
		data: {"param": JSON.stringify(info)},
		async:false,
		success:function(res){
			//微信配置
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: res.appId, // 必填，公众号的唯一标识
				timestamp: res.timestamp, // 必填，生成签名的时间戳
				nonceStr: res.nonceStr, // 必填，生成签名的随机串
				signature: res.signature,// 必填，签名，见附录1
				jsApiList: [
					//调用的API
					'onMenuShareAppMessage',
					'onMenuShareTimeline', //朋友圈
					'onMenuShareQQ',//朋友圈
					'onMenuShareQZone',//分享到QQ空间
					'onMenuShareWeibo',//分享到腾讯微博
				] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			//分享功能详情
			wx.ready(function(){

				//分享给朋友
				wx.onMenuShareAppMessage({
				    title: title, // 分享标题
				    desc: desc, // 分享描述
				    link: link, // 分享链接
				    imgUrl: imgUrl, // 分享图标
				    type: link, // 分享类型,music、video或link，不填默认为link
				    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				       // window.location.href="http://www.baidu.com";
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    	// alert("error");
				    }
				});

				//分享给朋友圈
				wx.onMenuShareTimeline({
				    title:title, // 分享标题
				    link:link, // 分享链接
				    imgUrl:imgUrl, // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
				//分享给QQ
				wx.onMenuShareQQ({
				    title:title, // 分享标题
				    desc: desc, // 分享描述
				    link:link, // 分享链接
				    imgUrl:imgUrl, // 分享图标
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				       // 用户取消分享后执行的回调函数
				    }
				});	

				//分享给QQ空间
				wx.onMenuShareQZone({
				    title:title, // 分享标题
				    desc:desc, // 分享描述
				    link:link, // 分享链接
				    imgUrl:imgUrl, // 分享图标
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});		

				//分享到腾讯微博
				wx.onMenuShareWeibo({
				    title: title, // 分享标题
				    desc: desc, // 分享描述
				    link: link, // 分享链接
				    imgUrl: imgUrl, // 分享图标
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});									

						
			})
		},
		error:function(){
			// console.log("error");
			// alert("error");
		}

	})


});