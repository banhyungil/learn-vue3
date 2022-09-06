import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LinkView from '@/views/LinkView.vue';
import PostList from '@/views/posts/PostListView.vue';

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/link',
    name: 'LinkView',
    component: LinkView,
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
