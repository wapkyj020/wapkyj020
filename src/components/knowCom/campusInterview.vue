<template>
  <div>
    <header-bar></header-bar>
    <div class="main">
      <img src="static/img/news/line.png" alt="">
      <img src="../../../static/img/recruitmentBanner.jpg" alt="">
      <section>
        <dl class="wish">
          <dt>
            <h3>热情、诚恳、赢得意志</h3>
            <p>Enthusiasm、Sincere、The will to win</p>
          </dt>
          <dd>认真负责和工作有效的员工是公司最大的财富；</dd>
          <dd>热情的员工让公司充满活力，创新无限；</dd>
          <dd>诚恳的员工才能清楚做事，清白做人；</dd>
          <dd>赢得意志使团队披坚执锐，战无不胜。</dd>
        </dl>
        <h3 class="recruit">招聘信息</h3>
        <p class="recruitEn">Recruitment Information</p>
        <dl class="recruitment" @click="upDown">
          <dt>
            <h4><span>资产管理事业部副总经理岗位</span><img :src="url" class="arrowDown"></h4>
            <p>工作地点：<span>石家庄-裕华区</span>招聘人数：<span>1</span></p>
            <p>发布时间：<span>2017-11-11</span></p>
            <p v-if="zpnr">岗位职责</p>
          </dt>
          <dd v-if="zpnr">
            <ol>
                <li>根据项目市场发展目标及战略，指定中、长期战略定位及推广策略；</li>
                <li>按照商业计划战略目标，积极对外进行资本运作，并进行路演、融资及品牌营销工作；</li>
                <li>拓展整合内外部资源，负责相关对外合作的深入洽谈保障合作落地执行。</li>
                <li>对外部并购合作项目进行调研、立项及运作；</li>
            </ol>
            <p>任职要求</p>
            <ol>
                <li>全日制统招本科以上学历，经济、管理、金融类相关专业；</li>
                <li>有3年以上大型企业总监级以上工作经验；</li>
                <li>有资本运作路演、融资及形象推广经验；</li>
            </ol>
          </dd>
        </dl>  <!-- /第一个 -->
        <dl class="recruitment" @click="upDown2">
          <dt>
            <h4><span>JAVA开发工程师</span><img :src="url2" class="arrowDown"></h4>
            <p>工作地点：<span>石家庄-裕华区</span>招聘人数：<span>3</span></p>
            <p>发布时间：<span>2017-11-11</span></p>
            <p v-if="zpnr2">岗位职责</p>
          </dt>
          <dd v-if="zpnr2">
            <ol>
                <li>根据项目市场发展目标及战略，指定中、长期战略定位及推广策略；</li>
                <li>按照商业计划战略目标，积极对外进行资本运作，并进行路演、融资及品牌营销工作；</li>
                <li>拓展整合内外部资源，负责相关对外合作的深入洽谈保障合作落地执行。</li>
                <li>对外部并购合作项目进行调研、立项及运作；</li>
            </ol>
            <p>任职要求</p>
            <ol>
                <li>全日制统招本科以上学历，经济、管理、金融类相关专业；</li>
                <li>有3年以上大型企业总监级以上工作经验；</li>
                <li>有资本运作路演、融资及形象推广经验；</li>
            </ol>
          </dd>
        </dl> <!-- /第二个 -->
        <dl class="recruitment" @click="upDown3">
          <dt>
            <h4><span>WEB前端开发工程师</span><img :src="url3" class="arrowDown"></h4>
            <p>工作地点：<span>石家庄-裕华区</span>招聘人数：<span>3</span></p>
            <p>发布时间：<span>2017-11-11</span></p>
            <p v-if="zpnr3">岗位职责</p>
          </dt>
          <dd v-if="zpnr3">
            <ol>
                <li>根据项目市场发展目标及战略，指定中、长期战略定位及推广策略；</li>
                <li>按照商业计划战略目标，积极对外进行资本运作，并进行路演、融资及品牌营销工作；</li>
                <li>拓展整合内外部资源，负责相关对外合作的深入洽谈保障合作落地执行。</li>
                <li>对外部并购合作项目进行调研、立项及运作；</li>
            </ol>
            <p>任职要求</p>
            <ol>
                <li>全日制统招本科以上学历，经济、管理、金融类相关专业；</li>
                <li>有3年以上大型企业总监级以上工作经验；</li>
                <li>有资本运作路演、融资及形象推广经验；</li>
            </ol>
          </dd>
        </dl>  <!-- /第三个 -->
      </section>
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
        zpnr:false,
        zpnr2:false,
        zpnr3:false,
        url:'static/img/arrowDown.jpg',
        url2:'static/img/arrowDown.jpg',
        url3:'static/img/arrowDown.jpg'
      }
    },
    name: 'index',
    components: {
      HeaderBar,
      FooterBar
    },
    created() {

    },
    methods: {
      upDown:function(){
        if(this.zpnr==false){
          this.zpnr=true;
          this.url ='static/img/arrowUp.jpg'
        }else{
          this.zpnr=false;
          this.url ='static/img/arrowDown.jpg'
        }
      },
      upDown2:function(){
        if(this.zpnr2==false){
          this.zpnr2=true;
          this.url2 ='static/img/arrowUp.jpg'
        }else{
          this.zpnr2=false;
          this.url2 ='static/img/arrowDown.jpg'
        }
      },
      upDown3:function(){
        if(this.zpnr3==false){
          this.zpnr3=true;
          this.url3 ='static/img/arrowUp.jpg'
        }else{
          this.zpnr3=false;
          this.url3 ='static/img/arrowDown.jpg'
        }
      },
    },

  }
</script>
<style scoped>
  @import '../../../static/css/abouts/recruitment.css';
</style>
