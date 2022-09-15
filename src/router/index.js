import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LecturesView from '@/views/LecturesView.vue';
import PostList from '@/views/posts/PostListView.vue';

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/lectures',
    name: 'LecturesView',
    component: LecturesView,
    children: [
      {
        path: '',
        name: 'AppWatch',
        component: () => import('@/lectures/15/AppWatch.vue'),
      },
      {
        path: '',
        name: 'AppWatchEffect',
        component: () => import('@/lectures/15/AppWatchEffect.vue'),
      },
    ],
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
