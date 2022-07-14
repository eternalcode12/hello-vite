/**
 * author: eternalcoder
 * date: 2022-07-14
 * @description: router 配置项
 */

import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import("@/pages/front/Layout.vue"),
        meta: {
          title: '首页',
          keepAlive: true,
        }
      }
    ]
  }
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};
// Router是路由对象类型
const router: Router = createRouter(options);


export default router;