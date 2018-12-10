<template>
  <div class="headImg">
        <p class="headImg-title">广东职业教育人工智能MOOC平台</p>
        <div class="Search">
            <input type="text" class="Search-input" placeholder="搜索">
            <img src="../../../static/img/search.png" class="Search-img" >
         </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headImg{
    height: 0.9rem;
    background-image: url(../../../static/img/Mask.png);
    width:100%;
    background-position: center 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.headImg .headImg-title{
    position: absolute;
    top: 0.3rem;
    left: 11.04vw;
    height: 0.3rem;
    font-size: 0.22rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 0.30rem;
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
  padding-left: .25rem;
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
}

@media screen and (max-width: 750px){
  .headImg{
    height: 0.44rem;
  }
  .headImg .headImg-title{
    top: .15rem;
    left: .22;
    height: .14rem;
    font-size: .1rem;
    line-height: .14rem;
  }
  .Search {
      left: 2.46rem;
      background: none;
      top: .15rem;
      width: 1.08rem;
      height: .2rem;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
      color: rgba(255,255,255,0);
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: rgba(255,255,255,0);
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: rgba(255,255,255,0);
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: rgba(255,255,255,0);
  }
  .Search-input{
      border-bottom: 1px solid rgba(255,255,255,1);  
      border-top:0px;  
      border-left:0px;  
      border-right:0px;  
      width: .88rem;
      padding: 0;
      bottom: .11rem;
      float: right;
      position: unset;
  }
  .Search-img{
      height: .14rem;
      float: left;
      position: unset;
      margin-right: .02rem;
  }

}
</style>
