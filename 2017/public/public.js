
	//loading 预加载
	function loading(array){
		 this.i=0;
		 this.queue = new createjs.LoadQueue(); //创建一个加载模块
		 this.queue.installPlugin(createjs.Sound);   //创建音频加载模块
		 this.queue.loadFile({id:"sound", src:"zgz.mp3"});
		 this.queue.loadManifest(array);

		var _this=this;
		//单个文件加载完成
		this.fileload=function(callback){
			this.queue.on("fileload", callback, this);
		}

		//加载完成
		this.completes=function(callback){
			this.queue.on("complete", callback, this);
		}
	}