<template>
  <div class="Type">
    <div class="topSearch">
      <div class="searchBox">
        <span>搜索商品, 共9922款好物</span>
      </div>
    </div>
    <div class="typeCon">
      <div class="leftType">
        <ul>
          <li v-for="(type,index) in types">{{type}}</li>
        </ul>
      </div>
      <div class="rightType">
        <div class="rightInfo">
          <div class="rightBanner">
          </div>
          <div class="content">
            <div class="hdText">
              <span>居家分类</span>
            </div>
            <ul>
              <li>
                <div class="typeImg">
                  <img src="../../static/images/type/1.png" alt="">
                </div>
                <p class="title">床品件套</p>
              </li>
            </ul>
          </div>
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
  name: 'Type',
  data () {
    return {
      types: ['推荐区','春季专区','个性专区','居家','配件','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
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
  div.Type {
    width: 100%;
    margin-bottom: rem(100px);
    div.topSearch {
      display: flex;
      align-items:center;
      border-bottom: rem(2px) solid #d7ddd6;
      width: 100%;
      height: rem(125px);
      // background-color: pink;
      .searchBox {
        width: 100%;
        margin: 0 rem(40px);
        height: rem(80px);
        line-height: rem(80px);
        border-radius: rem(10px);
        text-align: center;
        color: #666;
        background-color: #ededed;
        span {
          font-size: rem(40px);
        }
      }
    }
  }

</style>
