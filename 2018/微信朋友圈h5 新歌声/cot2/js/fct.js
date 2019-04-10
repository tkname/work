$(function(){
    var loop=1;
	var cheer=$("#cheer")[0];

var imageWidth = screen.width * 2,
imageHeight =  imageWidth * 2;

$('#aniCanvas').css({'width':(imageWidth/2)+'px','height':(imageHeight/2)+'px','position':'absolute','bottom':0});

var vertices = [],
indices,
boxes = [];

var image,
timeLine,
fragments = [],
container = document.getElementById('container'),
aniCanvas = document.getElementById('aniCanvas');




function cfe(){
    loop+=1;
    $(".c_s").hide();
    $(".c_s"+loop).show();
    if(loop==3){
        loop=0;
    }
    swiper_time=setTimeout(function(){
        cfe();
    },500)
}

window.onload = function () {

	image = document.getElementById('img-ps');
	triangulate();
	makeBoxes();
	makeFragments();
	
	$(".dd-box")[0].onclick=function(){	

		$(".container").show();
        bj.pause();
		cheer.play();
		$(".page5").hide();
		$(".container").show();

		setTimeout(function(){
			$(".c_fe").show();
		},300)

		if(!timeLine){
			var fragment;
			timeLine = new TimelineMax();
			for (var i = 0; i < fragments.length; i++) {
				fragment = fragments[i];
				var rx = randomRange(30, 90) * ((i % 2) ? 1 : -1);
				var ry = randomRange(30, 90) * ((i % 2) ? -1 : 1);
				var tl1 = new TimelineMax();
				tl1.to(fragment.canvas, 4, {
					rotationX: rx,
					rotationY: ry,
					z: 350,	
					alpha:0,
					y:fragment.box.y+randomRange(100,300)*((Math.random()>0.5)?1:-1),
					x:fragment.box.x+randomRange(100,300)*((Math.random()>0.5)?1:-1),
					ease: Cubic.easeOut,
					onComplete:function(){
						if(swiper_state){
							var tl2 = new TimelineMax();
							$(".container").hide();
					        cfe();
						    swiper_state=false;
						    $(".hand").show();
						    timeLine.pause();
						}
					}
				});
				timeLine.insert(tl1);		
			}
		}else{
			timeLine.restart();
		}
	}
};

function triangulate() {
	var x,y,
	dx = imageWidth / 16,
	dy = imageHeight / 16,
	offset = 0.5;

	for (var i = 0; i <= imageWidth; i += dx) {
		for (var j = 0; j <= imageHeight; j += dy) {
			if (i && (i !== imageWidth)) x = i + randomRange(-dx * offset, dx * offset);
			else x = i;

			if (j && (j !== imageHeight)) y = j + randomRange(-dy * offset, dy * offset);
			else y = j;

			vertices.push([x, y]);
		}
	}
	
	indices = Delaunay.triangulate(vertices);
}

function makeBoxes() {
	var p0, p1, p2,
	xMin, xMax,
	yMin, yMax;

	for (var i = 0; i < indices.length; i += 3) {
		p0 = vertices[indices[i + 0]];
		p1 = vertices[indices[i + 1]];
		p2 = vertices[indices[i + 2]];

		xMin = Math.min(p0[0], p1[0], p2[0]);
		xMax = Math.max(p0[0], p1[0], p2[0]);
		yMin = Math.min(p0[1], p1[1], p2[1]);
		yMax = Math.max(p0[1], p1[1], p2[1]);

		boxes.push({
			x: xMin,
			y: yMin,
			w: xMax - xMin,
			h: yMax - yMin
		});
	}
}
function makeFragments() {
	var p0, p1, p2,box,fragment;

	TweenMax.set(aniCanvas, { perspective: 1000 });


	for (var i = 0; i < indices.length; i += 3) {
		p0 = vertices[indices[i + 0]];
		p1 = vertices[indices[i + 1]];
		p2 = vertices[indices[i + 2]];
		box = boxes[i / 3];
		fragment = new Fragment(p0, p1, p2, box);
		fragments.push(fragment);
		
		aniCanvas.appendChild(fragment.canvas);
	}
}

function randomRange(min, max) {
	return min + (max - min) * Math.random();
}

Fragment = function (v0, v1, v2, box) {
	this.v0 = v0;
	this.v1 = v1;
	this.v2 = v2;
	this.box = box;

	this.canvas = document.createElement('canvas');
	this.canvas.width = this.box.w;
	this.canvas.height = this.box.h;
	this.canvas.style.width = this.box.w/2+ 'px';
	this.canvas.style.height = this.box.h/2 + 'px';
	this.ctx = this.canvas.getContext('2d');

	TweenMax.set(this.canvas, {
		x: this.box.x/2,
		y: this.box.y/2
	});

	this.ctx.translate(-this.box.x, -this.box.y);
	this.ctx.beginPath();
	this.ctx.moveTo(this.v0[0], this.v0[1]);
	this.ctx.lineTo(this.v1[0], this.v1[1]);
	this.ctx.lineTo(this.v2[0], this.v2[1]);
	this.ctx.closePath();
	this.ctx.clip();
	this.ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
}; //@ sourceURL=pen.js

})