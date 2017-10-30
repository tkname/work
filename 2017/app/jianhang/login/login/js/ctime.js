$(function(){
	var page_su=$(".page-suess .ctdown");

	var time=5;
	page_su.html(time+"s");

	ct();
	function ct(){
		time--;
		page_su.html(time+"s");
		var s=setTimeout(function(){
			ct();
		},1000)
		if(time==0){
			clearTimeout(s)
		}
	}
})