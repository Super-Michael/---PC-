<template>
  <div class="dianqi">
    <h2>电器页面</h2>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/public/FooterNav'
export default {
  name: 'Dianqi',
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
