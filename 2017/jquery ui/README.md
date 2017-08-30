  //初始化  
  $(".vr-look").draggable({revert:"invalid"});  //会返回原来位置
  
  //碰撞检测
  $( ".bt" ).droppable({
    tolerance:"touch", //接触时触发
    drop: function( event, ui ) {
       console.log(event.currentTarget.dataset.id);
       var id=event.currentTarget.dataset.id;
    }
  });

  //移动端拖动
  $.extend(proto, {
      _mouseInit: function () {
          console.log(this);
          this.element.bind("touchstart." + this.widgetName, $.proxy(this, "_touchStart"));
          _mouseInit.apply(this, arguments);
      }, _touchStart: function (event) {

          this.element.bind("touchmove." + this.widgetName, $.proxy(this, "_touchMove")).bind("touchend." + this.widgetName, $.proxy(this, "_touchEnd"));
          this._modifyEvent(event);
          $(document).trigger($.Event("mouseup"));
          this._mouseDown(event);

          //--------------------touchStart do something--------------------
          console.log("i touchStart!");

      }, _touchMove: function (event) {
          moveFlag = 1;
          var x1=$img.position().left;
          var y1=$img.position().top;
          event.target.offsetTop=true;

          // if((rx-x1)*(rx-x1)+(ry-y1)*(ry-y1)<=r*r && x1>0 && y1>0){  //判断圆心
            this._modifyEvent(event);
            this._mouseMove(event);
          // }
          //--------------------touchMove do something--------------------
          console.log("i touchMove!");

      }, _touchEnd: function (event) {

          // 主动触发点击事件
          if (moveFlag == 0) {
              var evt = document.createEvent('Event');
              evt.initEvent('click', true, true);
              this.handleElement[0].dispatchEvent(evt);
          }
          this.element.unbind("touchmove." + this.widgetName).unbind("touchend." + this.widgetName);
          this._mouseUp(event);
          moveFlag = 0;

          // $(".bt").css({"top":0,"left":0});

          //--------------------touchEnd do something--------------------
          console.log("i touchEnd!");

      }, _modifyEvent: function (event) {
          event.target.offsetLeft=event.target.offsetLeft+(Wwid-200)/2;
          event.target.offsetTop=event.target.offsetLeft+(Whei-100)/2;  
                       
          event.which = 1;
          var target = event.originalEvent.targetTouches[0];
          event.pageX = target.clientX;
          event.pageY = target.clientY;
      }
  });
