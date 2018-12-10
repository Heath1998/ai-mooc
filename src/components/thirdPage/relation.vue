<template>
    <div class="relation">
        <div class="c-title">
            相关课程
        </div>
        <div class="relativeCourse">
            <div v-for="(item, index) in ralativeCourse" :key = index class="course-item">
                <div class="courseName">
                    {{item.courseName}}
                </div>
                <div class="crossLine"></div>
                <div class="courseInfo">
                    <img src="../../../static/img/time.png" class="r-logo">
                    <div class="course">
                        {{item.courseTime}}
                    </div>
                    <img src="../../../static/img/beginner.png" class="r-logo">
                    <div class="course">
                        {{item.fitPeople}}
                    </div>
                </div>
            </div> 
        </div>

    </div>
</template>

<script>
export default {
    name:  'ralation',
    data () {
        return {
            ralativeCourse: [{
                courseName: '人工智能中的线性代数2',
                courseTime: '1小时45分钟',
                fitPeople: '初学者'
            }, {
                courseName: '人工智能中的线性代数3',
                courseTime: '1小时45分钟',
                fitPeople: '初学者'
            }]
        }
    }
}
</script>

<style scoped>
.relation {
    width: 62.5%;
    margin: 0 auto;
    overflow: hidden;
}
.c-title {
    font-size: .24rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(73,137,182,1);
    margin-top: .32rem;
}
.relativeCourse {
    float: right;
    width: 9.13rem;
    margin-top: .09rem;
}
.course-item {
    background:rgba(73,137,182,0.1);
    border-radius:7px;
    margin: 0 0 .51rem 0;
    height: 1.71rem;
    position: relative;
}
.courseName {
    font-size:.22rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(0,52,89,1);
    position: absolute;
    top: .3rem;
    left: .3rem;
}
.course {
    font-size: .15rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(169,177,183,1);
}
.crossLine{
    background:rgba(0,52,89,1);
    opacity:0.2786;
    width: 100%;
    position: absolute;
    top: 1.15rem;
    border-top: .03rem solid rgba(232,232,232,1);
}
.courseInfo{
    text-align: left;
    bottom: .18rem;
    position: absolute;
}
.r-logo {
    display: inline-block;
    height: .13rem;
    vertical-align: middle;
    margin: 0 .12rem 0 .3rem;
}
.course {
    display: inline-block;
    font-size: .14rem;
    vertical-align: middle;
    margin-right: .16rem;
}
@media screen and (max-width: 400px) {
    .relation {
        padding: 0 auto;
        width: 88%;
    }
    .c-title {
        font-size: .16rem;
        margin: .2rem 0 .3rem 0;
    }
    .relativeCourse {
        width: 100%;
        border-radius: .04rem;
    }
    .course-item {
        height: 1rem;
        margin-bottom: .18rem;
    }
    .courseName {
        font-size: .12rem;
    }
    .crossLine {
        top: .66rem;
        border-top: .01rem solid rgba(232,232,232,1);
    }
    .course {
        font-size: .1rem;
    }
    .courseInfo{
        position: absolute;
        top: .77rem;
    }
    .r-logo {
        height: .13rem;
    }
}
</style>
