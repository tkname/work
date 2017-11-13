(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.car = function() {
	this.initialize();

	// boxes
	this.car = new lib.Box();
	this.car.setTransform(90,142);

	this.addChild(this.car);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(348.5,325.5,33,33);


// symbols:
(lib.smallbox = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhtgxIDbAAIAABjIjbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhsAyIAAhjIDZAAIAABjg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-6,24,12);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.smallbox();
	this.instance.setTransform(-3,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5.5,y:-43},15).to({y:-2},6).to({y:-43},8).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AijCkIAAlHIFHAAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;