import Vue from 'vue'
import Router from 'vue-router'
import MenusPgae from './views/Menus.page.vue'
import Menu  from './components/Menu.component.vue';
import Reviews from './views/Reviews.page.vue'
import Images from './views/Images.page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MenusPgae,
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
    },
    {
      path: '/reviews',
      component: Reviews
    },
    {
      path: '/images',
      component: Images
    }
  ]
})
