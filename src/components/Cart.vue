<template>
  <div class="Cart">
    <div class="cartHead">
      <h3>购物车</h3>
    </div>
    <div class="content">
      <div class="info">
        
        <span>
          <span class="circle"></span>
          30天无忧退货
        </span>
        
        <span>
          <span class="circle"></span>
          48小时快速退款
        </span>
        
        <span>
          <span class="circle"></span>
          满88元免邮费
        </span>
      </div>
      <div class="cartImg">
        <img src="../../static/images/cart.png" alt="">
        <p class="noCart-title">去添加点什么吧</p>
      </div>
      <div class="btn">
        <router-link to="/me" tag="p">登陆</router-link>
      </div>
    </div>
    <div class="bgColor">
      
    </div>
    <!-- 底部导航 -->
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/public/FooterNav'
export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  //引入淘宝方案
  @import '../assets/scss/base.scss';
  div.Cart {
    width: 100%;
    .cartHead {
      border: rem(1px) solid #d5dbd4;
      height: rem(125px);
      line-height: rem(125px);
      text-align: center;
      font-size: rem(50px);
      color: #333;
      background-color: #fff;
    }
    .content {
      width: 100%;
      height: 100%;
      padding-bottom: rem(180px);
      background-color: #f4f4f4; 
      div.info {

        margin:0 rem(40px);
        height: rem(100px);
        // line-height: rem(100px);
        display: flex;
        justify-content: space-between;
        align-items:center;
        font-size: rem(34px);
        color:#666;
        // background-color: pink;
        span.circle {
          display: inline-block;
          width: rem(10px);
          height: rem(10px);
          border: rem(2px) solid #c3c9c2;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      div.cartImg {
        margin: 0 rem(40px);
        padding-top: rem(214px);
        text-align: center;
        img {
          width: rem(360px);
        }
        .noCart-title {
          margin-bottom: rem(76px);
          font-size: rem(40px);
          color: #999;
        }
      }
      .btn {
        margin: 0 auto;
        width: rem(690px);
        height: rem(130px);
        line-height: rem(130px);
        border-radius: rem(10px);
        text-align: center;
        color: #fff;
        background: #b4282d;
      }
    }
  }

</style>
