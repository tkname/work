/*
*author:areca
*day:2017-01-17
*/

/*
* 删除 数组中 一组数据
*array 数组对象 
*id:需要去除的id对应值
*/
Array.prototype.del=function(array,id){
	var newArray=[];
	array.forEach(function(item,i){
		var obj={};
	    if(id){
	        if(isNaN(id) || item.id!=id){
	            obj.id=item.id;
	            obj.text=item.text;
	            newArray.push(obj);
	        }
	    }else{
	            obj.id=item.id;
	            obj.text=item.text;
	            newArray.push(obj);
	    }
	})
	return newArray;
}

/*
*截取 路由 url
*
*/
window.getParam=function(){
	//得到？后的值
	var url=window.location.search;
	var param={};
	//url 是否传值
	if(url.indexOf("?")!=-1){
		//去掉第一个字符 ?
		url=url.substr(1);

		//拆分成数组
		index_ar=url.split("&");
		index_ar.forEach(function(item,i){
			item=item.split("=");
			// decodeURIComponent 中文转码
			param[item[0]]=decodeURIComponent(item[1]);
		})
	}
	return param;
}

/*
*	是否开启调试模式  eruda
*	github地址：https://github.com/liriliri/eruda/blob/master/doc/README_CN.md
*/
window.debug=function(open){
	if(open){
		$.getScript("http://cdn.bootcss.com/eruda/1.4.2/eruda.min.js",function(){  //加载test.js,成功后，并执行回调函数
			eruda.init();
		});
	}
}


/*
*	短信验证  倒计时
* 	time  时间
*  	
*/
$.fn.messageCountdown=function(time,phone){
	var textVal=this.text();
	var startTime=time=time?time:60;  //得到时间设置
	var that=this;
	var clickState=true;			  //点击状态
	var phoneReg=/^1[3|4|5|7|8][0-9]{9}$/;

	that.click(function(){
		if(!clickState){
			return false;
		}
		if(phone.replace(/ /g,"")==""){
			lb.layerMsg('手机号不能为空！');
			return false;      
		}else if(!(phoneReg.test(phone))){
			lb.layerMsg('手机号格式不正确！');
			return false;
		}				
		ctTime();
		clickState=false;
	});
	//倒计时执行
	function ctTime(){
		time=time;
		that.html(time+"s");
		time--;
		if(time<-1){
			time=startTime;
			that.html(textVal);
			clickState=true;
			return false;
		}
		setTimeout(function(){
			ctTime();
		},1000)
	}
}

/*
*	其他函数
* 
 */
var lb={
	asynRequest:function(url,type,param,callback){ //ajax请求
	  	$.ajax({
	  		url: httpurl+url,
	  		type: type,
	  		dataType: "json",
	  		data:param,
	  	})
	  	.done(function(msg) {
	  		if(typeof(msg)=="string"){
			    var msg=eval('('+ msg +')');
	  		}
	  		callback(msg);
	  	})
	  	.fail(function(msg) {
	  		callback(msg);
			layerMsg("网络超时！");
	  	})
	},
	layerMsg:function(msg){ //弹窗显示
		layer.open({
			content: msg
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
	}
}