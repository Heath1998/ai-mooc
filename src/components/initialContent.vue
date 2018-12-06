<template>
        <div class="contentFirst">
            <div class="contentFirst-menu">
                <img src="../../static/img/home.png" alt="" >
                <p>AI课程</p>
            </div>
            <div class="contentFirst-type">
                <p class="type-textOne">课程类型一</p>
                <div class="type-sort">
                    <img src="../../static/img/sort.png" alt="">
                    <p >排序</p>
                    <select name="selectAge" id="selectSort">   
                        <option value="1">标题（A-Z）</option>   
                        <option value="2">最近更新</option>          
                    </select> 
                </div>
                <div class="video-list">
                    
                    <div class="firstvideo">
                        <img class="videoIntroduce" src="../../static/img/home_pic_1.png" alt="">
                        <div class="black">
                            <div class="videoImgContent">Building Bots with Node.js</div>
                            <div class="videoDownContent">
                                <img class="imgone unit" src="../../static/img/unit.png" alt="">
                                <p>一单元</p>
                                <img  class="imgtwo time" src="../../static/img/time.png" alt="">
                                <p>1小时45分钟</p>
                            </div>
                            <div class="videoDownContentTwo">
                                <img  class="imgone beginner" src="../../static/img/beginner.png" alt="">
                                <p>入门</p>
                            </div>
                        </div>
                    </div>
                    <div class="videoFloat">
                        <img class="videoIntroduce" src="../../static/img/home_pic_2.png" alt="">
                        <div class="black">
                            <div class="videoImgContent">Building an Intelligent Bot</div>
                            <div class="videoDownContent">
                                <img class="imgone unit" src="../../static/img/unit.png" alt="">
                                <p>四单元</p>
                                <img  class="imgtwo time" src="../../static/img/time.png" alt="">
                                <p>8小时40分钟</p>
                            </div>
                            <div class="videoDownContentTwo">
                                <img class="imgone beginner"  src="../../static/img/beginner.png" alt="">
                                <p>></p>
                                <img class="imgtwo intermediate" src="../../static/img/intermediate.png" alt="">
                                <p>入门 ></p>
                                <p>进阶</p>
                            </div>
                        </div>
                    </div>
                    <div class="videoFloat">
                        <img class="videoIntroduce" src="../../static/img/home_pic_3.jpg" alt="">
                        <div class="black">
                            <div class="videoImgContent">Building Bots with REST</div>
                            <div class="videoDownContent">
                                <img class="imgone unit" src="../../static/img/unit.png" alt="">
                                <p>一单元</p>
                                <img  class="imgtwo time" src="../../static/img/time.png" alt="">
                                <p>1小时45分钟</p>
                            </div>
                            <div class="videoDownContentTwo">
                                <img class="imgone beginner" src="../../static/img/beginner.png" alt="">
                                <p>入门</p>
                            </div>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>

.contentFirst{
    margin: 0 auto;
    padding:0 10px;
    padding-bottom: 0.47rem; 
    max-width: 1200px;
    border-bottom: 1px solid #E8E8E8;
}

.contentFirst-menu{
    margin-top: 0.66rem; 
}
.contentFirst-menu img{
    vertical-align: middle;
    width: 0.18rem;
    height: 0.18rem;
}
.contentFirst-menu p{
    height:0.22rem;
    font-size:0.16rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(155,155,155,1);
    line-height:0.22rem;
    display: inline-block;
    margin-left:0.02rem; 
    padding-bottom:0.02rem; 
    vertical-align: middle;
}
/* 排序的那行 */
.contentFirst-type{
    margin-top:0.46rem; 
    position: relative;

}
.contentFirst-type .type-textOne{
    display: inline-block;
    height:0.33rem;
    font-size:0.24rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(61,72,85,1);
    line-height:0.33rem;
}

.type-sort{
    position: absolute;
    right: 0;
    width: 5rem;
    display: inline-block;
    height: 0.33rem;
    text-align: right;
}

.type-sort img{
    vertical-align:middle;
    width: 0.23rem;
    height: 0.14rem;
}
.type-sort p{
    display: inline-block;
    font-size:0.14rem;
    margin-left:0.15rem; 
    margin-right:0.10rem; 
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(61,72,85,1);
    line-height:0.20rem;
    vertical-align:middle;
}
#selectSort{
    vertical-align:middle;
    display: inline-block;
    width: 2.55rem;
    height:0.3rem;
    background:rgba(243,242,242,1);
    border-radius:0.04rem;
    font-size:0.12rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    padding-left: 0.15rem;
}
/* 视频的列表 */
.video-list{
    margin-top: 0.44rem; 
    max-width: 1200px;
}

.black{
    position:absolute;
    top: 0;
    width:3.78rem;
    height:3.06rem;
    background:rgba(0,0,0,1);
    opacity:0.5169;
}

.black p{
    display: inline-block;
    height: 0.2rem;
    font-size: 0.14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(169,177,183,1);
    line-height:0.2rem;
    margin-left: 0.1rem;
    vertical-align:middle;
}
.black img{
    vertical-align:middle;
}
.black .videoDownContent .imgone{
    margin-left: 0.18rem;    
}
.black .videoDownContent .imgtwo{
    margin-left: 0.24rem; 
}
.black .videoDownContentTwo .imgone{
    margin-left: 0.18rem; 
}
.black .videoDownContentTwo .imgtwo{
    margin-left: 0.1rem; 
}
.video-list .videoFloat{
    position: relative;
    float: left;
    margin-left: 0.33rem;
    width:3.78rem;
    height:3.06rem;
    background:rgba(0,108,186,1);
    border-radius:0.08rem;

}

.video-list .firstvideo{
    position: relative;
    float: left;
    width:3.78rem;
    height:3.06rem;
    background:rgba(0,108,186,1);
    border-radius: 0.08rem;
}

.video-list  .videoIntroduce{
    width: 100%;
    height:1.94rem;
}

.videoImgContent{
    position: absolute;
    top: 1.41rem;
    left: 0.2rem;
    height: 0.3rem;
    font-size: 0.22rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 0.3rem;
}

 .videoDownContent{
    margin-top:2.18rem; 
    position: relative;
}
 .videoDownContentTwo{
    margin-top:0.24rem; 
}
.unit{
    width: 0.19rem;
    height: 0.19rem;
}
.time{
    width:  0.2rem;
    height:  0.2rem;
}
.beginner{
    width: 0.19rem;
    height: 0.19rem;
}
.intermediate{
    width: 0.19rem;
    height: 0.19rem;
}
</style>

