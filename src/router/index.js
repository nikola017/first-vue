import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')  // 11
const TaskList = () => import(/* webpackChunkName: "task-list" */ '../views/TaskList.vue')  // 11
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue') // 11


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Simple Task - Home' }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskList,
    meta: { title: 'Simple Task - Tasks' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Simple Task - 404' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Simple Task';
  next();
});

export default router
