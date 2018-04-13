import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../views/mainView'
import InView from '../views/inView'
import OutView from '../views/outView'
import Hello from '../views/hello'
import Draw from '../views/draw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/main',
      name: 'mainView',
      component: MainView,
      children: [
        {
          path: 'out',
          name: 'Out',
          component: OutView
        },
        {
          path: 'in',
          name: 'In',
          component: InView
        },
        {
          path: 'draw',
          name: 'draw',
          component: Draw
        }
      ]
    }
  ]
})
