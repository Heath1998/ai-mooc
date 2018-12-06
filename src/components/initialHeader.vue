<template>
  <div >
    <div class="headImgBox">
      <div class="Search">
        <input type="text" class="Search-input" placeholder="搜索">
        <img src="../../static/img/search.png" class="Search-img" >
      </div>
      <div class="textTitle">广东职业教育人工智能MOOC平台</div>
      <div class="centreImg">
        <img src="../../static/img/ai.png">
      </div>
      <div class="textCourse">AI课程</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headImgBox{
  height:5.43rem;
  background-image: url(../../static/img/banner.png);
  width:100%;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.Search{
  position: absolute;
  top: 0.25rem;
  right:11vw;
}
.Search-input{
  width:3.07rem;
  padding-left: 1.3vw;
  font-size: 0.12rem;
  height:0.4rem;
  background:rgba(233,233,233,1);
  border-radius:0.04rem;
  opacity:0.49939999999999996;
}
.Search-img{
  position: relative;
  right: 0.36rem;
  top:0.04rem;
  height: 0.18rem;
  width: 0.18rem;
}

.textTitle{
  position: absolute;
  top: 1.06rem;
  width: 100%;
  text-align: center;
  height: 0.65rem;
  font-size: 0.46rem;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:0.65rem;
}
 
.centreImg{
  position: absolute;
  top: 2.46rem;
  text-align: center;
  width: 100%;
}

.centreImg img{
  width: 2.07rem;
  height: 1.69rem;
}

.textCourse{
  position:absolute;
  top: 4.5rem;
  text-align: center;
  width: 100%;
  height:0.33rem;
  font-size:0.24rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:0.33rem;
  letter-spacing:1px;
}

</style>
