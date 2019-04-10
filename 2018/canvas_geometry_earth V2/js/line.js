$(function(){

            var can = document.getElementById("canvas");
            console.log(can);
            var ctx = can.getContext("2d");//设置绘图环境
            var w = can.width =window.innerWidth;//把窗口的宽度赋值给画布
            var h = can.height =window.innerHeight;//把窗口的高度赋值给画布
            var count = 10;//雨滴的个数
            var drops = [];//定义一个空数组来保存雨滴个数
            //浏览器窗口改变的时候重新获取宽度
            var starNum=3;


            ctx.fillStyle =color(1);
            ctx.fillRect(10,20,2,10);



            var i=0;


            window.onresize =function(){
                w = can.width = window.innerWidth;
                h = can.height = window.innerHeight;

                console.log(window.innerWidth,window.innerHeight);

            }

            function Drop(){}//定义雨滴对象
            //添加原型对象方法
            Drop.prototype = {
                init : function(){//初始化
                    this.x =random(w/2,w+w/2);
                    this.y =0;
                    this.r =1;//初始半径
                    this.vy =random(4,5);//竖直方向的加速度
                    this.vr =1;//半径的加速度
                    this.a =1;//初始透明度
                    this.va =0.96;//透明度的变化系数
                    this.l =random(h*0.8,h*0.9);//雨滴下落的高度
                },
                draw : function(){

                    ctx.fillStyle =color(this.a);
                    ctx.fillRect(this.x,this.y,2,1.5);



                    this.update();
                },
                //更新坐标
                update : function(){
                    if (this.y <this.l)
                    {
                        this.y +=this.vy;
                        this.x -=this.vy;

                    }else{

                            this.init();
                    }
                }
            }

            //不断的更新雨滴位置
            function move(){
                ctx.fillStyle ="rgba(0,0,0,.1)";
                ctx.fillRect(0,0,w,h);//这个在先绘制
                for (var i=0;i<drops.length;i++ )
                {
                    drops[i].draw();
                }

                for(var i=1;i<starNum;i++){
                    createStrat();
                }
                //调用经动画
                requestAnimationFrame(move);
            }

            function createStrat(){
                ctx.fillStyle ="rgba(255,255,255,1)";
                ctx.fillRect(random(0,w),random(0,h),2,2);
            }

            //创建一个雨滴实例对象
            //var drop = new Drop();
            //drop.init();
            //drop.draw();
            //延迟产生每个雨滴
            function setup(){
                for (var i=0;i<count;i++ )
                {
                    (function(j){
                        setTimeout(function(){
                            var drop = new Drop();
                            drop.init();
                            drops.push(drop);
                        },j*200);
                    }(i))
                }
            }

            //封装一个产生随机数的方法
            function random(min,max){
                return Math.random()*(max-min) +min;
            }
 
            //封装一个随机颜色
            function color(a){
                //rgba
                var r = Math.floor(Math.random()*255);
                var g = Math.floor(Math.random()*255);
                var b = Math.floor(Math.random()*255);
                return "rgba("+r+","+g+","+b+","+a+")"
            }

            setup();
            move();

})
