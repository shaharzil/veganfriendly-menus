import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu  from './components/Menu.component.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'rest/:id',
          component: Menu
        },
        {
          path: 'rest/:id/:edit',
          component: Menu
        }
      ]
    }
  ]
})
