import Vue from 'vue'
import Router from 'vue-router'
import Shows from '@/components/Shows'
import Movies from '@/components/Movies'
import Singleshow from '@/components/Singleshow'
import Singlemovie from '@/components/Singlemovie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Shows',
      component: Shows
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/show/:id',
      name: 'Singleshow',
      component: Singleshow
    },
    {
      path: '/movie/:id',
      name: 'Singlemovie',
      component: Singlemovie
    }
  ]
})
