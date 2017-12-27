<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="main">
      <img src="static/img/news/line.png" alt="">
      <img src="static/img/news/newBanner.png" alt="" class="newBanner">
      <div class="newsTitle">
        <h3>{{news.title}}</h3>
        <div class="auxiliary">
            <span>{{news.input_date}}</span>
            <span>浏览次数：{{news.hits}}次</span>
            <span>来源：{{news.source}}</span>
        </div>
      </div>
      <section>
          <div class="newsText" v-html="news.content">
            
          </div>
          <!-- <dl>
              <dt class="relatedNews">相关新闻</dt>
              <dd class="rNewsList" v-for="value,key in relatedNewsList" :key="key">
                  <span>{{value.title}}</span>
                  <span>{{value.date}}</span>
              </dd>
          </dl> -->
      </section>
     </div>
     <footer-bar></footer-bar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/header'
import FooterBar from '@/components/common/footer'
import {Icon} from 'vux'
export default {
    name: 'newsInfo',
    components: {
        HeaderBar,
        FooterBar,
        Icon
    },
    data(){
        return{
            news:{
                newsId: null,
                title:'',
                content:'',
                date:'',
                count:'122'
            },
            relatedNewsList:[
                {
                    title:'那温暖的阳光，像刚摘的鲜艳草莓，你说你舍不得吃掉这一种感觉',
                    date:'2017.11.26'
                },
                {
                    title:'窗外的麻雀，在电线杆上多嘴，你说这一句很有夏天的感觉。',
                    date:'2017.12.26'
                },
                {
                    title:'手中的铅笔在纸上来来回回，我用几行字相容你是我的谁',
                    date:'2017.08.26'
                },
                {
                    title:'秋刀鱼的滋味，猫跟你都想了解，初恋的香味就这样被我们寻回',
                    date:'2017.08.26'
                }
            ]
        }
    },
    created (){
        this.news.newsId=this.$route.query.id;
        this.news.title=this.$route.query.title;
        this.news.content=this.$route.query.content;
        this.news.date=this.$route.query.date;
        let phoneH= window.screen.height;
        console.log("---分割线---")
        //let appHeight = document.getElementById('app')
        //console.log(appHeight.style.height)
        //appHeight.style.setProperty = ('minHeight',phoneH)
        // appHeight.style.height = phoneH;
        // mainHeight.setAttribute("min-height",phoneH-194);
        
        this.$ajax.post(
		    	'/News/getNewsByid.do',
		    	{id: this.news.newsId}
		    ).then(res => {
		    	console.log(res.data);
		      this.news =  res.data;
		    })
    },
    mounted(){
	    console.log(this.news.newsId)
        
	  }
}
</script>
<style scoped>
  @import '../../../static/css/list/newsInfo.css';
</style>
