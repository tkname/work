$(function(){
	    // 倒计时
    var cttime="2016-10-13 12:22:22";
    var cttimes=new Date(Date.parse(cttime.replace(/-/g,"/")));
    var nowDate=new Date();

    var t=cttimes.getTime()-nowDate.getTime();
    var cthtml=$(".wait-time .wait-timelist");
    ctdown();
    function ctdown(){
    	t-=1000;
    	if(t<=0){
    		t=0;
			clearTimeout(r)
    	}
    	
		var h=0;
		var m=0;
		var s=0;	
		h=Math.floor(t/1000/60/60);
		m=Math.floor(t/1000/60%60);
		s=Math.floor(t/1000%60);
		(h<10)?h="0"+h:h=h;
		(m<10)?m="0"+m:m=m;
		(s<10)?s="0"+s:s=s;
		var st=""+h+""+m+""+s;
		for(var i=0;i<st.length;i++){
			cthtml.eq(i).html(st[i]);
		}
		var r=setTimeout(function(){
			ctdown();
		},1000)

		if(h==0 && m==0 && s==0){
			clearTimeout(r)
			return false
		}

    }
})