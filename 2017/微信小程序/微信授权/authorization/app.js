//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },
  /**
   * 得到用户信息  授权
  */
  gtuser: function (re, cb) {
    var app = this;
    //获取用户的当前设置
    wx.getSetting({
      success(res) {
        //用户信息授权是否获取成功  authSetting 
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',  //调用用户信息授权
            success(res) {
              //保存数据
              app.getUserInfo(function (userInfo) {
                cb(userInfo);
              })
            },
            fail() {
              // 不是首次访问时调用
              if (re) {
                //调起客户端小程序设置界面，返回用户设置的操作结果 openSetting
                wx.openSetting({
                  scope: 'scope.userInfo',
                  success: (res) => {
                    if (!res.authSetting['scope.userInfo']) {
                      cb(null);
                    } else {
                      //保存数据
                      app.getUserInfo(function (userInfo) {
                        cb(userInfo);
                      })

                    }
                  }
                })
              }
            }
          })
        } else {
          //保存数据  //授权成功 保存数据
          app.getUserInfo(function (userInfo) {
            cb(userInfo);
          })

        }
      }
    })
  },  

})
