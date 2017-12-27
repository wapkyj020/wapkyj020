<template>
  <div id="app">
    <view-box style="padding-bottom:0;">
        <header-bar></header-bar>
        <img src="static/img/news/line.png" alt="" class="topLine">
        <div class="slideBorder"> <!-- 轮播 -->
           <swiper :show-desc-mask="false" :list="demo01_list" :index="demo01_index" @on-index-change="demo01_onIndexChange" height='10.4rem' dots-position="center"></swiper>
        </div>
        <div class="proService"> <!-- 产品服务 -->
          <div class="proLines"></div>
          <h1> 产品服务</h1>
          <p> PRODUCT SERVICE</p>
          <div class="proList">
            <dl class="item"  @click="proShow(list,index)"  v-for="(list,index) in proList" :key="index">
              <dt><img :src="list.imgSrc" alt=""></dt>
              <dd :class="{name:true,iconN:true,blue:select==index,}">{{list.name}}</dd>
              <dd class="eName">{{list.contentP}}</dd>
              <div class="imgIcon"  @click.stop="imgIcons(list,index)">
                <img src="../../static/img/arrow.png" alt="" v-if="select==index">
              </div>
            </dl>
          </div>
          <div class="itemInfo" v-for="(list,index) in proList" :key="index" :class="{pblock:select==index}">
            <p>{{list.cont}}</p>
          </div>
        </div>
        <div class="news"> <!-- 新闻资讯 -->
        <div class="proLines"></div>
          <h1> 新闻咨询</h1>
          <p> NEWS</p>
          <ul>
              <div class="lineNews"></div>
              <li v-for="(item,index) in dataList" :key="index">
                <div class="lf imgList">
                	<router-link :to="{path:'/newsInfo',query:{id:item.id}}">
                    <img :src="item.imageurl" alt="">
                  </router-link>
                </div>
                <div class="rt contList">
                	<router-link :to="{path:'/newsInfo',query:{id:item.id}}">
                    <h3>{{item.title}}</h3>
                  </router-link>
                  <p>{{item.input_date}}</p>
                </div>
              </li>
          </ul>
        </div>
        <div class="videoCenter"> <!-- 视频中心 -->
          <div class="videoBox">
            <video id="video1" width="100%" controls="controls" loop="loop" preload="auto" ref="videoP">
	            <source src="../../static/video/mov_bbb.ogg" type="video/ogg">
              <source src="../../static/video/1.mp4" type="video/mp4">
		        </video>
          </div>
          <div class="videoWz">
             <p>步入12月份，2017年楼市最后的已经打响.基里连看极乐空间科了</p>
             <span class="rt">2017.11.22</span>
          </div>
        </div>
       <footer-bar></footer-bar>
    </view-box>
  </div>
</template>

<script>
import {ViewBox, Swiper} from 'vux';
import HeaderBar from '@/components/common/header'
import FooterBar from '@/components/common/footer'
const baseList = [{
    url: 'javascript:',
    img: 'static/img/banner1.png',
    title: ''
  },
  {
    url: 'javascript:',
    img: 'static/img/banner1.png',
    title: ''
  },
  {
    url: 'javascript:',
    img: 'static/img/banner1.png',
    title: '',
    fallbackImg: 'static/img/banner1.png'
  }]

export default {
  name: 'index',
  components: {
      ViewBox,
      HeaderBar,
      FooterBar,
      Swiper
  },
  data () {
      return {
         demo01_list: baseList,
         demo01_index: 0,
         unfold:true,
         select:null,
          dataList:[
          {imgSrc:'static/img/news.png',name:'步入12月份，2017年楼市最后的已经打响',contentP:'2017.11.22'},
          {imgSrc:'static/img/news.png',name:'步入12月份，2017年楼市最后的已经打响',contentP:'2017.11.22'},
          {imgSrc:'static/img/news.png',name:'步入12月份，2017年楼市最后的已经打响',contentP:'2017.11.22'}
        ],
        proList:[
          {imgSrc:'static/img/esf.png',name:'二手房业务',contentP:'OLD HOUSE',state:true,cont:'由中介方为买方提供房屋信息，为卖方寻找下游客户信息，在双方初步达成意向时，中介方安排双方就此交易进行谈判，签订合同，同时支付给中介方中介费的服务业务。'},
          {imgSrc:'static/img/zf.png',name:'租房业务',contentP:'RENTING',state:true,cont:'租赁业务是指出租人（一般为所有权人）将住宅、写字楼出租给承租人使用，由承租人向出租人支付租金，并由中介方收取承租方或者出租方中介服务费的业务。'},
          {imgSrc:'static/img/spf.png',name:'商品房业务',contentP:'HOUSE',state:true,cont:'是开发商与代理商（通常为专业的代理销售公司或房地产经纪公司）之间订立商品房代理销售合同，约定一定的代理销售形式，将自己开发且已经建成并符合销售条件的房屋或者尚未建成但符合预售条件的期房 ，交由代理商以开发商的名义进行销售的行为'}
        ]
      }
  },
  created () {
	    this.$ajax.post(
	    	'/News/getNews.do',	{
          page: 1, pagesize: 4, has_photo: 1
          })
          .then(res => {
            if(res.data.newsList){
              res.data.newsList.forEach(function(news){
                news.imageurl = "http://60.28.246.105:8088" + news.imageurl.split("&")[0];
              })
            }
          this.dataList = res.data.newsList;
	    })
	  },
  mounted () {

  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    play () {
      this.unfold = false;
      this.$refs.videoP.play();
    },
    proShow (list,index) {
      list.state = !list.state
      this.select = index
    },
    imgIcons (list,index){
      this.select = null;
      list.state = !list.state
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/index/index.css';
</style>
<style>
  .weui-tab .weui-tab__panel {
    padding-bottom: 0;
  }
</style>