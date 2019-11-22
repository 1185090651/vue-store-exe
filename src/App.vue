<template>
  <div id="app">
    <van-nav-bar title="商城" left-text="返回" left-arrow class="header">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/sorts" icon="coupon-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  // .header{
    
  // }
  .main{
    flex:1;
    overflow: auto;
    // background-color: #ccc;
  }
  .footer{
      .van-tabbar{
        height: 60px;
      }
    }
  
}
</style>
