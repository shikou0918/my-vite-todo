import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: MainTodo,
  },
  {
    path: '/mainTodo',
    name: 'MainTodo',
    component: MainTodo,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/src/pages/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 存在しないアドレスにマッチするような指定
    name: 'NotFound',
    component: () => import('/src/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
