<template>
  <div class="jujia">
    <!-- 顶部banner -->
    <div class="topBanner">
      <div class="tbanner"></div>
    </div>
    <div class="bedGroup">
        <div class="groupHeader">
          <h3 class="title">床品套件</h3>
          <p class="dir">MUJI等品牌制造商出品</p>
        </div>
        <ul class="groupShops">
          <li class="shopList" v-for="groupShop in groupShops">
            <div class="image">
              <img :src='groupShop.src' alt="">
            </div>
            <div class="shopInfo">
              <p class="info">{{groupShop.title}}</p>
              <p class="shopname">{{groupShop.name}}</p>
              <p class="price">￥{{groupShop.price}}</p>
            </div>
          </li>
        </ul>
    </div>
    
    <!-- 底部导航 -->
    <footerNav></footerNav>
    <!-- 结束标签 -->
  </div>
</template>

<script>
import footerNav from '@/components/public/FooterNav'
export default {
  name: 'Jujia',
  data () {
    return {
      groupShops: [
        {id:1,title:'狗年定制款，高支高密棉',name:'趣味萌宠定制款四件套',price:359,src:'../../static/images/jujia/badgroup/1.jpg'},
        {id:2,title:'天然竹醌成分，抑菌爽滑健康睡眠',name:'竹语初棉撞色四件套',price:429,src:'../../static/images/jujia/badgroup/2.jpg'},
        {id:3,title:'设计师合作，浪漫色彩',name:'清新趣粉全棉四件套 条纹绿格',price:399,src:'../../static/images/jujia/badgroup/3.jpg'},
        {id:4,title:'精梳长绒棉,设计师系列',name:'清新趣粉全棉四件套 青粉拼接',price:399,src:'../../static/images/jujia/badgroup/4.jpg'},
        {id:5,title:'治愈少女粉，柔软浪漫',name:'简约知性全棉四件套 胭脂粉',price:359,src:'../../static/images/jujia/badgroup/5.jpg'},
        {id:6,title:'素净优雅灰，简约格纹',name:'简约知性全棉四件套 素雅灰',price:359,src:'../../static/images/jujia/badgroup/6.jpg'},
        {id:7,title:'超柔针织棉，亲肤可裸睡',name:'全棉针织条纹四件套 新款',price:219,src:'../../static/images/jujia/badgroup/7.jpg'},
        {id:8,title:'100%针织棉，裸睡0束缚',name:'全棉针织纯色四件套',price:299,src:'../../static/images/jujia/badgroup/8.jpg'},
        {id:9,title:'水洗做旧感，纯棉透气',name:'日式色织水洗棉格纹四件套 新款',price:229,src:'../../static/images/jujia/badgroup/9.jpg'},
        {id:10,title:'纯棉水洗感，柔软吸汗',name:'日式色织水洗棉条纹四件套',price:299,src:'../../static/images/jujia/badgroup/10.jpg'},
        {id:11,title:'几何线条，北欧简约风',name:'几何印花AB面全棉四件套',price:359,src:'../../static/images/jujia/badgroup/11.jpg'},
        {id:12,title:'几何撞色，厚实升温',name:'加厚夹棉保暖四件套',price:399,src:'../../static/images/jujia/badgroup/12.jpg'},
        {id:1,title:'狗年定制款，高支高密棉',name:'趣味萌宠定制款四件套',price:359,src:'../../static/images/jujia/badgroup/1.jpg'},
        {id:2,title:'天然竹醌成分，抑菌爽滑健康睡眠',name:'竹语初棉撞色四件套',price:429,src:'../../static/images/jujia/badgroup/2.jpg'},
        {id:3,title:'设计师合作，浪漫色彩',name:'清新趣粉全棉四件套 条纹绿格',price:399,src:'../../static/images/jujia/badgroup/3.jpg'},
        {id:4,title:'精梳长绒棉,设计师系列',name:'清新趣粉全棉四件套 青粉拼接',price:399,src:'../../static/images/jujia/badgroup/4.jpg'},
        {id:5,title:'治愈少女粉，柔软浪漫',name:'简约知性全棉四件套 胭脂粉',price:359,src:'../../static/images/jujia/badgroup/5.jpg'},
        {id:6,title:'素净优雅灰，简约格纹',name:'简约知性全棉四件套 素雅灰',price:359,src:'../../static/images/jujia/badgroup/6.jpg'},
        {id:7,title:'超柔针织棉，亲肤可裸睡',name:'全棉针织条纹四件套 新款',price:219,src:'../../static/images/jujia/badgroup/7.jpg'},
        {id:8,title:'100%针织棉，裸睡0束缚',name:'全棉针织纯色四件套',price:299,src:'../../static/images/jujia/badgroup/8.jpg'},
        {id:9,title:'水洗做旧感，纯棉透气',name:'日式色织水洗棉格纹四件套 新款',price:229,src:'../../static/images/jujia/badgroup/9.jpg'},
        {id:10,title:'纯棉水洗感，柔软吸汗',name:'日式色织水洗棉条纹四件套',price:299,src:'../../static/images/jujia/badgroup/10.jpg'},
        {id:11,title:'几何线条，北欧简约风',name:'几何印花AB面全棉四件套',price:359,src:'../../static/images/jujia/badgroup/11.jpg'},
        {id:12,title:'几何撞色，厚实升温',name:'加厚夹棉保暖四件套',price:399,src:'../../static/images/jujia/badgroup/12.jpg'},
      ],
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

  div.jujia {
    margin-bottom: rem(160px);
    width: 100%;
    // background-color: #f2f3ee;
    .topBanner {
      padding-bottom: rem(26px);
      width: 100%;
      height: rem(600px);
      background-color: #eff5ee;
      div.tbanner {
        width: 100%;
        height: 100%;
        background: url(../../static/images/jujia/jjbanner.jpg) no-repeat center center;
        background-size: cover;
      } 
    }

    div.bedGroup {
      width: 100%;
      background-color: #fff;
      .groupHeader {
        overflow: hidden; 
        width: 100%;
        height: rem(174px);
        text-align: center;
        // background-color: pink;
        .title {
          margin: rem(34px) 0 rem(26px) 0;
          font-size: rem(44px);
          color: #333;
        }
        .dir {
          font-size: rem(36px);
          color: #999;
        }
      }
      ul.groupShops {
        padding:0 rem(30px);
        // background-color: lightblue;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li.shopList {
          padding-bottom: rem(16px);
          width: rem(495px);
          .image {
            img {
              width: rem(495px);
            }
          }
          .shopInfo {
            width: 100%;
            .info {
              margin-bottom: rem(26px);
              padding-left: rem(15px);
              width: rem(480px);
              height: rem(100px);
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: rem(100px);
              font-size: rem(20px);
              color: #9f8a60;
              background-color: #f1ece2;
            }
           .shopname {
            margin-bottom: rem(22px);
            padding-left: rem(15px);
            width: rem(480px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
           }
           .price {
            padding-left: rem(15px);
            color: #b4282d;
           }
          }
        }
      }
    }
  }

</style>
