/**
 * extends.js v0.0.1
 *
 * Copyright (c) 2017 Jiangyuan
 * Released under the MIT license
 *
 * Date: 2017-09-05
 */
;(function($) {

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
     *字符串序列化为json
     *@method str2json
     *@param  String 属性名
     *@return Object|String
     */
    String.prototype.str2json = function(name){
        var num = this.indexOf("?"),
            str = this.substr(num+1),
            arr = str.split("&"),
            res = {};
        for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                var n=arr[i].substring(0,num),
                    v=arr[i].substr(num+1);
                res[n.toLowerCase()]=v;
            }
        }
        if(name) {
            name = name.toLowerCase();
            return res[name] ? res[name] : '';
        }
        return res
    }

    /**
     *表单数据序列化为json
     *@method form2json
     *@return Object
     */
    $.fn.form2json = function() {
        var res = {};
        this.find('[name]').each(function() {
            var name = $(this).attr('name'),
            val = $(this).val(),
            type = $(this).attr('type');
			if(type=='radio'){
				if($(this).prop('checked')){
					res[name] = val;
				}
			}else{
				if (type == 'checkbox') {
					val = $(this).prop('checked') ? 1 : 0;
				}
				res[name] = val;
			}
        });
        return res;
    }

    /**
     *自动填充表单数据
     *@method json2form
     *@param  Object
     */
    $.fn.json2form = function(o) {
        this.find('[name]').each(function() {
            var name = $(this).attr('name'),
            type = $(this).attr('type');
            console.log(name);
            if (type) {
                type = type.toLowerCase();
            }
            if (type == 'checkbox' || type=='radio') {
                var isCheck = (o[name] == 1 || o[name] == '1' || o[name] == 'true');
                $(this).iCheck(isCheck ? 'check': 'uncheck');
            }
			else {
                $(this).val(o[name]);
                if (type == 'hidden' && $('#' + name).size() > 0 && $('#' + name)[0].tagName.toLowerCase() == 'img') {
                    $('#' + name).attr('src', o[name]);
                }
            }
        });
        return this;
    }



    /**
     * 五舍六入
     * @returns {string}
     */
    Number.prototype.round0 = function () {
        var s = this + "";
        if (s.indexOf('.') != -1) {
            var numArr = s.split('.');
            var dotStr = numArr[1];
            var intStr = numArr[0];
            var intNum = parseInt(intStr);
            var firstDotNum = parseInt(dotStr.charAt(0));
            if (firstDotNum >= 5) {
                intNum += 1;
            }
            return intNum + "";
        }
        return this + "";

    };
    String.prototype.format = function (args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if (args[key] != undefined) {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        var reg = new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    };

    /**
     *添加百度统计事件
     *@method BDTJ
     *@param  String 事件名称
     */
    window.BDTJ = function(name, val){
        if(!window['_hmt']){
            console.log('请引入百度统计js');
            return;
        }
        _hmt.push(['_trackEvent', name + '-' + val, val, new Date().format('yyyy-MM-dd')]);
    }

    window.Tools = {
        random:function(start, end){
            return parseInt(Math.random()*(end-start+1) + start)
        }

    }

    /*微信分享*/
    window.wxShare = function(options){
        if(!window['wx']){
            console.log('请引入微信js');
            return;
        }
        options = $.extend({},{
            title:'分享标题',
            desc:'分享描述语',
            link:'',
            imgUrl:'',
            trigger: function (res) {
            },
            cancel: function (res) {
            },
            success: function (res) {
                BDTJ('EVENT', '分享到朋友圈');
            },
            fail: function (res) {
            }
        },options);

        window.wxShareConfig = options;

        var info = {
            appId: '',
            secret: '',
            url: window.location.href.split("#")[0]
        };

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?",
            data: {"param": JSON.stringify(info)},
            async: false,
            success: function (data) {
                wx.config({
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
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
                    wx.hideMenuItems({
                        menuList: ['menuItem:copyUrl', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                    });
                    wx.onMenuShareTimeline(window.wxShareConfig);
                    wx.onMenuShareAppMessage(window.wxShareConfig);
                });
            }
        });
    }

    /*开起手机调试模式*/
    if(location.href.str2json('debug') == '1'){
        $(function(){
            var _script = document.createElement('script');
            _script.src="http://eruda.liriliri.io/eruda.min.js";
            document.body.appendChild(_script);
            _script.onload = function () { eruda.init() }
            console.log('DEBUG MODE           : %cON',"color:#00CC66");
        })
    }else{
        console.log('DEBUG MODE           : %cOFF',"color:#cc0000");
    }
})(jQuery);
