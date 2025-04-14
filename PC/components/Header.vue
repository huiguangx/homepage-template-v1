<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled || !isTransparentRoute
        ? 'bg-white shadow-sm text-gray-800 border-b border-gray-200'
        : 'bg-transparent text-white',
    ]"
  >
    <div class="mx-auto px-6 flex items-center justify-between h-16">
      <!-- 左侧 Logo -->
      <div class="flex items-center">
        <AppLink to="/" class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-purple-600"
          >
            <path d="M12 2L2 20H22L12 2Z" fill="currentColor" />
          </svg>
        </AppLink>
      </div>

      <!-- 右侧导航菜单 -->
      <nav class="flex items-center">
        <ul class="flex space-x-8">
          <li v-for="item in navItems" :key="item.path">
            <AppLink
              :to="item.path"
              class="group relative py-4 text-[32px] font-medium text-gray-800 hover:text-gray-100 transition-colors duration-300"
            >
              {{ item.name }}
              <div class="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
                <span
                  class="absolute bottom-0 left-1/2 h-full w-0 bg-gray-800 transform -translate-x-1/2 transition-all duration-300 ease-out"
                  :class="{
                    'w-full': $route.path === item.path, // 精确匹配当前路径
                    'group-hover:w-full': $route.path !== item.path, // 非当前路径悬停动画
                  }"
                  style="transform-origin: center"
                ></span>
              </div>
            </AppLink>
          </li>

          <!-- 语言切换按钮 -->
          <li>
            <button
              @click="switchLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="text-sm font-medium"
              :class="{
                'text-gray-800 hover:text-gray-600': isScrolled || !isTransparentRoute,
                'text-white hover:text-gray-200': !isScrolled && isTransparentRoute,
              }"
            >
              {{ locale === 'zh' ? 'EN' : '中文' }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- 占位元素，防止内容被固定导航栏遮挡 -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// 路由和滚动状态
const route = useRoute()
const isScrolled = ref(false)
const scrollThreshold = 50 // 滚动阈值，超过此值背景变为白色

// 导航项目
const { t } = useI18n()
const navItems = computed(() => [
  { name: t('menu.home'), path: '/' },
  { name: t('menu.products'), path: '/product' },
  { name: t('menu.careers'), path: '/careers' },
  { name: t('menu.about'), path: '/about' },
])

// 语言切换
const { locale } = useI18n()
const { switchLanguage } = useLanguageSwitch({ defaultLocale: 'zh', alwaysPrefix: false })

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

// 需要透明背景的路由路径列表（支持中英文）
const transparentRoutes = ref([
  '/',
  '/home',
  '/product',
  '/zh',
  '/zh/home',
  '/zh/product',
  '/en',
  '/en/home',
  '/en/product',
])

const isTransparentRoute = computed(() => {
  const isTransparentPath = transparentRoutes.value.some((path) => route.path.startsWith(path))
  // 透明路径页面：滚动后变白色
  // 非透明路径页面：滚动后变透明
  return isTransparentPath ? !isScrolled.value : isScrolled.value
})

const currentRoutePath = computed(() => route.path)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查滚动位置
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
