<template>
  <div >
    <div class="headImgBox">
      <div class="Search">
        <input type="text" class="Search-input" v-bind:placeholder="Search">
        <img src="../../../static/img/search.png" class="Search-img" >
      </div>
      <div class="textTitle">广东职业教育人工智能MOOC平台</div>
      <div class="centreImg">
        <img src="../../../static/img/ai.png">
      </div>
      <div class="textCourse">AI课程</div>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      Search: "搜索"
    }
  },
  mounted(){
    if(document.documentElement.clientWidth > 750)
      this.Search = "搜索";
    else
      this.Search = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headImgBox{
  height:5.43rem;
  background-image: url(../../../static/img/banner.png);
  width:100%;
  background-position: center 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.Search{
    background:rgba(233,233,233,0.5);
    border-radius:4px;
    position: absolute;
    left: 14.01rem;
    top: .25rem;
    height: .4rem;
    line-height: .4rem;
    width: 3.07rem;
}
.Search-input{
  padding:0 .45rem 0 .25rem;
  width: 2.37rem;
  line-height: .4rem;
  vertical-align: middle;
  background: rgba(233,233,233,0);
  border: none;
  font-size: .12rem;
  outline: none;
}
.Search-img{
  position: absolute;
  right: 0.18rem;
  top: 0.11rem;
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

@media screen and (max-width: 750px){
  .headImgBox{
    height: 2.33rem;
  }
  .textTitle{
    position: absolute;
    font-size: .16rem;
    top: 0.5rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: .22rem;
    height: .22rem;
  }
  .centreImg{
    position: absolute;
    top: .86rem;
  }
  .centreImg img{
    width: .88rem;
    height: .72rem;
  }
  .textCourse{
    display: none;
  }
  .Search{
    position: absolute;
    top: 1.72rem;
    left: 1.08rem;
    right: 1.07rem;
    width: 1.6rem;
    height:0.24rem;
  }
  .Search-input{
    border-radius:0.04rem;
    opacity:0.4042;
    line-height: 0.24rem;
    padding: 0 .3rem 0 .1rem; 
    width: 1.2rem;
    vertical-align: top;
  }
  .Search-img{
    position: absolute;
    left: 1.40rem;
    top: .07rem;
    height: .1rem;
    width: .1rem;
  }

  
}
</style>
