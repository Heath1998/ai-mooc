
<template>
    <div class="banner">
        <div class="banner-c">
            <div class="title">
                广东职业教育人工智能MOOC平台
            </div>
            <div class="search">
                <input type="text" placeholder="搜索" class="search-text">
                <img src="../../../static/img/search.png" alt="" class="search-logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'banner'
}
</script>

<style scoped>
.banner {
    width: 100%;
}
.banner-c{
    height: .9rem; 
    background-image: url(../../../static/img/Mask.png);
    position: relative;
}
.title {
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    font-size: .22rem;
    left: 2.12rem;
    text-align: center;
    position: absolute;
    top: .3rem;
}
.search {
    background:rgba(233,233,233,0.5);
    border-radius:4px;
    position: absolute;
    left: 14.01rem;
    top: .25rem;
    height: .4rem;
    line-height: .4rem;
    width: 3.07rem;
}
.search-text {
    padding-left: .25rem;
    vertical-align: middle;
    background:rgba(233,233,233,0);
    border: none;
    font-size: .12rem;
    outline: none;
}
.search-logo {
    position: absolute;
    height: .18rem;
    vertical-align: middle;
    right: .18rem;
    top: .11rem;
}

@media screen and (max-width: 750px) {
    @import url();
    .banner-c{
        height: .44rem;
        width: 100%;
    }
    .title {
        top: .15rem;
        left: .22rem;
        font-size: .1rem;
    }
    .search {
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
    .search-text {
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
    .search-logo {
        height: .14rem;
        float: left;
        position: unset;
        margin-right: .02rem;
    }
}
</style>


