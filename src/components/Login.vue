<template>
  <div class="login">
    <!-- 页头部分 -->
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
<!-- 登陆部分 -->
    <div class="loginPart">
      <div class="loginCon">
        <form action="">
          <div class="account">
            <input type="text" name="username" placeholder="邮箱帐号">
          </div>
          <div class="mima">
            <input type="password" placeholder="密码">
          </div>
          <button class="btn" type="submit">登陆</button>
          <div class="enroll">
            <p class="zhuce">注册账号</p>
            <p class="forget">忘记密码</p>
          </div>
        
        </form>
        <router-link to="/me" tag="div" class="otherLogin">其他方式登录</router-link>
      </div>
    </div>

    
  
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* 引入公共淘宝布局 */
  @import '../assets/scss/base.scss';
  div.login {
    width: 100%;
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

    //登陆部分
    div.loginPart {
      margin-top: rem(145px);

      .loginCon {
        width: rem(960px);
        margin: 0 auto;
        div.account {
          width: 100%;
          border-bottom: rem(1px) solid #d6d6d6;
          height: rem(140px);
          line-height: rem(140px);
          color: #333;
        }

        div.mima {
          margin-bottom: rem(85px);
          width: 100%;
          border-bottom: rem(1px) solid #d6d6d6;
          height: rem(140px);
          line-height: rem(140px);
          color: #333;
        }
        .btn {
          margin-bottom: rem(58px);
          width: 100%;
          height: rem(138px);
          border-radius: rem(10px);
          color: #cb7a7a;
          background-color: #af2827;

        }
        div.enroll {
          margin-bottom: rem(188px);
          display: flex;
          justify-content: space-between;
          font-size: rem(40px);
          color: #747d75;
        }

        div.otherLogin {
          border: rem(2px) solid #B4282D;
          height: rem(135px);
          line-height: rem(135px);
          text-align: center;
          border-radius: rem(10px);
          font-size: rem(40px);
          color: #B4282D;
        }
      }

    }
  }

</style>
