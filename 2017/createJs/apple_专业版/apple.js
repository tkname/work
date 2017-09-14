	var canvas,stage,image,iw,ih;
	
	var apples=[]//用于存储所有水果的数组
	
    var apples_qty; //水果的总个数
	
	var panda; //熊猫精灵
	
	var pandaWidth=131  //熊猫宽度
	var pandaHeight=131//熊猫高度
	
	var texts //用于显示 累计吃到的水果的createjs.Text对象
	var count=0//累计吃到的水果的数据
	
	var speed=2; //水果下落速度
	function init(){
		canvas=document.getElementById("mycanvas");
		stage=new createjs.Stage(canvas); //stage代表舞台， 不要用别的变量，例如layer都不够直观
		createjs.Touch.enable(stage);//开启触摸支持移动端
		imgArray=["images/item0.png","images/item1.png","images/item2.png","images/panda.png","images/role_e0.png","images/role_e1.png"];

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(imgArray);
		
		createjs.Ticker.addEventListener("tick", animate);
		createjs.Ticker.setFPS(120);
		
		iw = window.innerWidth, ih=window.innerHeight;	
 
		//canvas.width=iw;
		//canvas.height=ih;
		//以上2行代码，这样做其实不妥，会失去原有比例导致图像非等比拉伸或压挤
		
		//console.log(stage.scaleX)
		
		console.log(stage.canvas.height)
	}

 
	function handleComplete(){
		apples_qty=RandomNumBoth(5,10); //总的水果数量  		
		
		var ss = new createjs.SpriteSheet({
					"images" : ["images/panda.png","images/role_e0.png","images/role_e1.png"],//3个独立图片，大小一样(131x131)，可以构建一组动作
					"frames" : {
						"regX" : 131/2,
						"width" : 131,
						"regY" : 131/2,
						"height" : 131,
						"count" : 3//一共3帧
						},
					"animations" : {
						"stay" : [0,0],
						"eat" : [1, 2,"stay", 0.2] //以0.2倍速的速度播放eat, 播放完后播放stay
					}
				});

		panda = new createjs.Sprite(ss);
		stage.addChild(panda);	 

		panda.x=pandaWidth/2//canvas.width/2;
		panda.y=canvas.height-pandaHeight/2
		
		
		
		//添加鼠标移动事件 交互
		 panda.addEventListener("mousedown",function(e){
		  oldX= e.stageX;
		  oldY= e.stageY;
		});

		panda.addEventListener("pressmove", function (e) {
		  e.target.x+= e.stageX-oldX;
		  oldX= e.stageX;
		});

		//用于显示 累计吃到的水果的createjs.Text对象
		texts = new createjs.Text("Hello", "20px Arial", "#ff7700");
		texts.x=canvas.width-texts.getBounds().width
		stage.addChild(texts);

		createApple(apples_qty)//建立apples_qty 个水果


	}
	
	
	function createApple(n=1){//创建n个新的水果
	 for(var i=0;i<n;i++){
		var fruit= new createjs.Bitmap(imgArray[rad(2)]);	//水果图样随机	
		fruit.x=rad(canvas.width-fruit.getBounds().width);//水果x位置随机
		
		fruit.y=-rad(700)//水果y位置随机
	  stage.addChild(fruit);	//添加到舞台上	
		apples.push(fruit)//也加入到数组里去
		stage.addChild(texts);// 再次执行这句可以确保texts会被放置在最上一个层级，能遮住水果而不是被水果遮盖！！！ 当然也可以用stage.setChildIndex(texts, stage.getNumChildren()-1)这种语句
	 }
	}
	
 
	function animate(){
		 
		 if(apples.length<apples_qty )createApple()//如果苹果总数不够，就增加一个

		//遍历元素 精灵  判断是否发生碰撞
		for(var i=apples.length-1;i>0;i--){// 逆向遍历apples是防止apples.splice(i,1)后，apples.length会发生变化导致apples[i]下标越界， 所以不能用for(var i=0;i<apples.length;i++)
			
			var fruit=apples[i]
			fruit.y+=speed //下落	
			
			if(fruit.y>stage.canvas.height+66/2){// 如果该水果下落到屏幕之外，要将从舞台和数组中移除
				stage.removeChild(fruit);					 
			  apples.splice(i,1); 				
				stage.update();
				return
			}

			//判读碰撞
			if(isCollsionWith(fruit)){//判断这个水果是否碰到 panda					 
					count++
					texts.text=count;
					stage.removeChild(fruit);					 
					apples.splice(i,1); 
					panda.gotoAndPlay("eat")//播放eat动画。 eat在SpriteSheet里定义了的："eat" : [1, 2,"stay", 0.2] //以0.2倍速的速度播放eat, 播放完后播放stay
					
			} 
			
			
			
		}
		
		stage.update();
	}

	// 随机数
	function rad(v){
	 	return	Math.ceil(Math.random()*v)
	}

	// 范围随机数
	function RandomNumBoth(Min,Max){//获得介于Min,Max之间的一个随机数
	      var Range = Max - Min;
	      var Rand = Math.random();
	      var num = Min + Math.round(Rand * Range); //四舍五入
	      return num;
	}

	//碰撞检测
    function  isCollsionWith(fruit) {  
	
			 //此游戏中的熊猫接近一个圆形， 水果也是一个圆形， 判断2个圆形是否相交，只要判断圆心的距离是否小于2个圆的半径之和即可
			 
			 var x1=fruit.x
			 var y1=fruit.y
			 
			 var x=panda.x
			 var y=panda.y
			 
			 var distance=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y)) //圆心的距离
			 
			 if(distance<131/2+66/2)return true   // 131是panda的图片尺寸， 66是水果的图片尺寸
			 
			 return false
			 
    }  