	// 范围随机数
	function RandomNumBoth(Min,Max){
	      var Range = Max - Min;
	      var Rand = Math.random();
	      var num = Min + Math.round(Rand * Range); //四舍五入
	      return num;
	}