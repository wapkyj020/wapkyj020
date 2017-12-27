<template>
  <div>
    <header-bar></header-bar>
    <div class="main">
     <div class="ideas">
    <h2>管理团队</h2> 
      <ul class="content">
        <li v-for="(item, index) in dataList" :key="index">
          <div class="lf imgList">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="rt contList">
            <h3>{{item.name}}</h3>
            <p ref="pWrapCont" class="pWrap" :class="{pblock:!item.state}">{{item.contentP}}</p>
            <span class="rt" @click="repWrap(item)"><详情></span>
          </div>
        </li>
      </ul>
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
        dataList:[
          {imgSrc:'static/img/m1.png',name:'赵玉瀚',contentP:'男，1980年出生，本科学历；2003年毕业于河北大学信息管理与信息系统专业。2004年入司，现任集团董事、总裁。',state:true},
          {imgSrc:'static/img/m2.png',name:'王静',contentP:'女，1980年出生，本科学历；2004年毕业于河北科技大学工商管理专业，石家庄经济学院工商管理……',state:true},
          {imgSrc:'static/img/m3.png',name:'申慧敏',contentP:'女，1971年出生，研究生学历；1992年毕业于哈尔滨电工学院审计学专业，2015年毕业于河北大学……',state:true},
          {imgSrc:'static/img/m4.png',name:'刘少平',contentP:'男，1982年出生，本科学历；2005年毕业于石家庄经济学院计算机及应用专业，网络工程师，微软……',state:true},
          {imgSrc:'static/img/m5.png',name:'耿海涛',contentP:'男，1981年出生，本科学历；2003年毕业于西南交通大学土木工程专业。2006年加入公司，现任南京公司总经理。',state:true},
          {imgSrc:'static/img/m6.png',name:'王永',contentP:'男，1982年出生，本科学历；2003年毕业于郑州轻工业学院工商管理专业。2008年加入公司，现任郑州公司总经理。',state:true},
          {imgSrc:'static/img/m7.png',name:'任洪星',contentP:'男，1982年出生，专科学历；2014年毕业于中央广播电视大学计算机信息管理专业。2008年加入……',state:true},
          {imgSrc:'static/img/m8.png',name:'董程伟',contentP:'男，1983年出生，本科学历；2005年毕业于河北师范大学思想政治教育专业。2005年加入公司，现任承德公司总经理。',state:true},
          {imgSrc:'static/img/m9.png',name:'孙小明',contentP:'男，1981年出生，本科学历，2003年毕业于河北大学法律专业，全国房地产经纪人执业资格。',state:true},
          {imgSrc:'static/img/m10.png',name:'王剑锋',contentP:'男，1981年出生，本科学历，2004年毕业于河北师范大学计算机教育专业。2004年加入公司，现任资产管理事业部总经理。',state:true},
        ]
      }
    },
    name: 'index',
    components: {
      HeaderBar,
      FooterBar
    },
    created(){
      console.log(this.dataList,'this.dataList');
      },
    methods:{
      repWrap (item) {
        item.state=!item.state
      }
    }
  }
</script>
<style scoped>
  .lf{
    float:left;
  }
  .rt{
    float:right;
  }
  .ideas{
    padding: 0.24rem 0.6rem 0;
    background:#fff;
  }
  .ideas h2{
    height: 1.4rem;
    line-height:1.4rem;
    font-size:0.68rem;
    color:#1a3b64;
    border-bottom:1px solid #ccc;
  }
  ul.content{
    overflow: hidden;
    padding-bottom:0.6rem;
  }
  ul li{
    list-style-type: none;
    border: 1px solid #fff;
    margin-top: 0.6rem;
    box-shadow: 0px 2px 5px 1px #d0d0d0;
    overflow: hidden;
  }
  ul li .imgList{
    width: 4.3rem;
    height: 3.56rem;
  }
  ul li .imgList img{
    width:100%;
    height:100%;
  }
  ul li .contList{
    padding: 0.12rem 0 0.24rem 0;
    width:8.2rem;
  }
  ul li .contList h3{
    font-size: 0.56rem;
  }
  ul li .contList p{
    font-size: 0.48rem;
    color:#b3b3b3;
  }
  .pWrap{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  ul li .contList span{
    font-size:0.48rem;
    color:#1a3b6e;
  }
  .pblock{
    display:block;
  }
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