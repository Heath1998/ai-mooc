<template>
        <div class="contentFirst">
            <div class="contentFirst-menu">
                <img src="../../../static/img/home.png" alt="" >
                <div>AI课程</div>
            </div>
            <div class="contentFirst-type">
                <p class="type-textOne">课程类型一</p>
                <div class="type-sort showPC">
                    <img src="../../../static/img/sort.png" alt="">
                    <p >排序</p>
                    <select name="selectSort" id="selectPC">   
                        <option value="1">标题（A-Z）</option>   
                        <option value="2">最近更新</option>          
                    </select> 
                </div>
                <div class="showMobile type-sortMobile">
                    <div class="coverSelect" ></div>
                    
                    <select name="selectSort" id="selectMobile">   
                        <option value="1">标题（A-Z）</option>   
                        <option value="2">最近更新</option>         
                    </select>   
                    <img  class="sortMobile-icon" src="../../../static/img/sort.png" alt="">             
                    <div class="sortMobile-text">排序</div>   
                </div>
                <div class="video-list">
                    <div v-bind:class="[index%3==0 ? 'firstvideo' : 'videoFloat']"  
                    v-for="(item, index) of videoList" :key="index">
                        <img class="videoIntroduce" :src="item.videoIntroduceImg" alt="">
                        <div class="black">
                            <div class="videoImgContent">{{item.videoImgContent}}</div>
                            <div class="videoDownContent">
                                <img class="imgone unit" :src="item.imgIconFirst" alt="">
                                <p>{{item.imgIconFirstText}}</p>
                                <img  class="imgtwo time" :src="item.imgIconsecond" alt="">
                                <p>{{item.imgIconSecondText}}</p>
                            </div>
                            <div class="videoDownContentTwo">
                                <img class="imgone beginner"  :src="item.downImgIconFirst" alt="">
                                <p>{{item.downImgIconFirstText}}</p>
                                <img v-show="item.downImgIconSecond" class="imgtwo intermediate" :src="item.downImgIconSecond" alt="">
                                <p>{{item.downImgIconSecondText}}</p>
                                <p>{{item.downImgIconTextLast}}</p>
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
    data(){
        return{
            videoList:[
                {
                   videoIntroduceImg:"../../../static/img/home_pic_1.png",
                   videoImgContent:"Building Bots with Node.js",
                   imgIconFirst:"../../../static/img/unit.png",
                   imgIconFirstText: "一单元",
                   imgIconsecond:"../../../static/img/time.png",
                   imgIconSecondText: "1小时45分钟",
                   downImgIconFirst:"../../../static/img/beginner.png",
                   downImgIconFirstText:"入门"
                },
                {
                   videoIntroduceImg:"../../../static/img/home_pic_2.png",
                   videoImgContent:"Building an Intelligent Bot",
                   imgIconFirst:"../../../static/img/unit.png",
                   imgIconFirstText: "四单元",
                   imgIconsecond:"../../../static/img/time.png",
                   imgIconSecondText: "8小时40分钟",
                   downImgIconFirst:"../../../static/img/beginner.png",
                   downImgIconFirstText:">",
                   downImgIconSecond:"../../../static/img/intermediate.png",
                   downImgIconSecondText:"入门 >",
                   downImgIconTextLast:"进阶"
                },
                {
                   videoIntroduceImg:"../../../static/img/home_pic_3.jpg",
                   videoImgContent:"Building an Intelligent Bot",
                   imgIconFirst:"../../../static/img/unit.png",
                   imgIconFirstText: "一单元",
                   imgIconsecond:"../../../static/img/time.png",
                   imgIconSecondText: "1小时45分钟",
                   downImgIconFirst:"../../../static/img/beginner.png",
                   downImgIconFirstText:"入门"
                }
            ]
        }
    },
    methods:{
        jumpVideo() {
            this.$router.push({path: '/course'});
        },
    },
    mounted(){
        
    }
}
</script>


<style scoped>

.contentFirst{
    width: 63%;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 0.47rem; 
    max-width: 1200px;
    border-bottom: 1px solid #E8E8E8;
}

.contentFirst-menu{
    margin-top: 0.66rem; 
}
.contentFirst-menu img{
    display: inline-block;
    vertical-align: middle;
    width: 0.18rem;
    height: 0.18rem;
}
.contentFirst-menu div{
    height:0.22rem;
    font-size:0.16rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(155,155,155,1);
    line-height:0.22rem;
    display: inline-block;
    margin-left:0.02rem; 
    vertical-align: middle;
}
/* 排序的那行 */
.contentFirst-type{
    margin-top:0.46rem; 
    position: relative;

}
.showMobile{
    display: none;
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
#selectPC{
    background:rgba(249,248,248,1);
    border-radius:0.04rem 0.04rem 0rem 0rem;
    border: 0.01rem solid rgba(73,137,182,1);
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
    cursor: pointer;
    position: relative;
    float: left;
    margin-left: 0.33rem;
    width:3.78rem;
    height:3.06rem;
    background:rgba(0,108,186,1);
    border-radius:0.08rem;
}

