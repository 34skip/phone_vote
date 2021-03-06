import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import master from '@/components/master'
import my from '@/components/my'
import explain from '@/components/explain'
import vote from '@/components/vote'
import overVote from '@/components/overVote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/master',
          name: 'master',
          component: master
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain
    },
    {
      path: '/vote',
      name: 'vote',
      component: vote
    },
    {
      path: '/overVote',
      name: 'overVote',
      component: overVote
    }
  ]
})
