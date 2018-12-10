
<template>
    <div class="content">
        <div class="flow">
            <img src="../../../static/img/home.png" class="logo">
            <div class="flow-text">
                AI课程
            </div>
            <img src="../../../static/img/next.png" class="flow-logo">
            <img src="../../../static/img/series.png" class="logo">
            <div class="flow-text">
                Building an Intelligent Bot
            </div>
            <img src="../../../static/img/next.png" class="flow-logo">
            <img src="../../../static/img/video.png" class="logo">
            <div class="flow-text1">
                人工智能中的线性代数
            </div>
        </div>
        <div class="videoPlaying">
            <div class="introduction">
                <div class="c-title">
                    人工智能中的线性代数
                </div>
                <div class="line"></div>
                <div class="fit">
                    <div class="fit-item">
                        <img src="../../../static/img/time.png" class="fit-logo">
                        <div class="fit-text">1小时40分钟</div>
                    </div>
                    <div class="fit-item">
                        <img src="../../../static/img/beginner.png" class="fit-logo">
                        <div class="fit-text">入门</div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="brief">
                    本课程首先介绍了人工智能的定义，讲解了生成测试法，并详细谈到了给事物命名的重要性。
                    介绍了人工智能发展的简史，讲到了本课程中将会接触到的各种人工智能程序。
                </div>
            </div>
            <div class="video-container">
                <video src="http://w.gdou.com/livevod/llaw/resource/01.mp4" class="video"></video>
            </div>
        </div>
        <div class="next">
            <div class="next-text">
                下一个视频：掌握 Python 关键工具, 处理、分析、可视化数据。
            </div>
            <img src="../../../static/img/next.png" class="next-logo">
        </div>
        <div class="line1"></div>
    </div>
</template>

<script>
export default {
    name: 'mainContent'
}
</script>

<style scoped>
.content{
    width: 62.5%;
    margin: 0 auto;
}
.flow{
    font-size: 0;
    position: relative;
    text-align: left;
    margin: .54rem 0;
}
.logo{
    display: inline-block;
    height: .18rem;
    vertical-align: middle;
    padding: 0 .03rem;
}
.flow-logo{
    margin: 0 .1rem;
    vertical-align: middle;
}
.flow-text{
    vertical-align: middle;
    font-size: .16rem;
    font-family:PingFangSC-Medium;
    color:rgba(155,155,155,1);
    display: inline-block;
    padding: 0 .03rem;
}
.flow-text1{
    vertical-align: middle;
    font-size: .16rem;
    font-family:PingFangSC-Medium;
    color:rgba(155,155,155,1);
    display: inline-block;
    padding: 0 .03rem;
}
.flow-text:hover {
    color:rgba(73,137,182,1);
}
.flow-text1:hover {
    color:rgba(73,137,182,1);
}
.introduction{
    float: left;
    text-align: left;
    vertical-align: middle;
}
.videoPlaying{
    font-size: 0;
    overflow: hidden;
}
.video-container{
    float: right;
}
.video{
    width: 7.57rem;
    height: 4.36rem;
    border-radius: .15rem;
}
.c-title{
    font-size: .24rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(73,137,182,1);
}
.fit-text{
    font-size: .14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height: .20rem;
}
.brief{
    font-size: .16rem;
    width:3.68rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(74,74,74,1);
    margin-top: .23rem;
    line-height:22px;
}
.line{
    width: 3.5rem;
    opacity:0.8;
    height: .01rem;
    margin: .25rem 0 0 ;
    border-top: .01rem solid rgba(232,232,232,1);
}
.line1{
    width: 100%;
    opacity:0.8;
    border-top: .01rem solid rgba(232,232,232,1);
    margin-top: 1.03rem;
}
.fit-item{
    text-align: left;
    margin-top: .25rem;
}
.fit-text{
    display: inline-block;
    vertical-align: middle;
}
.fit-logo{
    height: .14rem;
    display: inline-block;
    vertical-align: middle;
    padding: .03rem;
}
.next{
    position: relative;
    font-size: 0;
    float: right;
    margin-top: .47rem;
}
.next-text:hover {
    color:rgba(73,137,182,1);
}
.next-text{
    font-size: .14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    display: inline-block;
    vertical-align: middle;
}
.next-logo{
    vertical-align: middle;
    display: inline-block;
    margin-left: .11rem;
}
@media screen and (max-width: 400px) {
    .content{
        width: 88%;
    }
    .flow {
        margin: .18rem 0 .26rem 0;
        float: none;
    }
    .video-container{
        float: none;
    }
    .fit-item{
        margin: .21rem .26rem .21rem 0;
        display: inline-block;
    }
    .logo {
        height: .1rem;
    }
    .fit-text {
        font-size: .1rem;
    }
    .fit-logo {
        height: .13rem;
        display: inline-block;
    }
    .flow-text {
        display: none;
        font-size: .1rem;
        margin: .1rem;
    }
    .flow-text1 {
        font-size: .1rem;
        margin-left: .1rem;
    }
    .c-title {
        font-size: .16rem;
        margin-bottom: .14rem;
    }
    .brief {
        font-size: .12rem;
        line-height: .17rem;
        margin-top: .18rem;
        width: 3.31rem;
    }
    .line{
        margin: 0
    }
    .video{
        width: 3.31rem;
        height: 1.93rem;
        border-radius: .05rem;
        margin: .3rem 0 .26rem 0;
    }
    .next{
        margin: 0;
        float: none;
    }
    .next-logo{
        position: absolute;
        vertical-align: top;
        height: .11rem;
        margin-top: .02rem;
        right: 0;
    }
    .next-text{
        width: 92%;
        font-size: .12rem;
        line-height: .17rem;
    }
    .line1{
        margin-top: .22rem;
    }
}
</style>

