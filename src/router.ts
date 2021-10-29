import { createRouter, createWebHashHistory } from 'vue-router'

import CommonList from './pages/CommonList'
import VirtualList from './pages/VirtualList'

const routes= [
  { path: '/', component: CommonList },
  { path: '/virtualList', component: VirtualList }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
})