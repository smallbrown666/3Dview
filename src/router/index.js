import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../components/Index.vue'
import Sun from '../components/Sun.vue'
import Line from '../components/Line.vue'
import Pie from '../components/Pie.vue'
import RichText from '../components/RichText.vue'
import Sunburst from '../components/Sunburst.vue'
import PictorialBar from '../components/PictorialBar.vue'
import Gauge from '../components/Gauge.vue'
import City3d from '../components/City3d.vue'
import Globe3d from '../components/Globe3d.vue'
import Music from '../components/Music.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    // name: 'home',
    // component: Home
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path:'',//这个表示进来该组件的默认首页 二级路由用空 一级用*
        name:'index',
        component:Index
      },
      {
        path:'/sun',
        name:'sun',
        component:Sun
      },
      {
        path:'/line',
        name:'line',
        component:Line
      },
      {
        path:'/pie',
        name:'pie',
        component:Pie
      },
      {
        path: '/richtext',
        name: 'RichText',
        component: RichText
      },
      {
        path: '/suburst',
        name: 'Suburst',
        component: Sunburst
      },
      {
        path: '/PictorialBar',
        name: 'PictorialBar',
        component: PictorialBar
      },
      {
        path: '/gauge',
        name: 'Gauge',
        component: Gauge
      },
      {
        path: '/city3d',
        name: 'City3d',
        component: City3d
      },
      {
        path: '/Globe3d',
        name: 'Globe3d',
        component: Globe3d
      },
      {
        path: '/Music',
        name: 'Music',
        component: Music
      },
    ]

    
  },
 
]

const router = new VueRouter({
  routes
})

export default router
