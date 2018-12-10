<template>
  <div class="secondPageContent">
      <div class="content-nav">
            <img class="imgone" src="../../../static/img/home.png" alt="">
            <p class="p-one">AI课程</p>
            <img class="imgtwo" src="../../../static/img/next.png" alt="">
            <img class="imgthree" src="../../../static/img/series.png" alt="">
            <p class="p-two">Building an Intelligent Bot</p>
      </div>
      <div class="content-main">
            <div class="content-left">
                <wbc-left></wbc-left>
            </div>
            <div class="content-right">
                <wbc-right></wbc-right>
            </div>
            <div class="clear-float"></div>
      </div>
  </div>
</template>

<script>
import contentLeft from "./contentLeft"
import contentRight from "./contentRight"

export default {
    components:{
        "wbc-left":contentLeft,
        "wbc-right":contentRight
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secondPageContent{
    width: 62.5%;
    margin: 0 auto;
    overflow: hidden;
    max-width: 1200px;
}
.secondPageContent .content-nav{
    margin-top: 0.42rem;
    margin-bottom: 0.52rem;  
}
.secondPageContent .content-nav .imgone{
    width: 0.18rem;
    vertical-align: middle;
}
.secondPageContent .content-nav .p-one{
    display: inline-block;
    margin-left: 0.1rem;
    font-size:0.16rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(155,155,155,1);
    line-height:0.22rem; 
    vertical-align: middle;
}

.secondPageContent .content-nav .imgtwo{
    margin-left: 0.15rem;
    height: 0.07rem;
    width: 0.04rem;
    vertical-align: middle;
}
.secondPageContent .content-nav .imgthree{
    margin-left: 0.15rem;
    height: 0.19rem;
    width: 0.19rem;
    vertical-align: middle;    
}
.secondPageContent .content-nav .p-two{
    vertical-align: middle; 
    display: inline-block;
    margin-left: 0.08rem;
    font-size:0.16rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(155,155,155,1);
    line-height:0.22rem; 
}
/* 下面的左右内容 */
.content-main .content-left{
    float: left;
    width: 4.65rem;
}
.content-main .content-right{
    float: right;
    width: 7.3rem;
}
.content-main .clear-float{
    clear:both;
}
@media screen and (max-width: 750px) {
    .secondPageContent {
        width: 88%
    }
    .secondPageContent .content-nav{
        margin-top: 0.18rem;
        margin-bottom: 0.26rem;  
    }
    .secondPageContent .content-nav .imgone{
        width: 0.1rem;
    }
    .secondPageContent .content-nav .p-one{
        margin-left: 0.06rem;
        font-size:0.1rem;
        line-height:0.14rem; 
    }

    .secondPageContent .content-nav .imgtwo{
        margin-left: 0.1rem;
        height: 0.05rem;
        width: 0.03rem;
    }
    .secondPageContent .content-nav .imgthree{
        margin-left: 0.1rem;
        height: 0.1rem;
        width: 0.1rem;
    }
    .secondPageContent .content-nav .p-two{
        margin-left: 0.06rem;
        font-size:0.1rem;
        line-height:0.14rem; 
    }
    /* 下面的左右内容 */
    .content-main .content-left{
        float: none;
        width: 100%;
    }
    .content-main .content-right{
        float: none;
        width: 100%;
    }
}
</style>
