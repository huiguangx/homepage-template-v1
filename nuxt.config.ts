// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { currentLocales } from './config/i18n'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxt/image', 'nuxt-gtag', '@nuxtjs/tailwindcss'],
  gtag: {
    id: import.meta.env.VITE_GTAG_ID,
    enabled: true,
  },
  i18n: {
    locales: currentLocales,
    langDir: 'locales',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: path.resolve(__dirname, './config/i18n.config.ts'),
    // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
    detectBrowserLanguage: {
      // 启动 cookie
      useCookie: true,
      // 用于存储当前语言环境的变量名
      cookieKey: 'i18n_redirected',
      // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是"no_prefix"时才有效。
      redirectOn: 'root',
    },
    baseUrl: 'http://baidu1.com',
  },
  postcss: {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        // 配置参数使用与 postcss-px-to-viewport 一致
        viewportWidth: 750, // 设计稿宽度（通常为 750px 或 375px）
        unitPrecision: 5, // 转换后的精度（小数点位数）
        viewportUnit: 'vw', // 转换的目标单位
        selectorBlackList: [], // 不需要转换的选择器
        minPixelValue: 1, // 最小转换值
        mediaQuery: false, // 是否转换媒体查询中的 px
        exclude: /node_modules/,
        include: /\/mobile\//,
      },
      // 'postcss-pxtorem': {
      //   rootValue({ file = '' }) {
      //     return file.indexOf('vant') !== -1 ? 37.5 : 75
      //   },
      //   propList: ['*'],
      //   mediaQuery: false,
      //   exclude: (file = '') => {
      //     // 只对 移动端的 /mobile/、vantUi 文件夹中的文件进行 px 转 rem，其他文件不转换
      //     const needRemArr = ['/mobile/', 'vant']
      //     const bl = needRemArr.find((item) => file?.includes(item))
      //     if (bl) return false
      //     return true
      //   },
      // },
    },
  },
  vite: {
    esbuild: {
      drop: ['debugger'],
      pure: process.env.NUXT_ENV === 'production' ? ['console.log'] : [], // Use NUXT_ENV to distinct between test and production
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: '星尘智能',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      style: [],
      script: [],
      noscript: [],
    },
  },
})
