<template>
  <div class="login-main">
    <div class="content">
      <van-tabs route>
        <van-tab title="登录" replace to='/login/dl'></van-tab>
        <van-tab title="注册" replace to='/login/zc'></van-tab>
      </van-tabs>
      <div class="tab">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .login-main{
    .content{
      padding: 0 20px;
      .tab{
        margin: 10px 20px
      }
    }
  }
</style>