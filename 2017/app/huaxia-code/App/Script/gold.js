
$(window).load(function () {
    h = $(window).height(); //窗口高度

    //爆咋图片start
    (genClips = function () {
        $t = $('.yao-zhong-info');
        var amount = 5;
        var width = $t.width() / amount;
        var height = $t.height() / amount;
        var totalSquares = Math.pow(amount, 2);
        var y = 0;
        var index = 1;

        for (var z = 0; z <= (amount * width) ; z = z + width) {
            $('<img class="clipped" src="images/jb' + index + '.png" />').appendTo($('.clipped-box'));
            if (z === (amount * width) - width) {
                y = y + height;
                z = -width;
            }
            if (index >= 5) {
                index = 1;
            }
            index++;
            if (y === (amount * height)) {
                z = 9999999;
            }
        }

    })();
    //爆咋图片end

    jb();

});


function jb() {
    var h_h = $(".yao-zhong-info").height();
    var h_t = $(".yao-zhong-info").css("top");
    var h_tvalue = h_t.replace("px", "0") / 10;
    var h_ch = h_tvalue + h_h / 3;
    $(".clipped-box").css({ "top": h_ch + "px", "left": ($(".yao-zhong-info").width() - 60) / 2 + "px" });
}


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var first = false,
    clicked = false;

function gold() {
    h_h = $(".yao-zhong-info").height();
    bt = -h_h * 2 / 3;

    var h_h = $(".yao-zhong-info").height();
    var h_t = $(".yao-zhong-info").css("top");
    var h_tvalue = h_t.replace("px", "0") / 10;
    var h_ch = h_tvalue + h_h / 3;

    if (clicked === false) {

        setTimeout(function () {
            clicked = true;
            $('.clipped-box').css({
                'display': 'block'
            });
        }, 200)
        // Apply to each clipped-box div.
        $('.clipped-box img').each(function () {
            var v = rand(65, 100),
                angle = rand(80, 105),
                theta = (angle * Math.PI) / 180,
                g = -9.8;

            var self = $(this);
            var t = 0,
                z, r, nx, ny,
                totalt = 10;

            var negate = [1, -1, 0],
                direction = negate[Math.floor(Math.random() * negate.length)];
            //alert(direction);	
            var randDeg = rand(-5, 10),/* rand(-5, 10)*/
                randDeg2 = rand(1, 5);
            var randScale = (Math.random() * 4 + 5) / 10;

            // And apply those
            $(this).css({
                'transform': 'scale(' + randScale + ') skew(' + randDeg + 'deg) rotateZ(' + randDeg2 + 'deg)'
            });

            // Set an interval
            z = setInterval(function () {
                var ux = (Math.cos(theta) * v) * direction;
                var uy = (Math.sin(theta) * v) - ((-g) * t);

                nx = (ux * t);
                ny = (uy * t) + (0.65 * (g) * Math.pow(t, 2));

                if (ny < bt) {
                    ny = bt;
                }
                //$("#html").html("g:" + g + "bottom:" + ny + "left:" + nx + "direction:" + direction);
                $(self).css({
                    'bottom': (ny) + 'px',
                    'left': (nx) + 'px'
                });
                // Increase the time by 0.10

                t = t + 0.10;

                if (t > totalt) {
                    clicked = false;
                    first = true;
                    clearInterval(z);
                }
            }, 20);

        });
    }

    setTimeout(function () { isy = true; isyao = true; /*window.location.href = "gr.html";*/ }, 2000)
}

