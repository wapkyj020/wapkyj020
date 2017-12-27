<template>
  <div>
    <header-bar></header-bar>
    <div class="main">
      <div class="ideas" ref="ideas">
        <div class="img">
          <img src="static/img/news/line.png" alt="" class="bannerLine">
          <img src="../../../static/img/contact.png" alt="" class="banner">
        </div>
        <div class="titleBox">
          <h2>联系我们</h2>
          <h3>Contact</h3>
        </div>
      <div class="content">
        <h4>公司总部</h4>
        <p class="addr"><b>地址：</b><span>石家庄裕华区槐安东路145号西美五洲大厦</span></p>
        <p class="emailP"><b>邮箱：</b>my012hr@lionful.com</p>
        <p class="tel"><b>电话：</b>0311-66500995</p>
        <div id="allmap"></div>
      </div>
      <div style="margin:0 1rem 0 1rem;border-top:1px solid transparent;"></div>
    </div>
    </div>
    <footer-bar ></footer-bar>
  </div>

</template>
<script>
 import HeaderBar from '@/components/common/header'
 import FooterBar from '@/components/common/footer'
 import BMap from 'BMap'
  export default {
    data () {
      return {
        footfix: false
      }
    },
    name: 'index',
    components: {
      HeaderBar,
      FooterBar,
      BMap
  },
   mounted () {
    var html = document.documentElement;
    var viewH = (html.clientHeight)/50;
    console.log(viewH)
    this.$refs.ideas.style.minHeight =20.4 + 'rem'
     this.ready();
  },
  methods: {
     ready: function() {
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      map.centerAndZoom("石家庄", 12);
      var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      });
      local.search("西美五洲大厦");
      map.enableScrollWheelZoom(true);
    }
  }
}
</script>
<style scoped>
  .ideas{
    width:100%;
  }
  .ideas .titleBox h2{
    height: 1.05rem;
    line-height:1.4rem;
    font-size:0.724rem;
    color:#04447c;
    padding-top: 0.76rem;
  }
  .ideas .titleBox h3{
    font-family:'alternategothic2_btregular';
    padding-bottom:0.76rem;
    line-height:1.1rem;
    color:#eaeaea;
    border-bottom:1px solid #cbcbcb;
    font-size:0.8rem;
    font-weight:normal;
  }
  .content{
    padding: 0.5rem 1.46rem 0rem;
  }
  .titleBox{
    padding:0 1.46rem;
  }
  .content h4{
    color:#04447c;
    font-size:0.5018rem;
  }
  .content p{
    padding-left:0.7rem;
    font-size:0.5018rem;
    color:#cbcbcb;
    line-height: 1.2rem;
  }
.content .addr{
    background: url(../../../static/img/cont3.png) left 7px no-repeat;
    background-size: 0.5rem 0.67rem;
    display:flex;
    flex-direction:row;
  }
.content .emailP{
  background: url(../../../static/img/cont2.png) left center no-repeat;
  background-size: 0.58rem 0.5rem;
}
.content .tel{
  background: url(../../../static/img/cont1.png) left center no-repeat;
  background-size: 0.6rem 0.68rem;
}
.content p b{
    display:inline-block;
    min-width: 1.9rem;
    width: 1.9rem;
    color:#000;
  }
  .img{
    height: 5rem;
  }
  .img .banner{
    width: 100%;
    height:100%;
  }
  .img .bannerLine{
    display: block;
    width:100%;
  }
  .main{
  margin-top:2.48rem;
  background: #fff;
}
#allmap{
  width:100%;
  height:3.9rem;
  margin:0.56rem 0;
  }
</style>
<style>
.weui-tab .weui-tab__panel{
  padding-bottom:0;
}
</style>
