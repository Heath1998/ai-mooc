(function(){
    var designW = 1200;  //设计稿宽
    var font_rate = 100;
    //适配
    // console.log(document.documentElement.clientWidth);
    // console.log(document.body.clientWidth);
    document.getElementsByTagName("html")[0].style.fontSize =(document.documentElement.clientWidth-20 >1200)? "100px" : (document.documentElement.clientWidth-20) / designW * font_rate + "px";

    //监测窗口大小变化
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    document.getElementsByTagName("html")[0].style.fontSize = (document.documentElement.clientWidth-20 >1200)? "100px" : (document.documentElement.clientWidth-20) / designW * font_rate + "px";
            }, false);
        }   )();