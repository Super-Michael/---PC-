<template>
  <div class="Fuzhuang">
    <h2>居家页面</h2>
    <!-- <headerSearch></headerSearch> -->
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/public/FooterNav'
// import headerSearch from '@/components/public/headerSearch'
export default {
  name: 'Fuzhuang',
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
