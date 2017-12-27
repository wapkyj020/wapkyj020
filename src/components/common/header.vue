<template>
  <div class="main">
     <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:105;background-color:#fff;height:2.48rem" :left-options="{showBack: false}">
        <div slot="left" style="width:6rem;line-height: 1.7rem;"><img src="../../assets/logo.png" alt="" style="display:inline-block;height:0.53rem"></div>
        <div slot="right">
          <x-icon  type="navicon" size="35" style="fill:#000000;position:relative;top:5px;right:-3px;height:1.1rem;" @click="tabIcons"></x-icon>
        </div>
     </x-header>
     <div class="menuList" v-show="tabIcon==false" ref="menuList">

       <div class="menuMask">
         <img src="static/img/news/line.png" alt="" class="bannerLine">
       </div>
       <div class="close">
         <i class="icon iconfont iconS" style="font-size:1.1rem;color:#3d3d3d;" v-show="tabIcon==false" @click="backTcons">&#xe666;</i>
       </div>
       <ul class="lists">
            <li @click="fold(list,index)"  v-for="(list, index) in dataList" :key="index" :class="{active:select == index}">
            {{list.listName}}
            <ul class="newsItems dn" :class="{bl:select == index}">
              <router-link :to="{path: item.path}" tag="li" exact v-for="(item, index) in list.itemList" :key="index">{{item.itemName}}</router-link>
            </ul>
          </li>
       </ul>
     </div>
  </div>
</template>
<script>
import { XHeader} from 'vux';
    export default {
      name:'header',
      components: {
        XHeader
      },
      data () {
        return {
          tabIcon: true,
          select:null,
          dataList:[
          {listName:'1+2首页',state:true,path:'/'},
          {listName:'新闻资讯',state:true,itemList:[{itemName:'市场分析',path:'/newsList'},{itemName:'Video.视',path:'/vidioList'}]},
          {listName:'关于1+2',state:true,itemList:[{itemName:'公司简介',path:'/comProfile'},{itemName:'企业文化',path:'/comCulture'},{itemName:'管理团队',path:'/comTeam'},{itemName:'人才招聘',path:'/campusInterview'},{itemName:'联系我们',path:'/contact'}]},
          {listName:'产品服务',state:true},
          {listName:'买房租房',state:true}
        ]
        }
      },
      methods: {
       tabIcons () {
         this.tabIcon = false;
       },
       backTcons () {
         this.tabIcon = true;
       },
       fold (list,index) {
         this.select= index;
         if(list.listName == '产品服务'){
           this.$router.push('/');
           this.tabIcon = true;
         };
         if(list.listName == '1+2首页'){
           this.$router.push('/');
           this.tabIcon = true;
         };
         if(list.listName == '买房租房'){
           window.location.href="http://wxsjz.my012.com/Index/index.do?gsname=shijiazhuang";
           this.tabIcon = true;
         };
       }
      },
      mounted(){
       },
    }
</script>
<style scoped>
.main{
  width:100%;
  height:100%;
}
  .menuList{
    width:100%;
    overflow: hidden;
    height:100%;
  }
  .bannerLine{
    position:absolute;
    top:2.48rem;
    left:0;
    display:block;
    width:100%;
    height:0.05rem;
  }
  .close{
    position: absolute;
    top:2.6rem;
    left:1.1rem;
    z-index:110;
  }
  .lists{
    position: absolute;
    left:0;
    top:4.84rem;
    width:100%;
    z-index:110;
  }
  .lists>li{
    line-height: 2.02rem;
    text-align: center;
    font-size:0.76rem;
    color:#4a4a4a;
    font-weight: bold;
  }
  .menuMask{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    z-index:100;
    overflow: hidden;
    background:rgba(255,255,255,.9);
  }
  ul.list>li.is-Active{
  color:#04447c;
}
.newsItems li{
  font-size: 0.56rem;
  color:#959596;
  line-height: 1.1rem;
}
.dn{
  display: none;
}
.bl{
  display: block;
}
ul.lists>li.active{
   color:#04447c;
}
.headerLine img{
  position: fixed;
  top: 2.57rem;
  width: 100%;
  z-index: 999;
  display: block;
}
</style>