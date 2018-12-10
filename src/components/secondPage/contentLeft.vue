<template>
    <div>
        <div class="left-Introduce">Building an Intelligent Bot</div>
        <div class="left-iconText"> 
            <div class="iconText-contain">
                <img class="iconText-img" src="../../../static/img/unit.png" alt="">
                <p class="iconText-text">四单元</p>
            </div>
            <div class="iconText-contain">
                <img class="iconText-img" src="../../../static/img/time.png" alt="">
                <p class="iconText-text">5小时40分钟</p>
            </div>
            <div class="iconText-contain">
                <img class="iconText-img" src="../../../static/img/beginner.png" alt="">
                <p class="iconText-text">初学者</p>
            </div>
        </div>
        <div class="downLine"></div>
        <div class="last-content">本课程首先介绍了人工智能的定义，讲解了生成测试 法，并详细谈到了给事物命名的重要性。介绍了人工 智能发展的简史，讲到了本课程中将会接触到的各种 人工智能程序。</div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.downLine{
    border-bottom: 1px solid rgba(232,232,232,0.8);
    width: 3.5rem;
}
.left-Introduce{
    height:0.33rem;
    font-size: 0.24rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(73,137,182,1);
    line-height: 0.33rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgba(232,232,232,0.8);
    width: 3.5rem;
}
.left-iconText{
    padding-bottom: 0.25rem;
}
.left-iconText  .iconText-contain{
    margin-top: 0.25rem;
}
.left-iconText  .iconText-contain .iconText-img{
    height: 0.2rem;
    width: 0.2rem;
    vertical-align: middle;
}
.left-iconText  .iconText-contain .iconText-text{
    margin-left: 0.12rem; 
    display: inline-block;
    vertical-align: middle;
    height: 0.2rem;
    font-size: 0.14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height: 0.20rem;
}
.last-content{
    margin-top: 0.23rem;
    width:3.68rem;
    font-size: 0.16rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(74,74,74,1);
    line-height: 0.35rem;
}

@media screen and (max-width: 750px) {
    .downLine{
        border-bottom: 1px solid rgba(232,232,232,0.8);
    }
    .left-Introduce{
        height:  .16rem;
        font-size: 0.16rem;
        line-height: 0.22rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(232,232,232,0.8);
    }
    .left-iconText{
        padding-bottom: 0.25rem;
        margin-top: 0.25rem;
    }
    .left-iconText  .iconText-contain{
        display: inline-block;
        margin-right: .32rem; 
        margin-top: 0rem;
    }
    .left-iconText  .iconText-contain .iconText-img{
        height: .13rem;
        width: .13rem;
        vertical-align: top;
    }
    .left-iconText  .iconText-contain .iconText-text{
        margin-left: 0.08rem; 
        display: inline-block;
        vertical-align: middle;
        height: 0.14rem;
        font-size: 0.1rem;
        color:rgba(169,177,183,1);
        line-height: 0.14rem;
    }
    .last-content{
        margin-top: 0.18rem;
        width: 100%;
        font-size: 0.12rem;
        color:rgba(74,74,74,1);
        line-height: 0.17rem;
    }
}

</style>
