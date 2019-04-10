$(function(){

    var hasTouch = 'ontouchstart' in window,
    startEvent = hasTouch ? 'touchstart' : 'mousedown',
    moveEvent = hasTouch ? 'touchmove' : 'mousemove',
    endEvent = hasTouch ? 'touchend' : 'mouseup',
    cancelEvent = hasTouch ? 'touchcancel' : 'mouseup';
    var width  = window.innerWidth,height = window.innerHeight;
       
    var bj=true;
    var tokyo=false;
    var zIndexState=false;
    var upState=false;
    var mouseX, mouseY, isMove = false;
    var videoState=true;

    document.addEventListener('WeixinJSBridgeReady',function(){  
        $("#video")[0].play();
        $("#video")[0].pause();
    },false);

})
