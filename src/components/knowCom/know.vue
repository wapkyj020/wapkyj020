<template>
  <div>
    <header-bar></header-bar>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer-bar ></footer-bar>
  </div>
</template>
<script>
// import {ViewBox} from 'vux';
import HeaderBar from '@/components/common/header'
import FooterBar from '@/components/common/footer'
  export default {
    data () {
      return {
        footfix: false
      }
    },
    name: 'index',
    components: {
      HeaderBar,
      FooterBar
  },
  methods: {
   
  }
  }
</script>
<style scoped>
.main{
  margin-top:2.48rem;
  background: #fff;
}
.footCont{
  position:fixed;
  left:0;
  bottom:0;
  right: 0;
}
ul li.is-Active div, ul li.is-Active i{
  color:#20a0ff;
}
</style>
<style>
.weui-tab .weui-tab__panel{
  padding-bottom:0;
}
</style>
