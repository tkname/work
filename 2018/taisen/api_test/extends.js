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
            res = arr.length==0?null:{};
        for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                var n=arr[i].substring(0,num),
                    v=arr[i].substr(num+1);
                if(name===false){
                    res[n.toLowerCase()]=v;
                }else {
                    res[n] = v;
                }
            }
        }
        if(name) return res[name]?res[name]:'';
        return res
    }

    /**
     *数字补领
     *@method prezero
     *@return Number
     */
    Number.prototype.prezero = function(count) {
        count = !count?2:count;
        return (Array(count).join(0) + this).slice(-count);
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
     *添加百度统计事件
     *@method BDTJ
     *@param  String 事件名称
     */
    window.BDTJ = function(name){
        var _cid = location.href.str2json('cinemaId');
        _hmt.push(['_trackEvent', name, _cid||'缺省cinemaId', new Date().format('yyyy-MM-dd')]);
    }
})(jQuery);