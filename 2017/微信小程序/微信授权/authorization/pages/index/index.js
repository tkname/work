//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '点击 重新获得授权',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    app.gtuser(false,function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    });
  },
  /**
   * 重新调用授权
  */
  authorization:function(){
    console.log();
    app.gtuser(true, function (userInfo) {
      
    })
  }
})
