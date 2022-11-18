import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmibosListView from '../views/AmibosListView.vue'
import AmibosDetailsView from '../views/AmibosDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/amibos/',
      name: 'amibosList',
      component: AmibosListView
    },
    {
        path: '/amibos/:id',
        name: 'amibosDetails',
        component: AmibosDetailsView
    }
  ]
})

export default router
