<template>
  <div class="footerNav">
    <!-- 底部导航 -->
    <div class="footerNav">
      <ul>
        <router-link to="/" tag="li">
          <i class="iconfontyyy icon-xxx"></i>
          <p>首页</p>
        </router-link>
         <router-link to="/type" tag="li">
          <p>分类</p>
        </router-link>
         <router-link to="/cart" tag="li">
          <p>购物车</p>
        </router-link>
         <router-link to="/me" tag="li">
          <p>我的</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/base.scss';

  div.footerNav {
    position: fixed;
    z-index: 999;
    border-top: 1px solid #d9d9d9;
    left:0;
    bottom: 0;
    width: 100%;
    height: rem(150px);
    background-color: #fafafa;
    ul {
      display: flex;
      /*justify-content: space-between;*/
      width: 100%;

      li {
        width: 25%;
        text-align: center;
        line-height: rem(150px);
        color: #999;
        background-color: #fafafa;
      } 
    }
  }
</style>
