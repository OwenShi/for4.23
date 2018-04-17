import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../views/mainView'
import Now from '../views/now'
import Past from '../views/past'
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
          path: '1',
          name: 'past',
          component: Past
        },
        {
          path: '2',
          name: 'now',
          component: Now
        },
        {
          path: '3',
          name: 'feature',
          component: Draw
        }
      ]
    }
  ]
})
