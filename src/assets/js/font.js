function getScrollbarWidth() {
    var oP = document.createElement('p'), styles = {
        width: '100px',
        height: '100px',
        overflowY: 'scroll',
    }, i, scrollbarWidth;

    for (i in styles){
        oP.style[i] = styles[i];
    }
    document.body.appendChild(oP);
    scrollbarWidth = oP.offsetWidth - oP.clientWidth;
    oP.remove();

    return scrollbarWidth;
}

(function(){
    var designW = 1920;  //设计稿宽
    var font_rate = 100;
    var scrollWidth = (document.documentElement.clientWidth > document.body.clientWidth) ? getScrollbarWidth(): 0;
    //滚动条
    console.log(scrollWidth);
    //适配
    console.log(document.documentElement.clientWidth);
    console.log(document.body.clientWidth);
    if(document.documentElement.clientWidth > 750)
        document.getElementsByTagName("html")[0].style.fontSize = (document.documentElement.clientWidth - scrollWidth) / designW * font_rate + "px";
    else
        document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 375 * font_rate + "px";
    //监测窗口大小变化
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    var scrollWidth = (document.documentElement.clientWidth > document.body.clientWidth) ? getScrollbarWidth(): 0;
    if(document.documentElement.clientWidth > 750)
        document.getElementsByTagName("html")[0].style.fontSize =  (document.documentElement.clientWidth - scrollWidth) / designW * font_rate + "px";
    else
        document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 375 * font_rate + "px";
    }, false);
        }   )();