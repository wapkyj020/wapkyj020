<template>
  <div>
    <header-bar></header-bar>
    <div class="main">
      <div class="img">
        <img src="static/img/news/line.png" alt="" class="bannerLine">
        <img src="../../../static/img/contact.png" alt="" class="banner">
      </div>
      <div class="ideas" ref="ideas">
        <h2>企业文化</h2>
        <h3>Culture</h3>
        <div class="cultures">
          <p>愿景：全国领先的一站式房产管理服务平台。</p>
          <p>使命：做好与房子有关的一切。</p>
          <p class="culdesc">通过持续优化的服务行为，低成本优势，我们为客户创造最大价值。</p>
          <div class="lines"></div>
        </div>
        <div class="services">
          <p><span>服务理念：</span>有态度，好生活</p>
          <p class="imgs"><img src="../../../static/img/culture2.png" alt=""></p>
          <p class="ln">经营理念：年轻化/专业化/制度化/标准化</p>
          <p>凭籍年轻化团队，使企业以持续激情保持高速发展，使百年企业的目标以接力形式传承并永续经营。</p>
          <p>凭籍专业化团队，使企业产品具有高品质、高附加值，赢得客户信赖更有保障。</p>
          <p>凭籍制度化管理，使企业管理有章可循，张驰有序，节奏分明。</p>
          <p>凭籍标准化建设，使企业文化注重细节，具有可复制性；使企业核心价值观成为员工日常生活的一部分。</p>
          <p class="ln">核心价值观：分享、互助、厚德、自强</p>
        </div>
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
    this.$refs.ideas.style.minHeight =20.46 + 'rem'
  }
}
</script>
<style scoped>
  .ideas{
    padding: 0.76rem 1.32rem 0.7rem;
  }
  h2,h3{
    padding:0;
  }
  .ideas h2{
    height: 1.4rem;
    line-height:1.4rem;
    font-size:0.724rem;
    color:#04447c;
  }
  .ideas h3{
    font-family:'alternategothic2_btregular';
    color:#eaeaea;
    line-height: 0.3rem;
    font-size:0.85rem;
    font-weight:normal;
  }
  .img{
    height: 5rem;
  }
  .img .banner{
    width: 100%;
    height:100%;
  }
 .lines{
   border-top:1px solid #cbcbcb;
 }
 .main{
  margin-top:2.48rem;
  background: #fff;
}
.cultures{
  padding:0.6rem 0;
  color:#979797;
  font-size:0.4166rem;
}
.services p{
  font-size:0.417rem;
  color:#b4b4b4;
  text-align: justify;
  /* line-height:0.66rem; */
}
.services>p:first-child{
  color:#000;
}
.services p span ,.services p.ln{
  color:#000;
}
.imgs{
  width:12.06rem;
  height:4.56rem;
  border:1px solid #959595;
  margin:0.2rem 0 0.7rem;
}
.imgs img{
  width: 100%;
  height: 100%;
}
.culdesc{
  margin-bottom:0.8rem;
  text-align: justify;
}
.bannerLine{
  width:100%;
  display: block;
}
</style>
<style>
.weui-tab .weui-tab__panel{
  padding-bottom:0;
}
</style>
