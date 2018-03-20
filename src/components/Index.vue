<template>
  <div class="Index">
  <header>
    <div class="search">
      <a class="logo" href=""><img src="../../static/images/logo.png"></a>
      <div class="searchBox">
        <a href="">
          <span>搜索商品, 共9716款好物</span>
        </a>
      </div>
    </div>
    <div class="m-tabs">
        <div class="swiper-container navBox">
          <div class="swiper-wrapper lbBox">
            <router-link to="/" tag="div" class="swiper-slide">推荐</router-link>
            <router-link to="/jujia" tag="div" class="swiper-slide">居家</router-link>
            <router-link to="/peijian" tag="div" class="swiper-slide">配件</router-link>
            <router-link to="/fuzhuang" tag="div" class="swiper-slide">服装</router-link>
            <router-link to="/dianqi" tag="div" class="swiper-slide">电器</router-link>
            <router-link to="/" tag="div" class="swiper-slide">洗护</router-link>
            <router-link to="/" tag="div" class="swiper-slide">饮食</router-link>
            <router-link to="/" tag="div" class="swiper-slide">餐厨</router-link>
            <router-link to="/" tag="div" class="swiper-slide">婴童</router-link>
            <router-link to="/" tag="div" class="swiper-slide">文体</router-link>
            <router-link to="/" tag="div" class="swiper-slide">特色区</router-link>
        </div>
      </div>
    </div>
  </header>

  <!-- 主体部分mainPart -->
  <div class="mainPart">
    <div class="carousel">
      <div class="swiper-container mainCarousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/1.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/2.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/3.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/4.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/5.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/6.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a class="carimg" href="">
                <img src="../../static/images/lunbo/7.jpg" alt="">
              </a>
            </div>
          </div>
      <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="ServicePolicy">
          <ul class="policyBox">
            <li>网易自营品牌</li>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
          </ul>
        </div>
      </div>
      <!-- 商品主体 -->
      <div class="content">
        <!-- 商品直供 -->
        <div class="POZAN">
          <div class="tital">品牌制造商直供</div>
          <div class="shops">
            <ul>
              <li v-for="PPshop in PPshops">
                <div class="left">
                  <p class="shopTitle">{{PPshop.title}}</p>
                  <p class="shopPrice">{{PPshop.price}}元起</p>
                </div>
                  <img v-bind:src='PPshop.src' alt="">
              </li>
            </ul>
          </div>
        </div>
 
      </div>
             <!-- 新品首发 -->
    <div class="newShop">
      <div class="nshead">
        <a href="">
          <p class="title">新品首发</p>
          <p class="seeAll">
            查看全部
          </p>
        </a>
      </div>
      <div class="nsLunbo">
        <div class="swiper-container nsCarousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/6.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/2.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/1.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/3.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/4.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/5.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div>
                
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="nsImg">
                  <img src="../../static/images/nslunbo/7.png" alt="">
                </div>
                <div class="describe">
                  <p class="title">OL风 女士弹力百搭锥形裤</p>
                  <p class="case">四季都爱，火遍时髦圈的锥形裤</p>
                  <p class="price">￥ 199</p>
                </div> 
              </a>
            </div>
            <div class="swiper-slide">
              <a class="nsContent" href="">
                <div class="other">查看全部</div>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>


  <!-- 严选限时购 -->
  <div class="limited">
    <a href="">
      <div class="limitBox">
        <div class="countDown">
          <p class="title">严选限时购</p>
          <div class="time">
            <span class="hour">00</span>:<span class="minute">00</span>:<span class="second">00</span>
          </div>
          <p class="next">
            <span>下一场</span>
            <span>18:00</span>
            <span>开始</span>
          </p>
        </div>
        <div class="limShop">
          <img src="../../static/images/xsg.png" alt="">
        </div>
      </div>
    </a>
  </div>
  <!-- 底部导航栏 -->
  <!-- <headerSearch></headerSearch> -->
  <footerNav></footerNav>

<!-- 结束标签 -->
</div>  
</template>

