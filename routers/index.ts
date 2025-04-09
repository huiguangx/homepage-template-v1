/* routers/index.ts */

/* 公共路由 */
const commonRouters = [{ path: '/', redirect: '/index' }]

/* 注意 PC 与 Mobile 的路由的Path name 须保持一致 */
/* PC  */
const PC_Routers = [
  {
    name: 'index',
    path: '/index',
    component: () => import('../PC/views/index.vue'),
  },
  {
    name: 'product',
    path: '/product',
    component: () => import('../PC/views/product.vue'),
  },
]

/* Mobile */
const Mobile_Routers = [
  {
    name: 'index',
    path: '/index',
    component: () => import('../mobile/views/index.vue'),
  },
  // {
  //   name: 'product',
  //   path: '/product',
  //   component: () => import('../mobile/views/product.vue'),
  // },
]

export default {
  PC: [...PC_Routers, ...commonRouters],
  mobile: [...Mobile_Routers, ...commonRouters],
}
