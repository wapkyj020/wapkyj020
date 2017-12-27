<template>
<div>
    <header-bar></header-bar>
    <div class="main">
      <img src="static/img/news/line.png" alt="" class="bannerLine">
      <img src="../../../static/img/introBanner.png" alt="">
      <div class="ideas" ref="ideas">
        <div class="titleBox">
          <h2>集团介绍</h2>
          <h3>Itroduction</h3>
        </div>
        <div class="content">
          <p>1+2联合不动产集团初创于2003年11月，2004年4月开始拓展直营销售网络，率先在河北省内占领市场，2006年5月开始向省外进军。目前服务范围已经覆盖江苏、河北、河南等省市。拥有直营连锁店150余家，员工数量2000余人。基于“多场景、全渠道”，致力成为“中产阶层房产品质生活顾问”的新经纪。</p>
        </div>
        <div class="lines"></div>
      </div>
    </div>
    <footer-bar ></footer-bar>
  </div>

</template>
<script>
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
   mounted () {
    var html = document.documentElement;
    var viewH = (html.clientHeight)/50;
    console.log(viewH)
    this.$refs.ideas.style.minHeight =15.46 + 'rem'
  },
  methods: {

  }
  }
</script>
<style scoped>
  .main {
    background: #fff;
    box-sizing:border-box;
    margin-top:2.5rem;
    width:100%;
  }
  .main>img{
      display:block;
      width:100%;
  }
  .ideas{
    width:100%;
  }
  .ideas .titleBox h2{
    height: 0.9rem;
    line-height:0.9rem;
    font-size:0.724rem;
    color:#04447c;
    padding-top: 0.8rem;
  }
  .ideas .titleBox h3{
    font-family:'alternategothic2_btregular';
    height:0.7rem;
    line-height:1.05rem;
    color:#eaeaea;
    padding-bottom:0.8rem;
    font-size:1rem;
    font-weight:normal;
  }
  .content{
    padding: 0.5rem 1.48rem 0.6rem;
  }
  .content p{
    font-size:0.4166rem;
    color:#979797;
    line-height: 1.2rem;
    text-align: justify;
  }
  .titleBox{
    margin:0 1.46rem;
    border-bottom:1px solid #cbcbcb;
  }
 .lines{
   margin:0 1.48rem 0 1.48rem;
   border-top:1px solid transparent;
 }

</style>
<style>
.weui-tab .weui-tab__panel{
  padding-bottom:0;
}
</style>