import { createRouter, createWebHistory } from 'vue-router';
import Home_page from '@/components/Home_page.vue';
import Login from '@/components/Login.vue';
import Tasks from '@/components/Tasks.vue';

const router = createRouter({
  history: createWebHistory('/')
,  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home_page
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
});

export default router;
