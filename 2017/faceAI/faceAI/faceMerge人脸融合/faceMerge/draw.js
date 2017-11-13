(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1202,1599);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib._7 = function() {
	this.initialize(img._7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib._8 = function() {
	this.initialize(img._8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,551);


(lib.mask = function() {
	this.initialize(img.mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,211);


(lib.me = function() {
	this.initialize(img.me);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,498);


(lib.target = function() {
	this.initialize(img.target);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,551);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.mask();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mask, new cjs.Rectangle(0,0,210,211), null);


(lib.blueBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueBall, new cjs.Rectangle(-1.4,-1.6,3,3), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-1.4,-1.6,3,3), null);


(lib.mymask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Mask();
	this.instance.parent = this;
	this.instance.setTransform(105,105.5,1,1,0,0,0,105,105.5);
	this.instance.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mymask, new cjs.Rectangle(0,0,210,211), null);


(lib.umask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.mymask();
	this.instance.parent = this;
	this.instance.setTransform(105,105.5,1,1,0,0,0,105,105.5);
	this.instance.filters = [new cjs.ColorFilter(0.57, 0.57, 0.57, 1, 109.65, 109.65, 109.65, 0)];
	this.instance.cache(-2,-2,214,215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.umask, new cjs.Rectangle(0,0,210,211), null);


// stage content:
(lib.draw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.umask();
	this.instance.parent = this;
	this.instance.setTransform(1021.2,980.7,1,1,0,0,0,105,105.5);

	this.instance_1 = new lib.mask();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1232,455);

	this.instance_2 = new lib.target();
	this.instance_2.parent = this;
	this.instance_2.setTransform(834,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(80));

	// 图层 1
	this.instance_3 = new lib._8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1599,-767);

	this.instance_4 = new lib._7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1323,-835);

	this.instance_5 = new lib._6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1278,-355);

	this.instance_6 = new lib._5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1643,-31);

	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1232,864);

	this.instance_8 = new lib.blueBall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1276.4,-290,1,1,0,0,0,0.1,-0.1);

	this.instance_9 = new lib.ball();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1116.4,398.1,1,1,0,0,0,0.1,-0.1);

	this.instance_10 = new lib.me();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,-168,2845,2403);
// library properties:
lib.properties = {
	id: '259D5B72EE450941A905066E9F414BCA',
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_5.jpg?1509713710430", id:"_5"},
		{src:"images/_6.jpg?1509713710430", id:"_6"},
		{src:"images/_7.jpg?1509713710430", id:"_7"},
		{src:"images/_8.jpg?1509713710430", id:"_8"},
		{src:"images/bg.jpg?1509713710430", id:"bg"},
		{src:"images/mask.png?1509713710430", id:"mask"},
		{src:"images/me.jpg?1509713710430", id:"me"},
		{src:"images/target.jpg?1509713710430", id:"target"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['259D5B72EE450941A905066E9F414BCA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;