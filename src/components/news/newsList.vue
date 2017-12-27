<template>
  <div id="app">
     <header-bar></header-bar>
     <div class="main" id="main">
        <img src="static/img/news/line.png" alt="">
        <img src="static/img/news/newBanner.png" alt="" class="newBanner">
        <div class="contain">
        <scroller class="my-scorller" ref="myScroller" :on-refresh="refresh" :on-infinite="infinite" >
            <div class="content">
                <section>
                    <div>
                    <div class="firstNews">
                            <img :src=" 'http://60.28.246.105:8088' + firstNews.imageurl" alt="">
                            <div>
                                <p>{{firstNews.title}}</p>
                                <p>{{firstNews.input_date}}</p>
                            </div>
                        </div>
                        <router-link :to="{path:'./newsInfo',query:{id:firstNews.id,title:firstNews.title,content:firstNews.content,date:firstNews.date}}">
                            <div class="firstOverview"> {{firstNews.describe}}</div>
                        </router-link>
                    </div>
                    <div class="lists">
                        <ul class="news-list">
                            <li v-for="value,key in newsList" :key="key">
                                <div>
                                    <h4>{{value.title}}</h4>
                                    <p>{{value.input_date}}</p>
                                    <router-link :to="{path:'./newsInfo',query:{id:value.id,title:value.title,content:value.content,date:value.date}}">
                                        <div>{{value.describe}}</div>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </scroller>
        </div>
     </div>
     <footer-bar></footer-bar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/header'
import FooterBar from '@/components/common/footer'
export default {
    name: 'newsList',
    components: {
        HeaderBar,
        FooterBar,
    },
    data(){
        return{
            firstNews:{
                backImg:'static/img/news/newsFirstImg.jpg',
                title:'年末开发商冲业绩押宝“商”产',
                date:'2012.12.15',
                content:'新闻摘要： 步入12月份，2017年楼市最后的“战役”已经打响。不少楼盘将开盘入市，不过由于限购和市场遇冷的影响住宅的热度也',
                newsId:'333'
            },
            newsList:[
                {
                    title:'REITs热点丨养老地产REITs模式研究',
                    content:'新闻摘要： 步入12月份，2017年楼市最后的“战役”已经打响。不少楼盘将开盘入市，不过由于限购和市场遇冷的影响住宅的热度也',
                    date:'2017.11.17',
                    newsId:'123'
                },
                {
                    title:'REITs热点丨养老地产REITs模式研究看极乐空间看',
                    content:'新闻摘要： 步入12月份，2017年楼市最后的“战役”已经打响。不少楼盘将开盘入市，不过由于限购和市场遇冷的影响住宅的热度也',
                    date:'2017.11.17',
                    newsId:'1234'
                },
            ],
            newsList1:null,
            loadMore:{
                pages:'',
                pagenow: 1,
            }
        }
    },
    created () {
	    this.$ajax.post(
            '/News/getNews.do',{page:this.loadMore.pagenow}
	    ).then(res => {
          this.loadMore.pagenow=res.data.pagenow;
          this.loadMore.pages=res.data.pages;
	      this.newsList =  res.data.newsList;
	      this.firstNews = res.data.headNews;
	      this.firstNews.imageurl = this.firstNews.imageurl.split("&")[0];
	    })
	  },
    mounted(){
        var phoneH = window.screen.height;
        var content = document.getElementsByClassName('contain');
        var scroll = document.getElementsByClassName('my-scorller');
        content[0].style.height= 14 +'rem';
        scroll[0].style.height= 14 + "rem";
    },
    methods: {
        refresh () {
            this.$ajax.post('News/getNews.do', {
                page:1
            })
            .then(res => {
                this.loadMore.pagenow=res.data.pagenow;
                this.loadMore.pages=res.data.pages;
                this.newsList =  res.data.newsList;
                this.firstNews = res.data.headNews;
                this.firstNews.imageurl = this.firstNews.imageurl.split("&")[0];
            })
            setTimeout(() => {
                this.$refs.myScroller.finishPullToRefresh();
                this.$vux.toast.text(`当前一共刷新了4条数据`, 'top')
            }, 1000)
        },
        infinite () {
            this.loadMore.pagenow++;
            var page = this.loadMore.pagenow;
            var pages = this.loadMore.pages;
            if(page<= pages){
                this.$ajax.post('/News/getNews.do', {
                    page: page
                })
                .then(res => {
                    this.newsList1 =  res.data.newsList;
                    this.loadMore.pagenow = res.data.pagenow;
                    this.loadMore.pages = res.data.pages;
                    this.newsList = this.newsList.concat(this.newsList1);
                    this.firstNews = res.data.headNews;
                    this.firstNews.imageurl = this.firstNews.imageurl.split("&")[0];
                    this.$refs.myScroller.finishInfinite(2);
                })
            } else {
                this.$refs.myScroller.finishInfinite(2);
            }
        }
    }
}
</script>
<style scoped>
  @import '../../../static/css/list/newsList.css';
</style>
<style>
  .weui-tab .weui-tab__panel {
    padding-bottom: 0;
  }
</style>
