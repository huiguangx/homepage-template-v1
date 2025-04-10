// tailwind.config.js
// import pxToViewport from 'tailwindcss-px-to-viewport'

module.exports = {
  // darkMode: false, // or 'media' or 'class'
  content: [
    './components/**/*.{vue,js}', // 扫描组件文件
    './layouts/**/*.vue', // 扫描布局文件
    './pages/**/*.{vue,js}', // 扫描页面文件
    './plugins/**/*.{js,ts}', // 扫描插件文件
    './nuxt.config.{js,ts}', // 扫描 Nuxt 配置文件（如果使用了 Tailwind 类）
    './app.vue', // 扫描根组件文件（如果有）
    './mobile/**/*.vue',
    './PC/**/*.vue',
  ],
  theme: {
    // extend: {
    //   pxToViewPort: {
    //     // 基准视口配置
    //     PresetScreen: {
    //       width: 750, // 默认设计稿宽度（单位：px）
    //       // height: 1334, // 默认设计稿高度（单位：px）
    //     },
    //     // 自定义扩展规则（可选）
    //     utilities: {
    //       // 在此添加自定义转换规则
    //     },
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // pxToViewport(), // 启用插件
  ],
}
