<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="main">
        <img src="static/img/news/line.png" alt="">
        <img src="static/img/news/vdieoBanner.jpg" alt="" class="newBanner">
        <div class="content">
          <div class="firstVideo">
            <div class="firtVideoBox">
              <video loop="loop" width="100%" preload="auto" ref="videoP">
                <source src="../../../static/video/mov_bbb.ogg" type="video/ogg">
                <source src="../../../static/video/1.mp4" type="video/mp4">
              </video>
            </div>
            <p class="firstVideoTitle">{{firstVideo.title}}</p>
            <p>{{firstVideo.date}}</p>
          </div>
          <ul>
            <li v-for="value,key in videoList" :key="key">
              <div class="videoBox">
                <video width="100%" height="35px" loop="loop" preload="auto" ref="videoP" poster="static/img/news/videoImg.jpg">
                  <source src="../../../static/video/mov_bbb.ogg" type="video/ogg">
                  <source src="../../../static/video/1.mp4" type="video/mp4">
                </video>
              </div>
              <div>
                <p class="listTitle">{{value.title}}</p>
                <p class="listDate">{{value.date}}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/header'
import FooterBar from '@/components/common/footer'
export default {
    name:'vidioList',
    components:{
        HeaderBar,
        FooterBar
    },
    data(){
        return{
          firstVideo:{
              title:'步入12月份，2017年楼市最后的“战役”已经打响。不少楼盘将开盘入市',
              date:'2012.12.15'
          },
          videoList:[
              {
                  title:'REITs热点丨养老地产REITs模式研究',
                  date:'2017.11.17',
              },
              {
                  title:'REITs热点丨养老地产REITs模式研究看极乐空间看',
                  date:'2017.11.17',
              },
              {
                  title:'REITs热点丨养老地产REITs模式研究看极乐空间看',
                  date:'2017.11.17',
              },
          ]
        }
    }
}
</script>
<style scoped>
    @import '../../../static/css/list/vidioList.css';
</style>