<script>
// 引入底部导航组件
import footerNav from '@/components/public/FooterNav'
// 引入头部搜索组件
// import headerSearch from '@/components/public/HeaderSearch'

export default {
  name: 'Index',
  data () {
    return {
      PPshops: [
        {id:1,title:'新秀丽制造商',price:49,src:'../../static/images/PPshop/PP1.png'},
        {id:2,title:'MUJI制造商',price:19,src:'../../static/images/PPshop/PP2.png'},
        {id:3,title:'Ralph Lauren制造商',price:19,src:'../../static/images/PPshop/PP3.png'},
        {id:4,title:'Nine West制造商',price:119,src:'../../static/images/PPshop/PP4.png'}
      ],

    }

  },

  mounted(){
       // 实例化Swiper
      var mySwiper = new Swiper('.navBox', {
        // autoplay: true,//可选选项，自动滑动
        slidesPerView:5,
      });

       var carouselImg = new Swiper('.mainCarousel', {
          autoplay: true,//可选选项，自动滑动
          type: 'bullets',
          loop:true,
           pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });
        // 新品轮播图
      var swiper = new Swiper('.nsCarousel', {
          slidesPerView: 2.5,
          spaceBetween: 30,
          // freeMode: true,
       });

      // 严选限时购倒计时

  },
  // 组件
  components: {
    // 不能写HTML标签名
    footerNav
    // headerSearch
  },

  /*
  特效分析：
  1.获取未来时间戳-当前时间戳 = 距离未来的时间
  2. 将计算好的时间传入到span标签中

  */
/*
  methods: {
    run:function(desttime){
        var d1 = new Date(desttime);
        var d2 = new Date();

        var time = d1.getTime() - d2.getTime();
         //剩余小时数
         var hour = Math.floor(time/1000/60/60%24);
         // 剩余分钟数
         var minute = Math.floor(time/1000/60%60);
         // 获取秒数
         var second = Math.floor(time/1000%60);

        return [hour,minute,second];
      }
  },
  created: function(){
    console.log(this.run('2018-3-14'));
  }
*/


  /*computed: {
    timer: {
      run:function(desttime,str){
        var d1 = new Date(desttime);
        var d2 = new Date();

        var time = d1.getTime() - d2.getTime();
         //剩余小时数
         var hour = Math.floor(time/1000/60/60%24);
         // 剩余分钟数
         var minute = Math.floor(time/1000/60%60);
         // 获取秒数
         var second = Math.floor(time/1000%60);
        return [hour,minute,second];
      }
    }
  },
  created: function(){
    this.timer.run('2018-3-15','time');
  }*/
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/base.scss'; 
/*  @function rem($px){
  @return $px/108px *1rem;
}  */

 div.Index {
  margin-bottom: rem(300px);
   background-color: #f4f4f4; 
  img[src=""],img:not([src]){

      display: none;

  }
 }
 
  /*头部导航 */
header {
  padding: rem(24px) 0;
  width: 100%;
  background-color: #fff;
  div.search {
    display: flex;
    margin-left: rem(40px);
    justify-content: space-between;
    align-items:center;
    a {
      display: inline-block;
      img {
        width: rem(238px);
      }
    }

    div.searchBox {
      height: rem(80px);
      margin-right: rem(40px);
      border:rem(1px) solid #e4eae3;
      border-radius: rem(10px);
      background-color: #ededed;
      a {
        display: inline-block;
        line-height: rem(80px);
        padding: 0 rem(150px);
        color: #666;
      }
    }
   }
  
  // 轮播导航
  div.m-tabs {
    width: 100%;
    padding-top: rem(20px);
      .swiper-container {
        height: rem(60px);
        line-height: rem(60px);
        text-align: center;
        color:#333;
        line-height: rem(60px);
        font-size: rem(30px);
        .swiper-slide {
          font-size: rem(38px);  
        }

        .swiper-slide:hover {
          color: red;
        }
    }
  }
 
} 

// 主体轮播图

div.mainPart {
  width: 100%;
  margin: 0 auto;
  a.carimg {
    display: inline-block;
    width: 100%;
    img {
      width: 100%;
    }
  }
  div.carousel {
    width: 100%;
    margin-bottom: rem(26px);
    background-color: #fff;
    .ServicePolicy {
      padding: 0 rem(30px);
      ul.policyBox {
        display: flex;
        justify-content:space-between;
        height: rem(104px);
        line-height: rem(104px);
        font-size: rem(34px);
        color: #333;
      }
    }
  }
  div.content {
    width: 100%;
    background-color: #fff;
    div.POZAN{
      padding: 0 rem(24px);
      margin-bottom: rem(30px);
      div.tital {
        width: 100%;
        height: rem(160px);
        line-height: rem(160px);
        text-align: center;
        font-size: rem(48px);
        // background-color: pink;
      }
      div.shops {
        width: 100%;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            position: relative;
            margin-bottom: rem(10px);
            width: 49%;
            background-color: #eff5ee;
            img{
              width: 100%;
            }
            div.left {
              position: absolute;
              left: 0;
              top:0;
              padding: rem(30px) 0 0 rem(30px);
              p {
                line-height: rem(50px);
              }
              p.shopTitle {
                margin-bottom: rem(10px);
                font-size: rem(42px);
              }
            }
          }
        }
      }
    }
  }


  // 新品首发 newShop 开始
  div.newShop {
    margin-bottom: rem(26px);
    padding-bottom: rem(40px);
    width: 100%;
    background-color: #fff;
    div.nshead {
      overflow: hidden;
      margin-bottom: rem(44px);
      width: 100%;
      height: rem(380px);
      background:  url(../../static/images/nslunbo/nsbg.png) no-repeat;
      background-size: cover;
      text-align: center;
      a {
        display: block;
        width: 100%;
        margin-top: rem(105px);
        height: rem(170px);
        text-align: center;
        color: #8BA0B6;
        // background-color: pink;
        p.title {
          font-size: rem(50px);

        }
        p.seeAll {
          margin: rem(36px) auto 0;
          width: rem(348px);
          height: rem(80px);
          line-height: rem(80px);
          background: #D8E5F1;
        }
      }
    }
    // 新品轮播
    div.nsLunbo {
      padding: 0 rem(20px);
      .nsCarousel {
        .swiper-slide {
          width: rem(400px);
          // background: pink;
          a.nsContent {
            display: block;
            width: rem(400px);
            text-align: center;
            .nsImg {
              margin-bottom: rem(26px);
              background: #eff5ee;
              img {
                width: rem(400px);
              }
            }
            .describe {
              padding: 0 rem(10px);
              text-align: left;
              p {
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
                width: rem(390px);
              }
              .title {
                margin: rem(26px) 0;
                font-size: rem(38px);
                color: #333;
              }

              .case {
                margin-bottom: rem(26px);
                font-size: rem(34px);
                color: #7f7f7f;
              }
              .price {
                font-size: rem(34px);
                color: #b4282d;
              }
            }

            .other {
              border: rem(10px) solid #f4f4f4;
              height: rem(390px);
              line-height: rem(400px);
              font-size: rem(30px);
              color:#333;
            }
          }
        }
      }
    }
  }
}

// 严选限时购 开始
div.limited {
  margin-bottom: rem(26px);
  width: 100%;
  // background: pink;
  .limitBox {
    display: flex;
    justify-content: space-between;
    padding:rem(35px) rem(50px) rem(35px) rem(80px);
    background: #fff;
    div.limShop {
      img {
        width: rem(480px);
      }
    }
    div.countDown {
      // height: rem(294px);
      margin-top: rem(120px);
      // background: pink;
      p.title {
        margin-bottom: rem(40px);
        font-size: rem(50px);
        letter-spacing: rem(20px);
        color: #333;
      }
      div.time {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(40px);
        span {
          display: inline-block;
          // vertical-align: baseline;
          width: rem(78px);
          height: rem(78px);
          border-radius: rem(14px);
          text-align: center;
          line-height: rem(78px);
          color: #fff;
          background: #444;
        }
      }

         p.next {
          span {
            font-size: rem(34px);
            color: #333;
          }
        }
    }
  }
}

</style>
