import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'
import dianpu from '@/components/pages/dianpu'
import shoplist from '@/components/pages/shoplist'
import vip from '@/components/pages/vip'
import tongji from '@/components/pages/tongji'
import shezhi from '@/components/pages/shezhi'
import notfound from '@/components/common/notfound'
Vue.use(Router)

export default new Router({
    name:'history',
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: dianpu
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component:shoplist
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/tongji',
      name: 'tongji',
      component:tongji
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },{
      path: '*',
      component: notfound
    }
  ]
})
