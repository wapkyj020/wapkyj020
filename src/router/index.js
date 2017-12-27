import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import Index from '@/components/index'
import NewsList from '@/components/news/newsList'
import NewsInfo from '@/components/news/newsInfo'
import VidioList from '@/components/news/vidioList'

import know from '@/components/knowCom/know'
import comCulture from '@/components/knowCom/comCulture'
import comProfile from '@/components/knowCom/comProfile'
import comTeam from '@/components/knowCom/comTeam'
import campusInterview from '@/components/knowCom/campusInterview'
import contact from '@/components/knowCom/contact'

import proList from '@/components/proService/proList' 

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-Active',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path:'/newsList',
      name: 'newsList',
      component: NewsList
    },
    {
      path:'/newsInfo',
      name: 'newsInfo',
      component: NewsInfo
    },
    {
      path:'/vidioList',
      name: 'vidioList',
      component: VidioList
    },
    {
      path: '/comCulture',
      name: 'comCulture',
      component: comCulture
    },
    {
      path: '/comProfile',
      name: 'comProfile',
      component: comProfile
    },
    {
      path: '/comTeam',
      name: 'comTeam',
      component: comTeam
    },
    {
      path: '/campusInterview',
      name: 'campusInterview',
      component: campusInterview
    },
    {
      path: '/proList',
      name: 'comTeam',
      component: proList
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