.video-list .firstvideo{
    cursor: pointer;
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

@media screen and (max-width: 750px){
    .contentFirst{
        width: 88%;
        padding-bottom: .28rem;
        border-bottom: 0px solid #E8E8E8;
    }
    .contentFirst-menu{
        margin-top: .35rem; 
    }
    .contentFirst-menu img{
        vertical-align: top;
        width: .1rem;
        height: .1rem;
    }
    .contentFirst-menu div{
        height: .14rem;
        font-size: .1rem;
        color:rgba(73,137,182,1);   
        line-height: .14rem;
        margin-left: .06rem; 
        vertical-align: middle;
    }
    /* 排序的那行 */
    .contentFirst-type{
        margin-top:0.15rem; 
        position: relative;

    }
    .contentFirst-type .type-textOne{
        height: .17rem;
        font-size: .12rem;
        color:rgba(61,72,85,1);
        line-height: .17rem;
    }
    .showPC{
        display: none;
    }
    .showMobile{
        display: block;
    }
    .type-sortMobile{
        margin-top: .12rem; 
        width: .96rem;
        height: .22rem;
        position: relative;
    }
    .coverSelect{
        position: absolute;
        top: 0;
        left: 0;
        width: .96rem;
        height: .22rem;
        background:rgba(243,242,242,1);
    }
    #selectMobile{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        border: 0.00rem solid rgba(73,137,182,1);
        width: .96rem;
        height: .22rem;
        background:rgba(243,242,242,1);
        color: rgba(243,242,242,1);
        opacity: 0;
        border-radius: .04rem;
        outline:none;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        -ms-appearance:none;
    }
    .sortMobile-icon{
        position: absolute;
        left: .33rem;
        top: .08rem;
        width: .11rem;
        height: .07rem;
    }
    .sortMobile-text{
        position: absolute;
        left: .47rem;
        top: .06rem;
        height: .11rem;
        font-size: .08rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(61,72,85,1);
        line-height: .11rem;      
    }

    /* 图片排序 */
    .video-list{
        margin-top: .2rem;
    }
    .video-list .videoFloat{
        position: relative;
        float: left;
        margin-left: 0rem;
        width: 3.3rem;
        height: 1.98rem;
        background:rgba(0,108,186,1);
        border-radius: .06rem;
        margin-bottom: .12rem;
    }

    .video-list .firstvideo{
        position: relative;
        float: left;
        width:3.3rem;
        height: 1.98rem;
        background:rgba(0,108,186,1);
        border-radius: 0.06rem;
        margin-bottom: .12rem;
    }

    .video-list  .videoIntroduce{
        width: 100%;
        height:1.29rem;
    }

    .videoImgContent{
        position: absolute;
        top: .94rem;
        left: 0.22rem;
        height: 0.2rem;
        font-size: .14rem;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height: 0.2rem;
    }
/* black那层 */
    .black{
        width:3.3rem;
        height:1.98rem;
    }

    .black p{
        height: .14rem;
        font-size: .1rem;
        line-height: .14rem;
        margin-left: 0.08rem;
    }
    .black img{
        vertical-align: top;
    }
    .black .videoDownContent .imgone{
        margin-left: 0.22rem;    
        line-height: .14rem;
    }
    .black .videoDownContent .imgtwo{
        line-height: .14rem;
        margin-left: 0.27rem; 
    }
    .black .videoDownContentTwo .imgone{
        margin-left: 0.22rem; 
        line-height: .14rem;
    }
    .black .videoDownContentTwo .imgtwo{
        margin-left: 0.08rem; 
        line-height: .14rem;
    }
    /* 底层div */
    .videoDownContent{
        margin-top: 1.41rem; 
        position: relative;
    }
    .videoDownContentTwo{
        margin-top: .16rem; 
    }
    .unit{
        width: 0.13rem;
        height: 0.13rem;
    }
    .time{
        width:  0.13rem;
        height:  0.13rem;
    }
    .beginner{
        width: 0.13rem;
        height: 0.13rem;
    }
    .intermediate{
        width: 0.13rem;
        height: 0.13rem;
    }
}

</style>

