<template>
    <div class="right-outter">
        <div class="right-contain" v-for="(item, index) of introduceList" :key="index">
            <div class="bigTitle">{{item.title}}</div>
            <div class="right-iconText">
                <img class="imgOne" src="../../../static/img/time.png" alt="">
                <p class="pOne">{{item.timeText}}</p>
                <img class="imgTwo" src="../../../static/img/beginner.png" alt="">
                <p class="pTwo">{{item.gradeText}}</p>
            </div>
        </div>
        <!-- <div class="right-contain">
            <div class="bigTitle">人工智能中的线性代数</div>
            <div class="right-iconText">
                <img class="imgOne" src="../../../static/img/time.png" alt="">
                <p class="pOne">1小时45分钟</p>
                <img class="imgTwo" src="../../../static/img/beginner.png" alt="">
                <p class="pTwo">初学者</p>
            </div>
        </div>
        <div class="right-contain">
            <div class="bigTitle">掌握 Python 关键工具, 处理、分析、可视化数据。</div>
            <div class="right-iconText">
                <img class="imgOne" src="../../../static/img/time.png" alt="">
                <p class="pOne">1小时45分钟</p>
                <img class="imgTwo" src="../../../static/img/beginner.png" alt="">
                <p class="pTwo">初学者</p>
            </div>
        </div>
        <div class="right-contain">
            <div class="bigTitle">人工智能中的线性代数</div>
            <div class="right-iconText">
                <img class="imgOne" src="../../../static/img/time.png" alt="">
                <p class="pOne">1小时45分钟</p>
                <img class="imgTwo" src="../../../static/img/beginner.png" alt="">
                <p class="pTwo">初学者</p>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            introduceList:[
                {
                    title: "掌握 Python 关键工具, 处理、分析、可视化数据。",
                    timeText: "1小时45分钟",
                    gradeText: "初学者"
                },
                {
                    title: "人工智能中的线性代数",
                    timeText: "1小时45分钟",
                    gradeText: "初学者"      
                },
                {
                    title: "掌握 Python 关键工具, 处理、分析、可视化数据。",
                    timeText: "1小时45分钟",
                    gradeText: "初学者"
                },
                {
                    title: "人工智能中的线性代数",
                    timeText: "1小时45分钟",
                    gradeText: "初学者"      
                }
            ]
        }
    }
}
</script>


<style scoped>
.right-outter{
    margin-bottom: 3.05rem; 
}
.right-contain{
    margin-bottom: 0.35rem;
    width: 7.3rem;
    height: 1.71rem;
    background:rgba(73,137,182,0.1);
    border-radius: 0.07rem;
    overflow:hidden;
}
.right-contain .bigTitle{
    margin-top: 0.3rem; 
    padding-left: 0.3rem; 
    padding-bottom: 0.55rem;
    border-bottom: 1px solid rgba(0,52,89,0.2786); 
    height:0.3rem;
    font-size:0.22rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(0,52,89,1);
    line-height:0.3rem;
}
.right-iconText{
    margin-top: 0.18rem;
}
.right-iconText .imgOne{
    vertical-align: middle;
    margin-left: 0.3rem;
    width: 0.18rem;
    height: 0.18rem;
}
.right-iconText .pOne{
    vertical-align: middle;
    display: inline-block;
    height:0.2rem;
    font-size: 0.14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(169,177,183,1);
    line-height: 0.2rem;
    margin-left: 0.12rem;
}
.right-iconText .imgTwo{
    vertical-align: middle;
    margin-left: 0.48rem;
    width: 0.18rem;
    height: 0.18rem;
}
.right-iconText .pTwo{
    vertical-align: middle;
    display: inline-block;
    height:0.2rem;
    font-size: 0.14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(169,177,183,1);
    line-height: 0.2rem;
    margin-left: 0.12rem;
}

@media screen and (max-width: 750px) {
    .right-outter{
        margin-bottom: .37rem; 
        margin-top: .3rem; 
    }
    .right-contain{
        margin-bottom: 0.18rem;
        width: 100%;
        height: 1rem;
        background:rgba(237,243,248,1);
        border-radius: 0.04rem;
        overflow:hidden;
    }
    .right-contain .bigTitle{
        margin-top: .19rem; 
        padding-left: .22rem; 
        padding-bottom: .3rem;
        border-bottom: 1px solid rgba(0,52,89,0.2786); 
        height: .17rem;
        font-size: .12rem;
        color:rgba(0,52,89,1);
        line-height: .17rem;
    }
    .right-iconText{
        margin-top: 0.1rem;
    }
    .right-iconText .imgOne{
        vertical-align: top;
        margin-left: .22rem;
        width: 0.13rem;
        height: 0.13rem;
    }
    .right-iconText .pOne{
        height: .14rem;
        font-size: 0.1rem;
        color:rgba(169,177,183,1);
        line-height: .14rem;
        margin-left: .08rem;
    }
    .right-iconText .imgTwo{
        vertical-align: top;
        margin-left: .26rem;
        width: .13rem;
        height: .13rem;
    }
    .right-iconText .pTwo{
        height: .14rem;
        font-size: .1rem;
        line-height: .14rem;
        margin-left: .08rem;
    }
}
</style>
