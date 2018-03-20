<template>
  <div class="me">
    <header class="loginTop">
      <div class="topCon">
        <router-link to="/" tag="span" class="index"></router-link>
        <router-link to="/" tag="span" class="topLogo"></router-link>
        <div class="seach-cart">
          <router-link to="/" tag="span" class="search"></router-link>
          <router-link to="/cart" tag="span" class="cart"></router-link>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="loginLogo">
        <img src="../../static/images/loginlogo.png" alt="">
      </div>
      <div class="btnWraper">
        <router-link to="/login" tag="p">网易邮箱帐号登录</router-link>
        
      </div>
      <div class="logStyle">
        <div class="Wx">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="Qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="Wb">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    
    <!-- 底部导航 -->
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/public/FooterNav'
export default {
  name: 'Me',
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
  /* 引入公共淘宝布局 */
  @import '../assets/scss/base.scss'; 

  div.me {
    width: 100%;
    background-color: #fff;
    header.loginTop {
      width: 100%;
      border-bottom: rem(1px) solid #d6d6d6;
      background-color: #fafafa;
      .topCon {
        display: flex;
        justify-content: space-between;
        margin: 0 rem(36px);
        height: rem(125px);
        line-height: rem(125px);
        .seach-cart {
          font-size: 0;
        }
        span {
          display: inline-block;
          height: rem(72px);
        }
        // 精灵图 172x398
        // 72x72
        // 72x72
        .index {
          margin-top: rem(27px);
          width: rem(72px);
          background: url(../../static/images/jjt.png) no-repeat;
          background-position: rem(4px) rem(-90px);
          background-size: rem(240px) rem(520px);

        }
        .topLogo {
          margin-top: rem(27px);
          width: rem(232px);
          background: url(../../static/images/jjt.png) no-repeat;
          background-position: 0 rem(-166px);
          background-size: rem(240px) rem(520px);
        }
        .search {
          margin-top: rem(27px);
          margin-right: rem(50px);
          width: rem(72px);
          background: url(../../static/images/jjt.png) no-repeat;
          background-position: rem(-10px) rem(-440px);
          background-size: rem(240px) rem(520px);
        }
        .cart {
          margin-top: rem(27px);
          width: rem(78px);
          background: url(../../static/images/jjt.png) no-repeat;
          background-position: rem(-6px) rem(-7px);
          background-size: rem(240px) rem(520px);
        }
      }
    }

    // 内容区
    div.content {
      margin-top: rem(248px);
      width: 100%;
      height: rem(706px);
      text-align: center;
      // background: pink;
      .loginLogo {
        margin-bottom: rem(174px);
        img {
          width:rem(390px);
        }
      }
      .btnWraper {
        margin: 0 auto rem(194px);
        width: rem(966px);
        height: rem(140px);
        line-height: rem(140px);
        border-radius: rem(10px);
        font-size: rem(38px);
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        color: #fff;
        background-color: #B4282D;
      }
      .logStyle {
        display: flex;
        justify-content: center;
        .Wx,.Qq,.Wb {
          width: rem(327px);
          height: rem(58px);
          line-height: rem(58px);
          font-size: rem(40px);
          color: #7F7F7F;
        }
        .Qq {
          border-left: rem(1px) solid #979797;
          border-right: rem(1px) solid #979797;
        }
        .icon-weixin {
          display: inline-block;
          // margin-top: rem(10px);
          font-size: rem(60px);
          vertical-align: top;
          color: #4fb040;
         }
        .icon-qq {
          display: inline-block;
          color: #2d99d5;
         }

        .icon-weibo {
          display: inline-block;
          color: #d82d2c;
         }

      }
    }

  }

</style>
