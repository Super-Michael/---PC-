<template>
  <div class="headerSearch">
    
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/base.scss';
div.search {
  position: fixed;
    top: 0;
    left: 0;
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
</style>
