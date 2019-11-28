<template>
  <div class="main-my">
    <van-cell-group>
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <template slot="title"><!-- 插槽 -->
          <!-- 已登录状态 -->
          <div class="personMsg"
          v-if="userinfo_token">
            <img class="iconImage"
              :src="user_image.login_icon" alt="">
            <div class="sex"
                 v-if="userinfo_token">
              <img :src="userInfo_sex=='1'?user_image.female:user_image.male"
                   alt="">
            </div>
            <div class="personInfo"
                 v-if="userinfo_token">
              <span>刘明</span>
              <span>手机号：15831551875</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg"
          v-if="!userinfo_token">
            <img class="iconImage"
              :src="user_image.noLogin_icon" alt="">
            <div class="personInfo"
              @click="login">
              <div>立即登录</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关-->
    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link
                >
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                        />
        <!-- <van-grid-item  /> -->
      </van-grid>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                 />
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                >
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                 />
    </van-cell-group>
    <div class="version">当前版本1.0.0</div>
    <!--路由的出口-->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 头像
      user_image: {
        login_icon: require('../images/mine/login.jpeg'),
        noLogin_icon: require('../images/mine/defaultImg.jpeg'),
        female: require('../images/mine/female.png'),
        male: require('../images/mine/male.png')
      },
      // 订单状态
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ],
      userinfo_token:'',
      userInfo_sex:"1"
    }
  },
  created() {
    this.userinfo_token = localStorage.getItem('login')
  },
  methods: {
    //跳转到登录页面
    login(){
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="scss" scoped>
  .main-my{
    width: 100%;
    background-color: #f5f5f5;
    margin-bottom: 3rem;
  }
  img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  .personMsg{
    display: flex;
    align-items: center;
  }
  .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
    .version {
    margin: 0 auto;
    text-align: center;
    font-size: 0.6rem;
    background-color: #ffffff;
    height: 2rem;
    color: grey;
    line-height: 2rem;
  }
  .van-cell__left-icon {
    color: #45c763;
    font-size: 1.2rem;
  }
  .sex {
      position: absolute;
      top: 3.5rem;
      left: 4.5rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
</style>