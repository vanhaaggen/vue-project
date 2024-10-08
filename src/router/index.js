import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../views/Counter.vue'
import ToDoList from '@/views/ToDoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Counter.vue')
    },
    {
      path: '/to-do-list',
      name: 'to-do-list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToDoList.vue')
    }
  ]
})

export default router
