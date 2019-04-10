    !(function(doc, win) {
      var timer, docEle = doc.documentElement,
      evt = "onorientationchange" in window ? "orientationchange": "resize",
      setFontSize = function() {
          var width = docEle.clientWidth;
          if( width > 720 ){
            width = 720;
          }
          // alert(docEle.clientWidth);
          var base = 720 / 10;
          width && (docEle.style.fontSize = ((width / 720) * base) + "px");
          win.fontSize = ((width / 720) * base);
      };
      win.addEventListener(evt,function() {
          clearTimeout(timer);
          timer = setTimeout(setFontSize, 300);
      }, false);
      doc.addEventListener("DOMContentLoaded", setFontSize, false);
      setFontSize();
    } (document, window));