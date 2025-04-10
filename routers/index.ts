// routers/index.ts
import type { RouteRecordRaw } from 'vue-router'

/* 公共路由类型 */
type CommonRouter = Pick<RouteRecordRaw, 'path' | 'redirect'>
type ComponentRouter = Omit<RouteRecordRaw, 'redirect'>

/* 基础路由配置类型 */
interface BaseRoute {
  name: string
  path: string
  pcComponent: RouteRecordRaw['component']
  mobileComponent?: RouteRecordRaw['component'] // 可选，因为有些路由可能没有移动端版本
}

/* 公共路由 */
const commonRouters: CommonRouter[] = [{ path: '/', redirect: '/index' }]

// 基础路由配置
const baseRoutes: BaseRoute[] = [
  {
    name: 'index',
    path: '/index',
    pcComponent: () => import('../PC/views/index.vue'),
    mobileComponent: () => import('../mobile/views/index.vue'),
  },
  {
    name: 'product',
    path: '/product',
    pcComponent: () => import('../PC/views/product.vue'),
    // mobileComponent: () => import('../mobile/views/product.vue'),
  },
]

// 支持的语言前缀
const languages: string[] = ['', '/zh'] // 空字符串表示默认语言

// 生成多语言路由
function generateLocalizedRoutes(baseRoutes: BaseRoute[]): {
  pcRoutes: ComponentRouter[]
  mobileRoutes: ComponentRouter[]
} {
  const pcRoutes: ComponentRouter[] = []
  const mobileRoutes: ComponentRouter[] = []

  for (const lang of languages) {
    for (const route of baseRoutes) {
      // PC 路由
      pcRoutes.push({
        name: route.name + (lang ? `_${lang.slice(1)}` : ''),
        path: lang + route.path,
        component: route.pcComponent,
      })

      // Mobile 路由（只有定义了 mobileComponent 才添加）
      if (route.mobileComponent) {
        mobileRoutes.push({
          name: route.name + (lang ? `_${lang.slice(1)}` : ''),
          path: lang + route.path,
          component: route.mobileComponent,
        })
      }
    }
  }

  return { pcRoutes, mobileRoutes }
}

const { pcRoutes, mobileRoutes } = generateLocalizedRoutes(baseRoutes)

const routers = {
  PC: [...pcRoutes, ...commonRouters],
  mobile: [...mobileRoutes, ...commonRouters],
} as const

export default routers
