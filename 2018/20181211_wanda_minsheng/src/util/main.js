import wx from 'weixin-js-sdk'
import axios from 'axios'

//微信分享
function share(data,that,callback){
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
  console.log(wx);
  wx.ready(function () {
      // 在这里调用 API
      // 2. 分享接口
      // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
      console.log("来了 老弟！", that.shareData.title);
      wx.hideAllNonBaseMenuItem();
      wx.onMenuShareAppMessage({
          title: that.shareData.title,
          desc: that.shareData.desc,
          link: that.shareData.link,
          imgUrl: that.shareData.imgUrl,
          trigger: function (res) {
              // alert('用户点击发送给朋友');
          },
          success: function (res) {
              // alert('成功');
              callback('friend');
          },
          cancel: function (res) {
              // alert('已取消');
          },
          fail: function (res) {
              // alert(JSON.stringify(res));
          }
      });

      // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

      wx.onMenuShareTimeline({
          title: that.shareData.title,
          link: that.shareData.link,
          imgUrl: that.shareData.imgUrl,
          trigger: function (res) {
              // alert('用户点击分享到朋友圈');
          },
          success: function (res) {
            callback('friends');
          },
          cancel: function (res) {
              // alert('已取消');
          },
          fail: function (res) {
              // alert(JSON.stringify(res));
          }
      });
  }); //end of wx.ready

}

//ajax 接口请求 数据修改
function ajax(api,param,success,errors){
  axios({
    method: 'post',
    url: api,
    data:param,
      transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
      }],
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  .then(function (response) {
      console.log(response.data);
      success(response);
  })
  .catch(function (error) {
      console.log(error);
      errors(error);
  });
}

//倒计时
function ctTime(that,time){
  var startTime=time=time?time:60;  //得到时间设置

	//倒计时执行
	function cttTime(){
    time--;
    that.codeDesc=time;
    if(time<=0){
			time=startTime;
      that.codeDesc="获取验证码";
      that.sendState=true;
			return false;
		}

    setTimeout(function(){
      cttTime();
    },1000)

  }

  cttTime();


}

/**
 *日期格式化
  *@method format
  *@param  "yyyy-MM-dd"
  *@return "2017-09-01"
  */
Date.prototype.format = function(fmt){
  var o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S": this.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


/**
 *添加百度统计事件
  *@method BDTJ
  *@param  String 事件名称
           that url对象
*/
function boJJ(that,name){
  var _cid = that.urlData.cinemaID;
  console.log(name);
  _hmt.push(['_trackEvent', name, _cid||'缺省cinemaId', new Date().format('yyyy-MM-dd')]);
}

export {share,ajax,ctTime,boJJ}
